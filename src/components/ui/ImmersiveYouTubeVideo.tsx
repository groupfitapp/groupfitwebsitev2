import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

interface ImmersiveYouTubeVideoProps {
  videoId: string;
  title: string;
  heading?: string;
  subheading?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function ImmersiveYouTubeVideo({ 
  videoId, 
  title,
  heading,
  subheading 
}: ImmersiveYouTubeVideoProps) {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<string>(`player-${videoId}-${Math.random().toString(36).substr(2, 9)}`);

  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          videoId,
          playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: videoId,
            controls: 0,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            playsinline: 1,
            disablekb: 1,
            fs: 0,
            iv_load_policy: 3,
          },
          events: {
            onReady: (event: any) => {
              setIsReady(true);
              event.target.playVideo();
            },
            onStateChange: (event: any) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                setIsPlaying(true);
              } else if (event.data === window.YT.PlayerState.PAUSED) {
                setIsPlaying(false);
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current?.destroy) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  const toggleMute = () => {
    if (playerRef.current) {
      if (isMuted) {
        playerRef.current.unMute();
      } else {
        playerRef.current.mute();
      }
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-secondary">
      {/* Full-width video container with parallax */}
      <div className="relative w-full aspect-video overflow-hidden">
        {/* Parallax video wrapper */}
        <motion.div 
          style={{ y }}
          className="absolute inset-[-10%] w-[120%] h-[120%] left-[-10%]"
        >
          <div 
            id={containerRef.current}
            className="absolute inset-0 w-full h-full pointer-events-none scale-[1.15] origin-center"
          />
        </motion.div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center px-4"
          >
            {heading && (
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-3">
                {heading}
              </h2>
            )}
            {subheading && (
              <p className="text-white/80 text-sm md:text-lg max-w-xl mx-auto drop-shadow-md">
                {subheading}
              </p>
            )}
          </motion.div>
        </div>

        {/* Control buttons */}
        <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-2 z-10">
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1 : 0.8 }}
            onClick={togglePlay}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all shadow-lg"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </motion.button>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isReady ? 1 : 0, scale: isReady ? 1 : 0.8 }}
            onClick={toggleMute}
            className="p-3 rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-all shadow-lg"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </motion.button>
        </div>

        {/* Loading state */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-secondary">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}
