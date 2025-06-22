import { FieldValues, UseFormReturn } from "react-hook-form";

import { Form } from "@/components/ui/form";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface IProps<T extends FieldValues> {
   form: UseFormReturn<T>;
   render: (form: UseFormReturn<T>) => React.ReactNode;
   onSubmit: (values: T) => void | Promise<void> | undefined;
   buttonLabel?: string;
   message?: React.ReactNode;
}
const AuthForm = <T extends FieldValues>({
   render,
   onSubmit,
   form,
   buttonLabel,
   message,
}: IProps<T>) => {
   return (
         <div className="card-border lg:min-w-[566px]">
            <div className={"flex flex-col gap-6 card py-14 px-10"}>
               <div className="flex flex-row gap-2 justify-center w-full items-center">
                  <Image src="/rec-logo.webp" alt="logo" width={50} height={50} className="w-[50px] h-[50px] object-fill"/>
                  <h2 className="text-primary-200 font-bold text-2xl">SmartCruitment</h2>
               </div>
              
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="w-full space-y-6 mt-4 form"
                  >
                     {render(form)}
                     <Button type="submit" className="btn w-full">
                        {buttonLabel}
                     </Button>
                  </form>
               </Form>
               <p className="text-center">{message ?? message}</p>
            </div>
         </div>
   );
};
export default AuthForm;
