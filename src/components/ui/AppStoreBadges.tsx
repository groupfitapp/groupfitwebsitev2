import appStoreBadge from "@/assets/badges/app-store.svg";
// @ts-ignore - vite-imagetools query params
import googlePlayBadge from "@/assets/badges/google-play.png?w=200&format=webp&quality=90";

interface AppStoreBadgesProps {
  iosLink: string;
  androidLink: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function AppStoreBadges({ 
  iosLink, 
  androidLink, 
  className = "",
  size = "md" 
}: AppStoreBadgesProps) {
  const sizeClasses = {
    sm: "h-10",
    md: "h-12",
    lg: "h-14",
  };

  const badgeHeight = sizeClasses[size];

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
      <a 
        href={iosLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className={`${badgeHeight} w-auto`}
          width={144}
          height={48}
        />
      </a>
      <a 
        href={androidLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          className={`${badgeHeight} w-auto`}
          width={162}
          height={48}
        />
      </a>
    </div>
  );
}
