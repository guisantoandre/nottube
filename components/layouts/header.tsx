import { ArrowLeft, Bell, Menu, Mic, Search, User, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import React from "react";
import { ToggleBtnAndLogo } from "./togglebtn-and-logo";

export function Header() {
   const [showSearchForm, setShowSearchForm] = React.useState(false);

   return (
      <header className="flex gap-10 lg:gap-20 justify-between pt-2 pb-2 px-4">
         <ToggleBtnAndLogo hidden={showSearchForm} />

         <form
            className={`gap-4 flex-grow items-center justify-center ${
               showSearchForm ? "flex" : "hidden md:flex"
            }`}
         >
            <div className="flex flex-grow max-w-[600px]">
               {showSearchForm && (
                  <Button
                     type="button"
                     variant="ghost"
                     size="icon"
                     className="mr-3"
                     onClick={() => setShowSearchForm(false)}
                  >
                     <ArrowLeft />
                  </Button>
               )}
               <input
                  type="search"
                  placeholder="Search"
                  className="w-full rounded-l-full border border-secondary-border py-1 px-4 text-lg outline-none focus:border-blue-500"
               />
               <Button className="rounded-r-full border border-l-0 border-secondary-border py-1 px-4">
                  <Search />
               </Button>
            </div>
            <Button type="button" size="icon">
               <Mic />
            </Button>
         </form>
         <div
            className={`flex-shrink-0 gap-2 md:gap-3 ${
               showSearchForm ? "hidden" : "flex"
            }`}
         >
            <Button
               variant="ghost"
               size="icon"
               className="md:hidden"
               onClick={() => setShowSearchForm(true)}
            >
               <Search />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
               <Mic />
            </Button>
            <Button variant="ghost" size="icon">
               <Video />
            </Button>
            <Button variant="ghost" size="icon">
               <Bell />
            </Button>
            <Button variant="ghost" size="icon">
               <User />
            </Button>
         </div>
      </header>
   );
}
