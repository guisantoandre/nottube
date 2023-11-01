import { twMerge } from "tailwind-merge";
import { LucideIcon } from "lucide-react";

import { buttonStyles } from "@/components/ui/button";

type SmallSidebarItemProps = {
   label: string;
   icon: LucideIcon;
   url: string;
};

export function SmallSidebarItem({
   label,
   icon: Icon,
   url,
}: SmallSidebarItemProps) {
   return (
      <a
         href={url}
         className={twMerge(
            buttonStyles({ variant: "ghost" }),
            "flex flex-col gap-1 items-center rounded-lg text-xs"
         )}
      >
         <Icon className="w-6 h-6" />
         {label}
      </a>
   );
}
