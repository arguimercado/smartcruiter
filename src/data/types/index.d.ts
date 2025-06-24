import { LucideIcon } from "lucide-react";

interface APIResponse<T> {
  success: boolean;
  data: T;
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


type SelectOption  = {
   label: string;
   value: string;
   disabled?: boolean;
   icon?: LucideIcon; // Optional icon for the option
};