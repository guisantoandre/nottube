import {
   Clapperboard,
   Clock4,
   Film,
   Flame,
   History,
   Home,
   Library,
   ListVideo,
   Music2,
   Newspaper,
   PlaySquare,
   Podcast,
   Radio,
   ShoppingBag,
   UserCircle2,
   UserSquare2,
} from "lucide-react";

export const homeLinks = [
   {
      label: "Home",
      icon: Home,
      url: "#",
   },
   {
      label: "Subscriptions",
      icon: Clapperboard,
      url: "#",
   },
   {
      label: "Library",
      icon: Library,
      url: "#",
   },
   {
      label: "You",
      icon: UserCircle2,
      url: "#",
   },
];

export const userLinks = [
   {
      label: "Your channel",
      icon: UserSquare2,
      url: "#",
   },
   {
      label: "History",
      icon: History,
      url: "#",
   },
   {
      label: "Your videos",
      icon: PlaySquare,
      url: "#",
   },
   {
      label: "Watch later",
      icon: Clock4,
      url: "#",
   },
];

export const playlists = [
   { id: "1", label: "Frontend & Backend", icon: ListVideo, url: "#" },
   { id: "2", label: "Favorites", icon: ListVideo, url: "#" },
   { id: "3", label: "React", icon: ListVideo, url: "#" },
   { id: "4", label: "Non-Dev", icon: ListVideo, url: "#" },
   { id: "5", label: "TypeScript", icon: ListVideo, url: "#" },
];

export const subscriptions = [
   {
      label: "Fireship",
      id: "Fireship",
      imgUrl:
         "https://yt3.googleusercontent.com/ytc/APkrFKb--NH6RwAGHYsD3KfxX-SAgWgIHrjR5E4Jb5SDSQ=s176-c-k-c0x00ffffff-no-rj",
      url: "#",
   },
   {
      label: "Caleb Curry",
      id: "CalebCurry",
      imgUrl:
         "https://yt3.googleusercontent.com/ytc/APkrFKbpSojje_-tkBQecNtFuPdSCrg3ZT0FhaYjln9k0g=s176-c-k-c0x00ffffff-no-rj",
      url: "#",
   },
   {
      label: "Web Dev Simplified",
      id: "WebDevSimplified",
      imgUrl:
         "https://yt3.ggpht.com/ytc/APkrFKZWeMCsx4Q9e_Hm6nhOOUQ3fv96QGUXiMr1-pPP=s48-c-k-c0x00ffffff-no-rj",
      url: "#",
   },
   {
      label: "Kevin Powell",
      id: "KevinPowell",
      imgUrl:
         "https://yt3.ggpht.com/ytc/APkrFKa6XiLa13mMVPzkmmTBcgNPjjqCGPrY86KfJFmf5w=s48-c-k-c0x00ffffff-no-rj",
      url: "#",
   },
   {
      label: "Sonny Sangha",
      id: "SonnySangha",
      imgUrl:
         "https://yt3.ggpht.com/FjeN785fVWx0Pr6xCbwPhhq8hHj_gocc3FygDXYDEQgp2gE_FQzRNsFHFAjQ3oE-VJaeGR1a=s68-c-k-c0x00ffffff-no-rj",
      url: "#",
   },
   {
      label: "Traversy Media",
      id: "TraversyMedia",
      imgUrl:
         "https://yt3.googleusercontent.com/ytc/APkrFKYcYswt_UhD7D0j6ddiQz6Gb8Q_vSJOjhYI0CoXSw=s176-c-k-c0x00ffffff-no-rj-mo",
      url: "#",
   },
];

export const explore = [
   { label: "Flame", icon: Flame, url: "#" },
   { label: "ShoppingBag", icon: ShoppingBag, url: "#" },
   { label: "Music", icon: Music2, url: "#" },
   { label: "Film", icon: Film, url: "#" },
   { label: "Radio", icon: Radio, url: "#" },
   { label: "News", icon: Newspaper, url: "#" },
   { label: "Podcasts", icon: Podcast, url: "#" },
];
