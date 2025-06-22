import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const UserAvatar = () => {
   return (
      <div className="flex items-center space-x-3 p-2 rounded-lg bg-white ">
         <Avatar className="w-10 h-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Chad Next</span>
            <span className="text-xs text-gray-500">chad@nextjs.com</span>
         </div>
      </div>
   );
};

export default UserAvatar;
