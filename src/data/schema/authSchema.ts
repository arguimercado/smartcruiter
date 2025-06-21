import { z } from "zod";

type FormType = "sign-in" | "sign-up";

export const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
}

export type AuthFormSchema = z.infer<ReturnType<typeof authFormSchema>>;