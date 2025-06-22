import { z } from "zod";


export const interviewSchema = z.object({
   
   position: z.string().min(1, "Title is required"),
   description: z.string().min(1, "Description is required"),
   experience: z.coerce.number().min(0, "Experience must be a positive number").optional(),
   duration: z.string().min(1, "Duration is required"),
   interviewType: z.string().optional()
})

export type InterviewSchema = z.infer<typeof interviewSchema>;