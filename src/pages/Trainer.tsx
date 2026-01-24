import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CalendarCheck,
  MapPinned,
  Timer,
  CreditCard,
  CheckCircle,
  Share2,
  Sparkles,
  PlayCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import trainerBanner from "@/assets/trainer-banner.jpg";
import shareProfileVideo from "@/assets/videos/share-profile-demo.mp4";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PillLink } from "@/components/ui/PillLink";

const benefitCards = [
  {
    icon: CalendarCheck,
    title: "Set your schedule",
    description: "Pick your time slots and what you coach.",
  },
  {
    icon: MapPinned,
    title: "Set your service locations + radius",
    description: "Only show up for clients inside your service area.",
  },
  {
    icon: Timer,
    title: "No double bookings",
    description: "Buffer time blocks back-to-back sessions automatically.",
  },
  {
    icon: CreditCard,
    title: "Payments handled",
    description: "Group Fit handles payments so you don't have to chase clients. Transparent payouts with clear earnings visibility in the app.",
  },
];

const howClientsBookCriteria = [
  "Specialization",
  "Day + time",
  "Address inside service location radius",
  "Buffer time allows it",
];

const shareSteps = [
  "Open Group Fit Trainer",
  "Account → My Profile",
  "Tap 3 dots (top right)",
  "View Public Profile",
  "Share",
];

export default function Trainer() {
  return (
    <>
      <Helmet>
        <title>Run your schedule. Stop the back-and-forth. | Group Fit Trainer</title>
        <meta
          name="description"
          content="Move your existing clients onto Group Fit so bookings and payments run cleanly—without DMs, spreadsheets, or chasing."
        />
        <meta name="keywords" content="personal trainer booking, trainer scheduling app, fitness trainer platform, personal training business, trainer payments" />
        <link rel="canonical" href="https://groupfitapp.com/trainer" />
        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:site_name" content="Group Fit" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Run your schedule. Stop the back-and-forth. | Group Fit Trainer" />
        <meta property="og:description" content="Move your existing clients onto Group Fit so bookings and payments run cleanly—without DMs, spreadsheets, or chasing." />
        <meta property="og:url" content="https://groupfitapp.com/trainer" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Run your schedule. Stop the back-and-forth." />
        <meta name="twitter:description" content="Move your existing clients onto Group Fit so bookings and payments run cleanly." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trainerBanner}
            alt="Group Fit personal trainer coaching a client during an in-person fitness session"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-secondary/70" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 md:pt-40 md:pb-20 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Run your schedule.{" "}
              <span className="text-primary">Stop the back-and-forth.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Move your existing clients onto Group Fit so bookings and payments run cleanly—without DMs, spreadsheets, or chasing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link to="/download">
                <Button size="lg" className="w-full sm:w-auto">
                  Download
                </Button>
              </Link>
              <Link to="/trainer/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/20 text-white hover:bg-white/20">
                  How it works
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/20 to-transparent blur-3xl pointer-events-none" />
      </section>

      {/* Benefit Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {benefitCards.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Single glance line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            Outside your radius? Clients can't book you. Outside your hours? They won't see you.
          </motion.p>
        </div>
      </section>

      {/* Invite Your Existing Clients */}
      <section id="share" className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <Share2 className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Invite your existing clients in 15 seconds
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Share your public profile link. Your clients book you directly—only when it matches your settings.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Steps */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                {shareSteps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-card border border-border rounded-xl p-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground font-medium">{step}</span>
                  </div>
                ))}

                <p className="text-muted-foreground text-sm pt-4">
                  Start by sending your profile link to your existing clients today.
                </p>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden shadow-xl bg-secondary"
              >
                <video
                  src={shareProfileVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  title="How to share your profile link"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Playlist Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
              <PlayCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Hear from trainers using Group Fit
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Short clips from trainers sharing how Group Fit Trainer helps reduce scheduling and payment admin.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <YouTubeEmbed
              videoId="upwk6yBzJnI"
              title="Group Fit for Trainers"
              autoplay
            />
          </div>
        </div>
      </section>

      {/* How Clients Book You */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How clients book you
              </h2>
              <p className="text-muted-foreground">
                Clients can only book when all of these match:
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {howClientsBookCriteria.map((criteria, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{criteria}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <p className="text-foreground">
                <strong>Example:</strong> Monday: CN Tower (Toronto) + 25 km radius + 9:00 AM to 2:00 PM → Only clients inside the radius booking within that time can book you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">What clients do:</strong> choose specialization → pick time → enter address → book
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">What you do:</strong> accept → show up → coach
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bonus: New Clients */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Bonus: new clients can find you on Group Fit
            </h3>
            <p className="text-muted-foreground text-sm">
              When customers search in your coverage area for your specialties, you can appear—without changing how you run your existing clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <PillLink to="/trainer/how-it-works" variant="default">
              How it works
            </PillLink>
            <PillLink to="/trainer/requirements" variant="default">
              Requirements
            </PillLink>
            <PillLink to="/trainer/faq" variant="default">
              FAQ
            </PillLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to simplify your week?
            </h2>
            <div className="flex justify-center">
              <AppStoreBadges
                iosLink={APP_LINKS.trainer.ios}
                androidLink={APP_LINKS.trainer.android}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
