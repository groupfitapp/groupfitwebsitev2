import appStoreBadge from "@/assets/badges/app-store.svg";
import googlePlayBadge from "@/assets/badges/google-play.png";

interface AppStoreBadgesProps {
  iosLink: string;
  androidLink: string;
  className?: string;
}

export function AppStoreBadges({ iosLink, androidLink, className = "" }: AppStoreBadgesProps) {
  return (
    <div className={`flex flex-col sm:flex-row items-center gap-4 ${className}`}>
      <a href={iosLink} target="_blank" rel="noopener noreferrer">
        <img
          src={appStoreBadge}
          alt="Download on the App Store"
          className="h-[50px] w-auto"
        />
      </a>
      <a href={androidLink} target="_blank" rel="noopener noreferrer">
        <img
          src={googlePlayBadge}
          alt="Get it on Google Play"
          className="h-[50px] w-auto"
        />
      </a>
    </div>
  );
}
