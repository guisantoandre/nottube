export function formatDuration(duration: number) {
   const hours = Math.floor(duration / 3600);
   const minutes = Math.floor((duration % 3600) / 60);
   const seconds = duration % 60;

   const formattedMinutes = minutes.toString().padStart(2, "0");
   const formattedSeconds = seconds.toString().padStart(2, "0");

   if (hours === 0) {
      return `${formattedMinutes}:${formattedSeconds}`;
   }

   return `${hours}:${formattedMinutes}:${formattedSeconds}`;
}
