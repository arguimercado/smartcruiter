"use client";

import AuthForm from "@/components/controls/forms/AuthForm";
import FormField from "@/components/controls/inputs/FormField";

import { ROUTES } from "@/data/constants/routes";
import { AuthFormSchema, authFormSchema } from "@/data/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const MessagePartialComponent = () => (
   <>
      <span>No account yet?</span>
      <Link href={ROUTES.SIGNUP} className="font-bold text-primary ml-1">
         Sign Up
      </Link>
   </>
);



const SignInPage = () => {
   const formSchema = authFormSchema("sign-in");
   const form = useForm<AuthFormSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const handleSubmit = (values: AuthFormSchema) => {
      console.log("Form submitted with values:", values);
      // Handle sign-in logic here, e.g., API call
   };

   return (
      <AuthForm
         form={form}
         onSubmit={handleSubmit}
         buttonLabel="Sign In"
         message={<MessagePartialComponent />}
         render={(form) => (
            <>
               <FormField
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Your Email"
               />

               <FormField
                  control={form.control}
                  name="password"
                  label="Password"
                  type="password"
               />
            </>
         )}
      />
   );
};

export default SignInPage;
