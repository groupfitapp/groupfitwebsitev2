import { forwardRef } from "react";
import appStoreBadge from "@/assets/badges/app-store.svg";
import googlePlayBadge from "@/assets/badges/google-play.png";

interface AppStoreBadgesProps {
  iosLink: string;
  androidLink: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AppStoreBadges = forwardRef<HTMLDivElement, AppStoreBadgesProps>(
  ({ iosLink, androidLink, className = "", size = "md" }, ref) => {
    const sizeClasses = {
      sm: "h-10",
      md: "h-12",
      lg: "h-14",
    };

    const badgeHeight = sizeClasses[size];

    return (
      <div ref={ref} className={`flex flex-col sm:flex-row items-center justify-center gap-3 ${className}`}>
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
          />
        </a>
      </div>
    );
  }
);

AppStoreBadges.displayName = "AppStoreBadges";
