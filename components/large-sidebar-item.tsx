import React from "react";
import { LucideIcon } from "lucide-react";

type LargeSidebarItemProps = {
   label: string;
   icon?: LucideIcon;
   imgUrl?: string;
   url: string;
};

export function LargeSidebarItem({
   label,
   icon: Icon,
   imgUrl,
   url,
}: LargeSidebarItemProps) {
   const [selectedLink] = React.useState("Home");

   return (
      <a
         href={url}
         className={`flex gap-x-5 items-center rounded-lg text-sm p-3 w-full ${
            selectedLink === label
               ? "font-medium bg-neutral-100 hover:bg-secondary-default transition"
               : "hover:bg-neutral-100 transition"
         }`}
      >
         {Icon && <Icon className="w-6 h-6" />}
         {imgUrl && <img src={imgUrl} className="w-6 h-6 rounded-full" />}
         {label}
      </a>
   );
}
