import { Roboto } from "next/font/google";

import { CategoryBtn } from "@/components/category-btn";
import { Header } from "@/components/layouts/header";
import { VideoItem } from "@/components/video-item";
import { videos } from "@/data/home";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function Home() {
   return (
      <div className={`max-h-screen ${roboto.className} flex flex-col`}>
         <Header />
         <div className="grid grid-cols-[auto,1fr] flex-grow-1 pr-4 overflow-auto">
            <div className="bg-neutral-300 p-5 font-bold w-52">Sidebar</div>
            <div className="sticky top-0 h-[48px] overflow-x-hidden z-50 bg-white">
               <div className="relative">
                  <CategoryBtn />
               </div>
            </div>
            <div className="col-start-2 grid gap-y-6 gap-x-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
               {videos.map((video) => (
                  <VideoItem key={video.id} {...video} />
               ))}
            </div>
         </div>
      </div>
   );
}
