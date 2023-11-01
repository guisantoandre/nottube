import { Roboto } from "next/font/google";

import { CategoryBtn } from "@/components/category-btn";
import { Header } from "@/components/layouts/header";
import { VideoItem } from "@/components/video-item";
import { videos } from "@/data/home";
import { Sidebar } from "@/components/layouts/sidebar";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
   return (
      <div className={`max-h-screen ${roboto.className} flex flex-col`}>
         <Header />
         <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
            <Sidebar />
            <div className="overflow-x-hidden px-6 pb-4">
               <div className="sticky top-0 z-50 bg-white">
                  <CategoryBtn />
               </div>
               <div className="col-start-2 grid gap-y-6 gap-x-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-4">
                  {videos.map((video) => (
                     <VideoItem key={video.id} {...video} />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
