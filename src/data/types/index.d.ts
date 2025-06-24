import { LucideIcon } from "lucide-react";

interface APIResponse<T> {
  success: boolean;
  data: T;
}

interface ErrorResponse  {
  success: boolean;
  error: string;
}



type SignUpParams = {
  uid?: string;
  name: string;
  email: string;
  password: string;
}

type SignInParams = {
  email: string;
  password: string;
}


type User = {
  name: string;
  email: string;
  id: string;
}


type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: LucideIcon; // Optional icon for the option
};

type InterviewQuestions = {
  id:string;
  position: string;
  description: string;
  duration: number;
  interviewType: string;
  experience: string;
  questions: string[];
  finalized: boolean;
  userId: string;
  createAt: string;
};