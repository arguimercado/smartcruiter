"use server";
import { InterviewSchema } from "@/data/schema/interviewSchema";
import { APIResponse, InterviewQuestions } from "@/data/types";
import { getCurrentUser } from "../auth.action";

export async function generateInterview(params: InterviewSchema) : Promise<APIResponse<InterviewQuestions>>  {
   
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

   const data = await response.json() as APIResponse<InterviewQuestions>;

   return data;
}