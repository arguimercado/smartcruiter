import { Calendar1Icon, HomeIcon, Settings2Icon, Users2Icon } from "lucide-react";

export const menuData = [
   {
      label: "Dashboard",
      icon: HomeIcon,
      href: "/dashboard",
   },
   {
      label: "Schedule Interviews",
      icon: Calendar1Icon,
      href: "/interviews",
   },
   {
      label: "Candidates",
      icon: Users2Icon,
      href: "/candidates",
   },
   {
      label: "Settings",
      icon: Settings2Icon,
      href: "/settings",
   }
];
