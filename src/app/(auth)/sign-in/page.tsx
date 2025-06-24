"use client";

import AuthForm from "@/components/controls/forms/AuthForm";
import FormField from "@/components/controls/inputs/FormField";

import { ROUTES } from "@/data/constants/routes";
import { AuthFormSchema, authFormSchema } from "@/data/schema/authSchema";
import { signIn } from "@/hooks/actions/auth.action";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const MessagePartialComponent = () => (
   <>
      <span>No account yet?</span>
      <Link href={ROUTES.SIGNUP} className="font-bold text-primary ml-1">
         Sign Up
      </Link>
   </>
);



const SignInPage = () => {

   const router= useRouter();
   const formSchema = authFormSchema("sign-in");
   const form = useForm<AuthFormSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const handleSubmit = async (values: AuthFormSchema) => {
      try {
         const { email, password } = values;
         const results = await signIn({ email, password });
         if(!results.success) {
            throw new Error(results.message);
         }

         toast.success("Sign-in successful!");
         router.push(ROUTES.DASHBOARD);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      catch (error:any) {
          toast.error(error.message);
         console.error(error);
      }
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
