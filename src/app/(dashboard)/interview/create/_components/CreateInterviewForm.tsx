"use client";

import FormField from "@/components/controls/inputs/FormField";
import FormSelectField from "@/components/controls/inputs/FormSelectField";
import FormTagSelection from "@/components/controls/inputs/FormTagSelection";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { durationOptions, interviewTypeOptions } from "@/data/items";
import {
   InterviewSchema,
   interviewSchema,
} from "@/data/schema/interviewSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import {  useForm } from "react-hook-form";

const CreateInterviewForm = () => {
   const router = useRouter();
   const form = useForm<InterviewSchema>({
      resolver: zodResolver(interviewSchema),
      defaultValues: {
         position: "",
         description: "",
        
         experience: 0, // Default experience in years
         duration: "30", // Default duration in minutes
         interviewType: "Technical", // Default interview type

      },
   });

   const handleSubmit = (data: InterviewSchema) => {
      console.log("Form submitted with data:", data);
      router.push(`/interview/create?step=2`)
   };
   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
         >
            <div className="flex flex-col space-y-2">
               <FormField 
                  control={form.control}
                  name="position"
                  label="Position"
                  placeholder="Enter the position for the interview"
               />
               <FormField 
                  control={form.control}
                  name="description"
                  label="Description"
                  textarea
                  rows={10}
                  placeholder="Enter a brief description of the interview"
               />
               <FormField 
                  control={form.control}
                  name="experience"
                  label="Experience (in years)"
                  type="number"
                  placeholder="Enter the required experience in years"
                  />
               <FormSelectField 
                  control={form.control}
                  name="duration"
                  label="Interview Type"
                  options={durationOptions}
                  placeholder="Select the type of interview"
               />
               <FormTagSelection 
                  control={form.control}
                  name="interviewType"
                  label="Select Interview Type"
                  options={interviewTypeOptions}
               />
            </div>
            <div>
               <Button type="submit">Generate Question</Button>
            </div>
         </form>
      </Form>
   );
};

export default CreateInterviewForm;
