import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

type LargeSidebarSectionProps = {
   children: React.ReactNode;
   title?: string;
   visibleItemCount: number;
};

export function LargeSidebarSection({
   children,
   title,
   visibleItemCount,
}: LargeSidebarSectionProps) {
   const [isExpanded, setIsExpanded] = React.useState(false);

   const childrenArray = React.Children.toArray(children);
   const visibleChildren = isExpanded
      ? childrenArray
      : childrenArray.slice(0, visibleItemCount);
   const showExpandButton = childrenArray.length > visibleItemCount;
   const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

   return (
      <div className="my-3">
         {title && <h3 className="font-bold ml-4 my-2">{title}</h3>}
         {visibleChildren}
         {showExpandButton && (
            <Button
               variant="ghost"
               className="flex gap-x-5 items-center rounded-lg text-sm p-3 w-full hover:bg-neutral-100 transition"
               onClick={() => setIsExpanded((value) => !value)}
            >
               <ButtonIcon className="w-6 h-6" />
               <span className="font-medium">
                  {isExpanded ? "Show less" : "Show more"}
               </span>
            </Button>
         )}
      </div>
   );
}
