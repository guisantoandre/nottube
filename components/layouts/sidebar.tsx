import { Home, LucideIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { buttonStyles } from "@/components/ui/button";
import { sidebarItems } from "@/data/home";
import React from "react";

export function Sidebar() {
   return (
      <>
         <aside className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 px-2 flex flex-col ml-1 lg:hidden">
            {sidebarItems.map((item) => (
               <SmallSidebarItem key={item.label} {...item} />
            ))}
         </aside>
         <aside className="w-56 absolute top-0 lg:sticky overflow-y-auto scrollbar-hidden pb-4 flex flex-col px-2">
            <LargeSidebarSection>
               {sidebarItems.map((item) => (
                  <LargeSidebarItem key={item.label} {...item} />
               ))}
            </LargeSidebarSection>
         </aside>
      </>
   );
}

type SmallSidebarItemProps = {
   label: string;
   icon: LucideIcon;
   url: string;
};

// Small Sidebar
function SmallSidebarItem({ label, icon: Icon, url }: SmallSidebarItemProps) {
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

// Large Sidebar
function LargeSidebarSection({ children }: { children: React.ReactNode }) {
   return children;
}

type LargeSidebarItemProps = {
   label: string;
   icon: LucideIcon;
   url: string;
};

function LargeSidebarItem({ label, icon: Icon, url }: LargeSidebarItemProps) {
   const [selectedLink] = React.useState(sidebarItems[0].label);

   return (
      <a
         href={url}
         className={`flex gap-x-5 items-center rounded-lg text-sm p-3 w-full ${
            selectedLink === label
               ? "font-medium bg-neutral-100 hover:bg-secondary-default transition"
               : ""
         }`}
      >
         <Icon className="w-6 h-6" />
         {label}
      </a>
   );
}
