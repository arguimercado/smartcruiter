import { Card } from "@/components/ui/card";
import React from "react";
import CreateInterviewForm from "./_components/CreateInterviewForm";
import BackButton from "@/components/controls/commons/BackButton";
import StepWizard from "./_components/StepWizard";

const CreateInterviewPage = async ({searchParams} : {searchParams: Promise<{step: string | undefined}>}) => {
   
   
   const {step} = await searchParams;
   
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
               <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4">Generate Questions</h3>
               </div>
            )}
         </Card>
      </div>
   );
};

export default CreateInterviewPage;
