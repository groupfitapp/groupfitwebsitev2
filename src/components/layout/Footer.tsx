import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Facebook, Instagram, Youtube, FileText, ChevronDown, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
// @ts-ignore - vite-imagetools query params
import logo from "@/assets/logo.png?w=200&format=webp&quality=90";
// @ts-ignore - vite-imagetools query params
import googleReviewBadge from "@/assets/badges/google-review.png?w=220&format=webp&quality=90";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Custom icons for platforms not in lucide-react
const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.087-1.146 3.496-1.212.953-.044 1.852.06 2.69.307.01-.634-.02-1.22-.102-1.756-.164-1.07-.546-1.877-1.098-2.326-.603-.49-1.468-.738-2.57-.738h-.061c-1.47.017-2.552.456-3.215 1.305l-1.62-1.168c.965-1.234 2.523-1.89 4.636-1.95h.095c1.553 0 2.81.39 3.737 1.159.987.82 1.58 2.019 1.76 3.565.053.455.08.94.08 1.454v.156c1.407.787 2.403 1.87 2.883 3.175.574 1.566.532 4.038-1.477 6.007-1.803 1.766-4.034 2.549-7.225 2.572z" />
    <path d="M12.392 14.015c-.95.044-1.693.286-2.15.7-.395.359-.563.79-.532 1.346.031.566.276.998.729 1.29.507.327 1.2.488 2.063.479.892-.01 1.63-.358 2.195-1.037.402-.487.697-1.127.883-1.916-.583-.177-1.227-.305-1.913-.364-.42-.04-.845-.06-1.275-.06v.562z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/groupfit.fb", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/groupfit_app", icon: Instagram },
  { name: "X", href: "https://x.com/groupfitapp", icon: XIcon },
  { name: "Threads", href: "https://www.threads.net/@groupfit_app", icon: ThreadsIcon },
  { name: "YouTube", href: "https://www.youtube.com/@GroupFitApp", icon: Youtube },
  { name: "TikTok", href: "https://www.tiktok.com/@groupfit.app", icon: TikTokIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/101067588", icon: Linkedin },
];

const customerLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "https://blog.groupfitapp.com/" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Activities", href: "/activities" },
  { name: "Cities", href: "/cities" },
  { name: "FAQ", href: "/faq" },
  { name: "Download", href: "/download" },
];

const trainerLinks = [
  { name: "Become a Trainer", href: "/trainer" },
  { name: "How it Works", href: "/trainer/how-it-works" },
  { name: "Requirements", href: "/trainer/requirements" },
  { name: "Trainer FAQ", href: "/trainer/faq" },
];

const websiteLegalLinks = [
  { name: "Terms", href: "/website-terms-and-condition" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const appLegalLinks = [
  { name: "Group Fit Terms", href: "/app-user-terms-and-condition" },
  { name: "Group Fit Trainer Terms", href: "/app-trainer-terms-and-condition" },
  { name: "Group Fit Apps Privacy Policy", href: "/app-privacy-policy" },
];

const topCities = [
  { name: "Toronto", href: "/cities/toronto" },
  { name: "Vancouver", href: "/cities/vancouver" },
  { name: "Calgary", href: "/cities/calgary" },
  { name: "Mississauga", href: "/cities/mississauga" },
  { name: "View All Cities", href: "/cities" },
];

const topActivities = [
  { name: "Strength & Conditioning", href: "/activities/strength-and-conditioning" },
  { name: "Boxing", href: "/activities/boxing" },
  { name: "Yoga", href: "/activities/yoga" },
  { name: "HIIT", href: "/activities/hiit" },
  { name: "View All Activities", href: "/activities" },
];

export function Footer() {
  const location = useLocation();
  const isTrainerSection = location.pathname.startsWith("/trainer");
  const trustpilotRef = useRef<HTMLDivElement>(null);

  // Re-initialize Trustpilot widget on route changes
  useEffect(() => {
    if (trustpilotRef.current && (window as any).Trustpilot) {
      (window as any).Trustpilot.loadFromElement(trustpilotRef.current, true);
    }
  }, [location.pathname]);

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="Group Fit"
                className="h-10"
                width={135}
                height={40}
                style={{ aspectRatio: "135/40" }}
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              In-person training at your location, made simple—for individuals, private groups, and organizations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>

            {/* Contact Us Button */}
            <Button
              asChild
              className="mt-4 bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_hsl(355_78%_56%/0.4)]"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>

            {/* Review Buttons */}
            <div className="flex flex-col gap-3 mt-3">
              <a
                href="https://g.page/r/CfgQlDKa9jAiEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img
                  src={googleReviewBadge}
                  alt="Click here to leave us a review on Google"
                  className="h-[34px] w-auto rounded"
                  loading="lazy"
                />
              </a>
              <div
                ref={trustpilotRef}
                className="trustpilot-widget"
                data-locale="en-US"
                data-template-id="56278e9abfbbba0bdcd568bc"
                data-businessunit-id="66f42a91d36fdcc4d52b7d87"
                data-style-height="52px"
                data-style-width="220px"
                data-token="c2adff46-30f4-4e8a-b936-21dbcaa943e6"
              >
                <a
                  href="https://www.trustpilot.com/review/groupfitapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-primary transition-colors"
                >
                  Review us on Trustpilot
                </a>
              </div>
            </div>
          </div>

          {/* Customers */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Customers</h4>
            <ul className="space-y-2">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 text-sm hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link to={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Trainers */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Trainers</h4>
            <ul className="space-y-2">
              {trainerLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Top Cities</h4>
            <ul className="space-y-2">
              {topCities.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Activities */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Top Activities</h4>
            <ul className="space-y-2">
              {topActivities.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-white/70 text-sm hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Links - Dropdown */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white border border-white/20 rounded-lg hover:border-white/40 transition-colors bg-white/5 hover:bg-white/10">
                <FileText className="w-4 h-4" />
                Legal & Privacy
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-secondary border-white/20 z-50" align="center">
                <DropdownMenuLabel className="text-white/50 text-xs">Website</DropdownMenuLabel>
                {websiteLegalLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="text-white/80 hover:text-primary cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuLabel className="text-white/50 text-xs">Apps</DropdownMenuLabel>
                {appLegalLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link to={link.href} className="text-white/80 hover:text-primary cursor-pointer">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Group Fit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
