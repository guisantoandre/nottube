import { useSidebarContext } from "@/contexts/sidebar-context";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function ToggleBtnAndLogo({ hidden = false }: { hidden?: boolean }) {
   const { toggle } = useSidebarContext();

   return (
      <div
         className={`items-center flex-shrink-0 gap-2 ${
            hidden ? "hidden" : "flex"
         }`}
      >
         <Button variant="ghost" size="icon" onClick={toggle}>
            <Menu />
         </Button>

         <a href="/" className="font-black text-2xl tracking-tighter">
            NotTube
         </a>
      </div>
   );
}
