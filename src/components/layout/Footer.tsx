import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const customerLinks = [
  { name: "Download", href: "/download" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Activities", href: "/activities" },
  { name: "Cities", href: "/cities" },
  { name: "FAQ", href: "/faq" },
];

const trainerLinks = [
  { name: "Become a Trainer", href: "/trainer" },
  { name: "How it Works", href: "/trainer/how-it-works" },
  { name: "Requirements", href: "/trainer/requirements" },
  { name: "Trainer FAQ", href: "/trainer/faq" },
];

const websiteLegalLinks = [
  { name: "Website Terms", href: "/website-terms-and-condition" },
  { name: "Website Privacy", href: "/privacy-policy" },
];

const appLegalLinks = [
  { name: "Customer App Terms", href: "/app-user-terms-and-condition" },
  { name: "Trainer App Terms", href: "/app-trainer-terms-and-condition" },
  { name: "App Privacy Policy", href: "/app-privacy-policy" },
];

const topCities = [
  { name: "Toronto", href: "/cities/toronto" },
  { name: "Vancouver", href: "/cities/vancouver" },
  { name: "Calgary", href: "/cities/calgary" },
  { name: "Mississauga", href: "/cities/mississauga" },
];

const topActivities = [
  { name: "Strength & Conditioning", href: "/activities/strength-and-conditioning" },
  { name: "Boxing", href: "/activities/boxing" },
  { name: "Yoga", href: "/activities/yoga" },
  { name: "HIIT", href: "/activities/hiit" },
];

export function Footer() {
  const location = useLocation();
  const isTrainerSection = location.pathname.startsWith("/trainer");

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Group Fit" className="h-10 w-auto" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              In-person training at your location, made simple—for individuals, private groups, and organizations.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Customers */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Customers</h4>
            <ul className="space-y-2">
              {customerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
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
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
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
                  <Link
                    to={link.href}
                    className="text-white/70 text-sm hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Note */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/50 text-xs text-center max-w-2xl mx-auto">
            Trainer onboarding includes credential review and identity verification to support a safer experience.
          </p>
        </div>

        {/* Legal Links - Separated into Website and App */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col gap-4">
            {/* Website Legal */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-white/50 text-sm">
              <span className="text-white/70 font-medium mr-2">Website:</span>
              {websiteLegalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < websiteLegalLinks.length - 1 && (
                    <span className="mx-2">•</span>
                  )}
                </span>
              ))}
            </div>
            
            {/* App Legal */}
            <div className="flex flex-wrap justify-center items-center gap-2 text-white/50 text-sm">
              <span className="text-white/70 font-medium mr-2">App:</span>
              {appLegalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    to={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < appLegalLinks.length - 1 && (
                    <span className="mx-2">•</span>
                  )}
                </span>
              ))}
            </div>
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
