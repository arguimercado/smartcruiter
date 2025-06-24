"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InterviewQuestions } from "@/data/types";
import { getInterview } from "@/hooks/actions/interviews/generate.action";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const QuestionCard = ({
   question,
   index,
}: {
   question: string;
   index: number;
}) => {
   return (
      <Card className="mb-4 p-4 border rounded-xl">
         <CardHeader className="flex flex-col items-start">
            <CardTitle className="text-lg font-semibold text-neutral-600">
               Question {index + 1}
            </CardTitle>
            <CardDescription className="text-sm text-slate-500">AI Generated Question</CardDescription>
         </CardHeader>
         <CardContent className="flex flex-col">
            <p className="text-base font-semibold mb-2">
               {question}
            </p>
         </CardContent>
           <CardFooter className="flex items-center justify-end">
            <Button variant={"ghost"} className="text-red-500 hover:bg-red-100">
               <Trash2Icon className="h-4 w-4" />
            </Button>
            <Button variant={"ghost"} className="text-sky-500 hover:bg-sky-100">
               <PencilIcon className="h-4 w-4" />
            </Button>
         </CardFooter>
      </Card>
   );
};

const ViewQuestions = ({ interviewId }: { interviewId?: string }) => {
   const router = useRouter();
   const [interview, setInterview] = useState<InterviewQuestions | undefined>(
      undefined
   );

   useEffect(() => {
      const fetchQuestions = async () => {
         const response = await getInterview(interviewId || "");
         setInterview(response);
      };

      fetchQuestions();
   }, [interviewId]);

   return (
      <div className="flex flex-col items-start p-4 max-w-5xl m-auto">
         <h1 className="text-2xl font-bold text-neutral-400 pb-4">
            Interview Generated
         </h1>
         <div className="w-full flex flex-col mb-4">
            <p className="text-base mb-2">
               <span className="font-bold ">Position:</span>{" "}
               {interview?.position || "N/A"}
            </p>
            <p className="text-base">
               <span className="font-bold">Description:</span>{" "}
               {interview?.description}
            </p>
            <div className="flex flex-row items-center gap-4 mt-2">
               <p className="text-sm">
                  <span className="font-bold">Experience:</span>{" "}
                  {interview?.experience || 0} years
               </p>
               <p className="text-sm">
                  <span className="font-bold">Duration:</span>{" "}
                  {interview?.duration || "30"} minutes
               </p>
               <p className="text-sm">
                  <span className="font-bold">Type:</span>{" "}
                  {interview?.interviewType || "Technical"}
               </p>
            </div>
         </div>
         <div className="w-full flex flex-col mt-10">
            <h1 className="text-xl mb-2">AI Generated Questions</h1>
            {interview !== undefined &&
               interview.questions.map((question, index) => (
                  <QuestionCard key={index} question={question} index={index} />
               ))}
         </div>
         <Button 
            className="mt-4" variant="secondary"
            onClick={() => router.push("/interview/create?step=3")}
         >
            Finalize Interview
         </Button>
      </div>
   );
};

export default ViewQuestions;
