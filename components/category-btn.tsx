import { categories } from "@/data/home";
import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CategoryBtn() {
   const [selectedCategory, setSelectedCategory] = React.useState(
      categories[0]
   );
   const [btnLeftVisible, setBtnLeftVisible] = React.useState(false);
   const [btnRightVisible, setBtnRightVisible] = React.useState(true);
   const [translate, setTranslate] = React.useState(0);
   const categoryContainerRef = React.useRef<HTMLDivElement>(null);

   function onSelect(category: string) {
      setSelectedCategory(category);
   }

   const translateAmount = 200;

   function translateLeft() {
      const newTranslate = translate - translateAmount;
      if (newTranslate <= 0) {
         setTranslate(0);
         setBtnLeftVisible(false);
      } else {
         setTranslate(newTranslate);
         setBtnRightVisible(true);
      }
   }

   function translateRight() {
      if (categoryContainerRef.current === null) return;
      const newTranslate = translate + translateAmount;
      const containerWidth = categoryContainerRef.current?.scrollWidth;
      const viewContainerWidth = categoryContainerRef.current?.offsetWidth;

      if (newTranslate + viewContainerWidth >= containerWidth) {
         setTranslate(containerWidth - viewContainerWidth);
         setBtnRightVisible(false);
      } else {
         setTranslate(newTranslate);
         setBtnLeftVisible(true);
      }
   }

   return (
      <div
         ref={categoryContainerRef}
         className="overflow-x-hidden relative pt-1"
      >
         <div
            className="flex whitespace-nowrap gap-3 w-[max-content] my-2 transition-transform"
            style={{ transform: `translateX(-${translate}px)` }}
         >
            {categories.map((category) => (
               <Button
                  key={category}
                  variant={`${
                     selectedCategory === category ? "dark" : "default"
                  }`}
                  className="py-1 px-3 rounded-lg whitespace-nowrap text-sm font-medium select-none"
                  onClick={() => onSelect(category)}
               >
                  {category}
               </Button>
            ))}
         </div>
         {btnLeftVisible && (
            <div
               className="absolute left-0 top-0 bg-gradient-to-r from-white from-50% to-transparent w-24"
               onClick={translateLeft}
            >
               <Button variant="ghost" size="icon" className="p-1.5 w-11 h-11">
                  <ChevronLeft />
               </Button>
            </div>
         )}
         {btnRightVisible && (
            <div className="absolute right-0 top-0 bg-gradient-to-l from-white from-50% to-transparent w-24 flex justify-end">
               <Button
                  variant="ghost"
                  size="icon"
                  className="p-1.5 w-11 h-11"
                  onClick={translateRight}
               >
                  <ChevronRight />
               </Button>
            </div>
         )}
      </div>
   );
}
