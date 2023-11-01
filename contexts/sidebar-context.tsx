import React from "react";

type SidebarProviderProps = {
   children: React.ReactNode;
};

type SidebarContextType = {
   isSmallOrMediumOpen: boolean;
   isLargeOpen: boolean;
   toggle: () => void;
   close: () => void;
};

const SidebarContext = React.createContext<SidebarContextType | null>(null);

export function SidebarProvider({ children }: SidebarProviderProps) {
   const [isSmallOrMediumOpen, setIsSmallOrMediumOpen] = React.useState(false);
   const [isLargeOpen, setIsLargeOpen] = React.useState(true);

   React.useEffect(() => {
      function handler() {
         if (window.innerWidth >= 1024) setIsSmallOrMediumOpen(false);
      }

      window.addEventListener("resize", handler);

      return () => {
         window.removeEventListener("resize", handler);
      };
   }, []);

   function isSmallOrMediumScreen() {
      return window.innerWidth < 1024;
   }

   function toggle() {
      if (isSmallOrMediumScreen()) {
         setIsSmallOrMediumOpen((value) => !value);
      } else {
         setIsLargeOpen((value) => !value);
      }
   }

   function close() {
      if (isSmallOrMediumScreen()) {
         setIsSmallOrMediumOpen(false);
      } else {
         setIsLargeOpen(false);
      }
   }

   return (
      <SidebarContext.Provider
         value={{ isSmallOrMediumOpen, isLargeOpen, toggle, close }}
      >
         {children}
      </SidebarContext.Provider>
   );
}

export function useSidebarContext() {
   const value = React.useContext(SidebarContext);

   if (value == null) {
      throw Error("Cannot use the value outside of SidebarProvider");
   }

   return value;
}
