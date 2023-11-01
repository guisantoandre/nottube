import { useSidebarContext } from "@/contexts/sidebar-context";
import { Button } from "@/components/ui/button";
import { Menu, Youtube } from "lucide-react";

export function ToggleBtnAndLogo({ hidden = false }: { hidden?: boolean }) {
   const { toggle } = useSidebarContext();

   return (
      <div
         className={`items-center flex-shrink-0 gap-3 ${
            hidden ? "hidden" : "flex"
         }`}
      >
         <Button variant="ghost" size="icon" onClick={toggle}>
            <Menu />
         </Button>

         <a
            href="/"
            className="font-bold text-2xl tracking-tighter flex items-center gap-x-1"
         >
            <Youtube className="w-8 h-8" strokeWidth={2} />
            NotTube
         </a>
      </div>
   );
}
