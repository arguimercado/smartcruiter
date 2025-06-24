"use server";
import { InterviewSchema } from "@/data/schema/interviewSchema";
import { APIResponse, InterviewQuestions } from "@/data/types";
import { getCurrentUser } from "../auth.action";
import { db } from "@/lib/firebase/admin";

export async function getAllInterviews(): Promise<APIResponse<InterviewQuestions[]>> {
   const user = await getCurrentUser();

   const interviewsSnapshot = await db.collection("interviews")
      .where("userId", "==", user?.id)
      .get();
   console.log("interviewsSnapshot", interviewsSnapshot.docs);
   const interviews: InterviewQuestions[] = interviewsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as Omit<InterviewQuestions, "id">)
   }));

   return { success: true, data: interviews };
}

export async function generateInterview(params: InterviewSchema) : Promise<APIResponse<Pick<InterviewQuestions,"id">>> {
   
   //get the user id
   const user = await getCurrentUser();
   
   //fetch post request
   const response = await fetch("http://localhost:3000/api/gemini/generate", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({...params, userid: user?.id}),
   });

   const data = await response.json() as APIResponse<Pick<InterviewQuestions,"id">>;

   return data;
  
}

export async function getInterview(interviewId: string): Promise<InterviewQuestions | undefined> {
   
   if(interviewId === undefined || interviewId === "") {
      return undefined;
   }

   //i want to get the interview questions from the database by id
   const interview = await db.collection("interviews").doc(interviewId).get();
  
   
   const data = interview.data();
   if (!data) return undefined;

   return {
      id: interview.id,
      ...(data as Omit<InterviewQuestions, "id">)
   };
}