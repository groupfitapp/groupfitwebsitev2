import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Apple, Smartphone, Users, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_LINKS } from "@/lib/appLinks";

export default function Download() {
  return (
    <>
      <Helmet>
        <title>Download | Group Fit</title>
        <meta
          name="description"
          content="Download the Group Fit app for iOS or Android. Book in-person personal training sessions or join as a trainer to grow your client base."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              Download Group Fit
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Get the app on iOS or Android to start booking sessions or accepting clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Customers Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Customers</h2>
                  <p className="text-muted-foreground">Book personal training sessions</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Find available trainers near you
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Book solo or with a private group
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Split costs with friends and family
                </li>
              </ul>

              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                >
                  <a href={APP_LINKS.customer.ios} target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 mr-2" />
                    Download on App Store
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  <a href={APP_LINKS.customer.android} target="_blank" rel="noopener noreferrer">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Get it on Google Play
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Trainers Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Dumbbell className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Trainers</h2>
                  <p className="text-muted-foreground">Grow your client base</p>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Set your service area and availability
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Receive bookings directly in-app
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Manage your schedule easily
                </li>
              </ul>

              <div className="space-y-3">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-foreground hover:bg-foreground/90 text-background"
                >
                  <a href={APP_LINKS.trainer.ios} target="_blank" rel="noopener noreferrer">
                    <Apple className="w-5 h-5 mr-2" />
                    Download on App Store
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full"
                >
                  <a href={APP_LINKS.trainer.android} target="_blank" rel="noopener noreferrer">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Get it on Google Play
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
