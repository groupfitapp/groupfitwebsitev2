import { motion } from "framer-motion";

interface YouTubeEmbedProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

export function YouTubeEmbed({ videoId, playlistId, title, className = "", autoplay = false }: YouTubeEmbedProps) {
  const baseParams = autoplay 
    ? `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`
    : "";
  
  const src = playlistId 
    ? `https://www.youtube.com/embed/videoseries?list=${playlistId}`
    : `https://www.youtube.com/embed/${videoId}${baseParams}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`w-full aspect-video rounded-2xl overflow-hidden shadow-xl ${className}`}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </motion.div>
  );
}
