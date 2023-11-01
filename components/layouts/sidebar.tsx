import React from "react";

import {
   explore,
   homeLinks,
   playlists,
   subscriptions,
   userLinks,
} from "@/data/sidebar";
import { LargeSidebarItem } from "@/components/large-sidebar-item";
import { SmallSidebarItem } from "@/components/small-sidebar-item";
import { LargeSidebarSection } from "@/components/large-sidebar-section";
import { useSidebarContext } from "@/contexts/sidebar-context";
import { ToggleBtnAndLogo } from "./togglebtn-and-logo";

export function Sidebar() {
   const { isSmallOrMediumOpen, isLargeOpen, close } = useSidebarContext();

   return (
      <>
         <aside
            className={`hidden sticky top-0 overflow-y-auto scrollbar-hidden py-3 px-2 md:flex flex-col ml-1 ${
               isLargeOpen ? "lg:hidden" : "lg:flex"
            }`}
         >
            {homeLinks.map((item) => (
               <SmallSidebarItem key={item.label} {...item} />
            ))}
         </aside>
         {isSmallOrMediumOpen && (
            <div
               onClick={close}
               className="lg:hidden fixed inset-0 bg-black/20 z-[998]"
            />
         )}
         <aside
            className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 lg:flex flex-col px-2 ${
               isLargeOpen ? "lg:flex" : "lg:hidden"
            } ${
               isSmallOrMediumOpen
                  ? "flex z-[999] bg-white max-h-screen"
                  : "hidden"
            }`}
         >
            <div className="lg:hidden pt-2 px-2 sticky top-0 bg-white z-10">
               <ToggleBtnAndLogo />
            </div>
            <LargeSidebarSection visibleItemCount={3}>
               {homeLinks.map((item) => (
                  <LargeSidebarItem key={item.label} {...item} />
               ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={5}>
               {userLinks.map((item) => (
                  <LargeSidebarItem key={item.label} {...item} />
               ))}
               {playlists.map((playlist) => (
                  <LargeSidebarItem key={playlist.id} {...playlist} />
               ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={4} title="Subscriptions">
               {subscriptions.map((subscription) => (
                  <LargeSidebarItem key={subscription.id} {...subscription} />
               ))}
            </LargeSidebarSection>
            <hr />
            <LargeSidebarSection visibleItemCount={7} title="Explore">
               {explore.map((item) => (
                  <LargeSidebarItem key={item.label} {...item} />
               ))}
            </LargeSidebarSection>
         </aside>
      </>
   );
}
