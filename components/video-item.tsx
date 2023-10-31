import { formatDuration } from "@/utils/format-duration";
import { formatTimeAgo } from "@/utils/format-timeago";

type VideoItemProps = {
   id: string;
   title: string;
   channel: {
      id: string;
      name: string;
      profileUrl: string;
   };
   views: number;
   postedAt: Date;
   duration: number;
   thumbnailUrl: string;
   videoUrl: string;
};

const viewFormatter = Intl.NumberFormat("en", {
   notation: "compact",
});

export function VideoItem({
   id,
   title,
   channel,
   views,
   postedAt,
   duration,
   thumbnailUrl,
   videoUrl,
}: VideoItemProps) {
   return (
      <div className="flex flex-col gap-2">
         <a href={`/watch?v=${id}`} className="relative aspect-video">
            <img
               src={thumbnailUrl}
               className="block w-full h-full object-cover  rounded-xl"
               alt={title}
            />
            <div className="absolute bottom-2 right-2 bg-secondary-dark-hover text-white text-xs font-semibold px-1 rounded">
               {formatDuration(duration)}
            </div>
         </a>
         <div className="flex gap-2">
            <a href={`/@${channel.id}`} className="flex-shrink-0">
               <img
                  src={channel.profileUrl}
                  alt="profile picture"
                  className="w-11 h-11 rounded-full"
               />
            </a>
            <div className="flex flex-col">
               <a
                  href={`/watch?v=${id}`}
                  className="font-bold leading-tight mb-1"
               >
                  {title}
               </a>
               <a href={`/@${channel.id}`} className="text-secondary-text">
                  {channel.name}
               </a>
               <div className="text-secondary-text text-sm">
                  {viewFormatter.format(views)} views •{" "}
                  {formatTimeAgo(postedAt)}
               </div>
            </div>
         </div>
      </div>
   );
}
