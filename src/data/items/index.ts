import { BriefcaseBusiness, CodeXmlIcon, ComponentIcon, PuzzleIcon, UserRound } from "lucide-react"


export const onBoardMenu = [
   {
      title: "Features",
      link: "#/features",

   },
   {
      title: "Pricing",
      link: "#/pricing",
   },
   {
      title: "How it works",
      link: "#/how-it-works",
   },
   {
      title: "Contact Us",
      link: "#/contact-us",
   },
  
]

export const durationOptions  = [
   { value: "15", label: "15 minutes" },
   { value: "30", label: "30 minutes" },
   { value: "45", label: "45 minutes" },
   { value: "60", label: "1 hour" },
   { value: "90", label: "1 hour 30 minutes" },
]

export const interviewTypeOptions = [
   { value: "Technical", label: "Technical", icon: CodeXmlIcon },
   { value: "Behavioral", label: "Behavioral", icon: UserRound },
   {value: "Experience", label: "Experience", icon: BriefcaseBusiness },
   {value: "Leadership", label: "Leadership", icon: ComponentIcon },
   {value: "Problem Solving", label: "Problem Solving", icon: PuzzleIcon },
]