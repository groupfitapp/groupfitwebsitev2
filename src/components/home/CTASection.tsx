import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Apple, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/lib/appLinks";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to train on your schedule?
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Download Group Fit and find available trainers near you
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background text-lg px-8 py-6"
            >
              <a href={APP_LINKS.customer.ios} target="_blank" rel="noopener noreferrer">
                <Apple className="w-5 h-5 mr-2" />
                App Store
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6"
            >
              <a href={APP_LINKS.customer.android} target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-5 h-5 mr-2" />
                Google Play
              </a>
            </Button>
          </div>

          <div className="mt-6">
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/trainer">
                Are you a trainer?
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
