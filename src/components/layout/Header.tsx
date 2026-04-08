import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, Gift } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// @ts-ignore - vite-imagetools query params
import logo from "@/assets/logo.png?w=200&format=webp&quality=90";

const customerNavLinks = [
  { name: "Activities", href: "/activities" },
  { name: "Cities", href: "/cities" },
  { name: "How it Works", href: "/how-it-works" },
  { name: "About", href: "/about" },
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isTrainerSection = location.pathname.startsWith("/trainer");

  const navLinks = isTrainerSection ? trainerNavLinks : customerNavLinks;
  const switchLink = isTrainerSection
    ? { name: "For Customers", href: "/" }
    : { name: "For Trainers", href: "/trainer" };

  // Track scroll for header shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      animate={{
        backgroundColor: scrolled ? "rgba(10, 15, 28, 0.97)" : "rgba(10, 15, 28, 0.8)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(16px)",
        boxShadow: scrolled
          ? "0 4px 40px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.05)"
          : "0 4px 30px rgba(0,0,0,0.1)",
        borderBottomColor: scrolled ? "rgba(230,57,70,0.15)" : "rgba(255,255,255,0.05)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-between"
          animate={{ height: scrolled ? "60px" : "72px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Logo */}
          <Link to={isTrainerSection ? "/trainer" : "/"} className="flex items-center gap-2">
            <motion.img
              src={logo}
              alt="Group Fit"
              className="w-auto"
              animate={{ height: scrolled ? "32px" : "40px" }}
              transition={{ duration: 0.3 }}
              width={135}
              height={40}
              style={{ aspectRatio: "135/40" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="relative text-sm font-medium transition-colors hover:text-primary group"
              >
                <span
                  className={
                    location.pathname === link.href ? "text-primary" : "text-white/80"
                  }
                >
                  {link.name}
                </span>
                {/* Active underline */}
                {location.pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </Link>
            ))}
            <Link
              to={switchLink.href}
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {switchLink.name}
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <a href="/referral" className="inline-flex items-center justify-center">
                  <Gift className="w-4 h-4 mr-2" />
                  Refer & Earn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button asChild className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)] hover:shadow-[0_0_30px_hsl(355_78%_56%/0.5)]">
                <Link to="/download">
                  <Search className="w-4 h-4 mr-2" />
                  Find a Trainer
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-secondary border-border/10 w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors hover:text-primary py-2 block ${
                        location.pathname === link.href ? "text-primary" : "text-white/80"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

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
                      <Search className="w-4 h-4 mr-2" />
                      Find a Trainer
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </motion.header>
  );
}
