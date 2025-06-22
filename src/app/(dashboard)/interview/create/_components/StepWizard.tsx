import React from "react";

interface StepWizardProps {
  steps: string[];
  currentStep: number;
}

const StepWizard: React.FC<StepWizardProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center mb-6 w-full">
      {steps.map((step, idx) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full w-8 h-8 flex items-center justify-center text-white font-bold
                ${idx <= currentStep ? "bg-blue-600" : "bg-gray-300"}
              `}
            >
              {idx + 1}
            </div>
            <span className="text-xs mt-2 text-center w-20">{step}</span>
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2
                ${idx < currentStep ? "bg-blue-600" : "bg-gray-300"}
              `}
              style={{ minWidth: 32 }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepWizard;