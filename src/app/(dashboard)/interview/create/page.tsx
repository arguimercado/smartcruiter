import { Card } from "@/components/ui/card";
import React from "react";
import CreateInterviewForm from "./_components/CreateInterviewForm";
import BackButton from "@/components/controls/commons/BackButton";
import StepWizard from "./_components/StepWizard";

const CreateInterviewPage = async ({searchParams} : {searchParams: {[key:string]: string | undefined}}) => {
   
   
   const urlStep = await searchParams.step;
   
   const steps = ["Criteria", "Questions", "Review"];
   const currentStep = urlStep ? parseInt(urlStep as string, 10) : 0;

   return (
      <div className="flex flex-col items-start p-4 max-w-3xl m-auto">
         <BackButton className="mb-4">
            <h2 className="text-2xl font-bold item">
               Create Interview Criteria
            </h2>
         </BackButton>
         <StepWizard steps={steps} currentStep={currentStep === 0 ? 0 : currentStep - 1} />
         <Card className="w-full p-6">
            <CreateInterviewForm />
         </Card>
      </div>
   );
};

export default CreateInterviewPage;
