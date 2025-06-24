import { APIResponse } from "@/data/types";
import { db } from "@/lib/firebase/admin";
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY});

export async function GET() {
   return Response.json({ success: true, data: 'Hello from VAPI!' } as APIResponse<string>, { status: 200 });
}


export async function  POST(request: Request) {

   const {position,description,experience,duration,interviewType, userid} = await request.json();

   try {
      const {text: questions} = await ai.models.generateContent({
         model: "gemini-2.0-flash-001",
         contents: `Prepare questions for a crew maritime job interview.
                  The job role is ${position}.
                  The job description is: ${description}.
                  The job experience level is ${experience}.
                  The focus between Technical,behavioural,experience,leadership and problem solving questions should lean towards: ${interviewType}.
                  The amount of questions required is: ${duration} minute question.
                  Please return only the questions, without any additional text.
                  The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
                  Return the questions formatted like this:
                  ["Question 1", "Question 2", "Question 3"]
                  
                  Thank you! <3`
      });

      const interviewQuestions = {
         position,
         description,
         duration,
         interviewType,
         experience,
         questions: JSON.parse(questions ?? "[]"),
         finalized: true,
         userId: userid,
         createAt: new Date().toISOString(),
         
      }

      await db.collection("interviews").add(interviewQuestions);

       return Response.json({ success: true, data: interviewQuestions } as APIResponse<typeof interviewQuestions>, { status: 200 });
   }
   catch (error) {
      
      console.log("Error in Gemini API:", error);
      
      return Response.json({success: false, error: "Failed to generate interview questions"}, {status: 500});
   }

}