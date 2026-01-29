import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Download, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// Optimized logo: WebP format, 200px width for header display
// @ts-ignore - vite-imagetools query params
import logo from "@/assets/logo.png?w=200&format=webp&quality=90";

const customerNavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "Activities", href: "/activities" },
  { name: "Cities", href: "/cities" },
  { name: "FAQ", href: "/faq" },
];

const trainerNavLinks = [
  { name: "Become a Trainer", href: "/trainer" },
  { name: "How it Works", href: "/trainer/how-it-works" },
  { name: "Requirements", href: "/trainer/requirements" },
  { name: "FAQ", href: "/trainer/faq" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isTrainerSection = location.pathname.startsWith("/trainer");
  
  const navLinks = isTrainerSection ? trainerNavLinks : customerNavLinks;
  const switchLink = isTrainerSection 
    ? { name: "For Customers", href: "/" }
    : { name: "For Trainers", href: "/trainer" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to={isTrainerSection ? "/trainer" : "/"} className="flex items-center gap-2">
            <img src={logo} alt="Group Fit" className="h-8 md:h-10 w-auto" width={135} height={40} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Switch Section Link */}
            <Link
              to={switchLink.href}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {switchLink.name}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="/referral" className="inline-flex items-center justify-center">
                <Gift className="w-4 h-4 mr-2" />
                Refer & Earn
              </a>
            </Button>
            <Button asChild className="bg-primary hover:bg-red-dark text-white">
              <Link to="/download">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary border-border/10 w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-primary py-2 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-white/80"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                {/* Switch Section Link */}
                <div className="pt-4 border-t border-border/10">
                  <Link
                    to={switchLink.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-primary hover:text-primary/80 py-2 block"
                  >
                    {switchLink.name}
                  </Link>
                </div>
                
                <div className="pt-4 border-t border-border/10 space-y-3">
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                    <a href="/referral" onClick={() => setIsOpen(false)} className="inline-flex items-center justify-center">
                      <Gift className="w-4 h-4 mr-2" />
                      Refer & Earn
                    </a>
                  </Button>
                  <Button asChild className="w-full bg-primary hover:bg-red-dark text-white">
                    <Link to="/download" onClick={() => setIsOpen(false)}>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
