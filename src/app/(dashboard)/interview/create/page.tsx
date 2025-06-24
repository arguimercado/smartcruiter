import { Card } from "@/components/ui/card";
import React from "react";
import CreateInterviewForm from "./_components/CreateInterviewForm";
import BackButton from "@/components/controls/commons/BackButton";
import StepWizard from "./_components/StepWizard";
import ViewQuestions from "./_components/ViewQuestions";
import FinalReviewComponent from "./_components/FinalReviewComponent";

const CreateInterviewPage = async ({searchParams} : {searchParams: Promise<{step: string | undefined, interviewId?: string}>}) => {
   
   
   const {step,interviewId} = await searchParams;
   
   const steps = ["Criteria", "Questions", "Review"];
   const currentStep = step ? parseInt(step as string, 10) : 1;

   return (
      <div className="flex flex-col items-start p-4 max-w-5xl m-auto">
         <BackButton className="mb-4">
            <h2 className="text-2xl font-bold item">
               Create Interview Criteria
            </h2>
         </BackButton>
         <StepWizard steps={steps} currentStep={currentStep === 0 ? 0 : currentStep - 1} />
         <Card className="w-full p-6">
            {currentStep === 1 && (
               <CreateInterviewForm />
            )}
            {currentStep === 2 && (
               <ViewQuestions interviewId={interviewId} />
            )}
            {currentStep === 3 && (
               <FinalReviewComponent />
            )}
         </Card>
      </div>
   );
};

export default CreateInterviewPage;
