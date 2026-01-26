import { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface LazyYouTubeEmbedProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

/**
 * Lazy-loaded YouTube embed that only loads the iframe when:
 * 1. User clicks the thumbnail, OR
 * 2. The component scrolls into viewport (with autoplay)
 * 
 * This saves ~500KB+ of JavaScript and significant render time on initial load.
 */
export function LazyYouTubeEmbed({ 
  videoId, 
  playlistId, 
  title, 
  className = "", 
  autoplay = false 
}: LazyYouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Observe when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-load when in view if autoplay is enabled
  useEffect(() => {
    if (isInView && autoplay) {
      setIsLoaded(true);
    }
  }, [isInView, autoplay]);

  const thumbnailUrl = videoId 
    ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    : playlistId 
      ? `https://i.ytimg.com/vi/uag832_Ud0Y/hqdefault.jpg` // Fallback for playlists
      : "";

  let src: string = "";
  if (isLoaded) {
    if (playlistId) {
      const playlistParams = autoplay 
        ? `&autoplay=1&mute=1&loop=1&controls=1&modestbranding=1&rel=0`
        : "";
      src = `https://www.youtube.com/embed/videoseries?list=${playlistId}${playlistParams}`;
    } else if (videoId) {
      const videoParams = autoplay 
        ? `?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0`
        : "?autoplay=1";
      src = `https://www.youtube.com/embed/${videoId}${videoParams}`;
    }
  }

  if (!videoId && !playlistId) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-secondary cursor-pointer group",
        className
      )}
      onClick={() => !isLoaded && setIsLoaded(true)}
    >
      {!isLoaded ? (
        <>
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
            </div>
          </div>
          {/* Title */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white text-sm md:text-base font-medium truncate">{title}</p>
          </div>
        </>
      ) : (
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
