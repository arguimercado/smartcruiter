"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { InterviewQuestions } from "@/data/types";
import { getAllInterviews } from "@/hooks/actions/interviews/generate.action";
import React, { useEffect } from "react";

const PreviousInterviewGrid = () => {
   const [interviews, setInterviews] = React.useState<InterviewQuestions[]>([]);

   useEffect(() => {
      // Fetch previous interviews from the server or state management
      const fetchAllInterviewsByUser = async () => {
         const response = await getAllInterviews();

         setInterviews(response?.data ?? []);
      };

      fetchAllInterviewsByUser();
   }, []);

   return (
      <div className="w-full flex-col">
         {interviews.length === 0 && (
            <div className="w-full flex flex-col items-center justify-center h-64">
               <h1 className="text-2xl font-bold pb-2 border-b border-gray-200">
                  No Previous Interviews
               </h1>
               <Button className="mt-4 bg-amber-100 hover:bg-amber-200 text-amber-800">
                  Create New Interview
               </Button>
            </div>
         )}

         {interviews.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative p-4">
               {interviews.map((interview) => (
                  <Card
                     key={interview.id}
                     className="shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[120px] relative"
                  >
                     <CardHeader>
                        <h3 className="text-lg">
                           <span className="font-bold">Position:</span>{" "}
                           {interview.position}
                        </h3>
                     </CardHeader>
                     <CardContent className="flex-1">
                        <p className="text-sm text-justify text-gray-500">
                           {interview.description}
                        </p>
                        <p className="text-sm text-gray-400 mt-2">
                           Created on:{" "}
                           {new Date(interview.createAt).toLocaleDateString()}
                        </p>
                     </CardContent>
                     <CardFooter className="abolute bottom-0 left-0 right-0 p-4">
                        <Button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">
                           View Details
                        </Button>

                     </CardFooter>
                  </Card>
               ))}
            </div>
         )}
      </div>
   );
};

export default PreviousInterviewGrid;
