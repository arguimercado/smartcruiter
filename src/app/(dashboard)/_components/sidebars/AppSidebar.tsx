import React from "react";
import Link from "next/link";
import {
   Sidebar,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuItem,
} from "@/components/ui/sidebar"; // Adjust import path as needed
import { Button } from "@/components/ui/button";
import { menuData } from "@/data/items/sidemenu";

const AppSidebar: React.FC = () => {
   return (
      <Sidebar className="h-screen w-64 bg-white border-r flex flex-col">
         <SidebarHeader>
            <div className="w-full">
               <Button asChild className="w-full bg-primary-200 hover:bg-primary-100 text-neutral-900">
                  <Link href="/create" className="w-full">
                     Create Interview
                  </Link>
               </Button>
            </div>
            <SidebarGroup>
               <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
               <SidebarGroupContent>
                  <SidebarMenu className="flex flex-col gap-2 space-y-2">
                     {menuData.map((item) => (
                        <SidebarMenuItem key={item.href}>
                           <Link
                              href={item.href}
                              className="flex items-center gap-2 px-2  py-2 rounded hover:bg-gray-100 transition-colors"
                              aria-current={typeof window !== "undefined" && window.location.pathname === item.href ? "page" : undefined}
                           >
                              {item.icon && <item.icon size={20} />}
                              {item.label}
                           </Link>
                        </SidebarMenuItem>
                     ))}
                  </SidebarMenu>
               </SidebarGroupContent>
            </SidebarGroup>
         </SidebarHeader>
      </Sidebar>
   );
};

export default AppSidebar;
