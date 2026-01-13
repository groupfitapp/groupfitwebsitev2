import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Users, Dumbbell } from "lucide-react";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

export default function Download() {
  return (
    <>
      <Helmet>
        <title>Download Group Fit App | iOS & Android | Group Fit</title>
        <meta
          name="description"
          content="Download the Group Fit app for iOS or Android. Book in-person personal training sessions or join as a trainer to grow your client base across Canada."
        />
        <meta name="keywords" content="download Group Fit, fitness app iOS, fitness app Android, personal training app, trainer app Canada" />
        <link rel="canonical" href="https://groupfit.ca/download" />
        <meta property="og:title" content="Download Group Fit App" />
        <meta property="og:description" content="Get the Group Fit app on iOS or Android to book personal training sessions or accept clients as a trainer." />
        <meta property="og:type" content="website" />
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

              <AppStoreBadges
                iosLink={APP_LINKS.customer.ios}
                androidLink={APP_LINKS.customer.android}
                className="justify-center"
              />
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

              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
                className="justify-center"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
