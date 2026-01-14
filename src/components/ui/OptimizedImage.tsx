import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

/**
 * OptimizedImage component with lazy loading, blur placeholder, and proper sizing
 * to prevent Cumulative Layout Shift (CLS)
 */
export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-muted/20",
        className
      )}
      style={width && height ? { aspectRatio: `${width}/${height}` } : undefined}
    >
      {/* Blur placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "opacity-50"
        )}
      />
      
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
}
