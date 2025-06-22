
import FormField from "@/components/controls/inputs/FormField";
import { ROUTES } from "@/data/constants/routes";
import { AuthFormSchema, authFormSchema } from "@/data/schema/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "@/components/controls/forms/AuthForm";
import { signUp } from "@/hooks/actions/auth.action";
import { toast } from "sonner";

const MessagePartialComponent = () => (
   <>
      <span>Already have an account?</span>
      <Link href={ROUTES.SIGNIN} className="font-bold text-user-primary ml-1">
         Sign-In
      </Link>
   </>
);

const SignUpPage = () => {
   
   const formSchema = authFormSchema("sign-up");
   const router = useRouter();

   const form = useForm<AuthFormSchema>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
         name: "",
      }
   });

   const handleSubmit =  async (values: AuthFormSchema) => {
      try {

         const {name,email,password} = values;
         const results = await signUp({name: name!,email,password});
         
         if(!results.success) {
            throw new Error(results.error);
         }

         toast.success("Account created successfully!");
         router.push(ROUTES.SIGNIN);
      }
      catch (error) {
         toast.error(`Sign Up failed: ${error instanceof Error ? error.message : "An unexpected error occurred."}`);
      }
   }
   
   return (
      <AuthForm 
         form={form}
         onSubmit={handleSubmit}
         buttonLabel="Sign Up"
         message={<MessagePartialComponent />}
         render={(form) => (
            <>
               <FormField 
                  control={form.control}
                  name="name"
                  label="Name"
                  placeholder="Your Name"
               />
               <FormField 
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Your Email"
               />
               <FormField 
                  control={form.control}
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Your Password"
               />
            </>
         )}

      />
   );
};

export default SignUpPage;
