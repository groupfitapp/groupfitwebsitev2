import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface LazyYouTubeEmbedProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
}

/**
 * A performance-optimized YouTube embed that uses the facade pattern.
 * Shows a thumbnail + play button initially, only loading the heavy
 * YouTube iframe when the user CLICKS to play.
 * 
 * This prevents ~700KB of YouTube scripts from loading on initial page load,
 * significantly improving LCP and reducing unused JavaScript.
 */
export function LazyYouTubeEmbed({ 
  videoId, 
  playlistId, 
  title, 
  className = "" 
}: LazyYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // For playlists, we use a default thumbnail; for videos, use the video's thumbnail
  const thumbnailUrl = videoId 
    ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
    : `https://i.ytimg.com/vi/PLsM4U67lWn/maxresdefault.jpg`; // Fallback for playlist

  // Build the iframe src - autoplay kicks in after user clicks
  let src: string;
  if (playlistId) {
    const playlistParams = `&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0`;
    src = `https://www.youtube.com/embed/videoseries?list=${playlistId}${playlistParams}`;
  } else if (videoId) {
    const videoParams = `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`;
    src = `https://www.youtube.com/embed/${videoId}${videoParams}`;
  } else {
    return null;
  }

  const handleClick = () => {
    if (!isLoaded) {
      setIsLoaded(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`w-full aspect-video rounded-2xl overflow-hidden shadow-xl relative ${className}`}
      onClick={handleClick}
    >
      {isLoaded ? (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <>
          {/* Thumbnail background */}
          <div 
            className="absolute inset-0 bg-secondary bg-cover bg-center"
            style={{ 
              backgroundImage: videoId ? `url(${thumbnailUrl})` : undefined,
              backgroundColor: !videoId ? 'hsl(var(--secondary))' : undefined
            }}
          />
          
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Play button */}
          <button
            type="button"
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </button>
          
          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm md:text-base font-medium">{title}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}
