import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Video,
  User,
  Users,
  Package,
  DollarSign,
  Shield,
  Dumbbell,
  Target,
  Eye,
  CalendarCheck,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Clock,
} from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import aboutHeroImg from "@/assets/heroes/about-hero.jpg";

const stats = [
  { value: "35+", label: "Activities" },
  { value: "Canada-Wide", label: "In-Person Coverage" },
  { value: "Worldwide", label: "Virtual Sessions" },
  { value: "60 Min", label: "Per Session" },
];

const customerOptions = [
  { icon: MapPin, title: "In-Person", description: "A verified trainer comes to your location — home, gym, park, anywhere you choose." },
  { icon: Video, title: "Virtual", description: "Book live online sessions with trainers worldwide. Real-time availability, same booking flow." },
  { icon: User, title: "1-on-1", description: "Private session with a trainer focused entirely on you." },
  { icon: Users, title: "Group", description: "Invite friends or family — private group, split the cost." },
  { icon: Package, title: "Session Packs", description: "Buy multiple sessions at once. Commit to your goals and save." },
  { icon: DollarSign, title: "Transparent Pricing", description: "Trainers set their own rates. You see the price before you book — no surprises." },
];

const trainerFeatures = [
  { icon: DollarSign, title: "Set your own prices", description: "Full control over your per-session rate and pack pricing." },
  { icon: Package, title: "Sell session packs", description: "Offer 5 or 10-session bundles. Clients buy upfront, you earn as sessions are used." },
  { icon: Video, title: "Virtual training", description: "Accept virtual bookings on the same schedule as in-person. Clients worldwide can book your virtual slots." },
  { icon: CalendarCheck, title: "Structured scheduling", description: "Set your hours, service area, and buffer time. No double bookings, ever." },
  { icon: BarChart3, title: "Business analytics", description: "Track your earnings, bookings, and client activity by city, activity, and month." },
  { icon: Globe, title: "Wider reach", description: "Virtual sessions remove your location limit — train clients anywhere in the world." },
];

const howItWorksSteps = [
  { icon: MapPin, step: "01", title: "Choose your location", description: "Enter where you want to train — home, park, condo gym, or any address." },
  { icon: Dumbbell, step: "02", title: "Browse available activities", description: "See which of the 35+ activities have verified trainers available at your location." },
  { icon: User, step: "03", title: "Pick a trainer & time slot", description: "Browse trainers, see their real available days and times, select a slot that works." },
  { icon: Zap, step: "04", title: "Book instantly", description: "Confirm and pay in-app. No back-and-forth — your booking is confirmed immediately." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function About() {
  const title = "About Group Fit | Certified Personal Trainers Canada";
  const description =
    "Learn about Group Fit, the platform connecting verified trainers and clients across Canada. 35+ activities, solo or group sessions, in-person or virtual, transparent pricing.";
  const canonical = "https://groupfitapp.com/about";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Group Fit",
            url: "https://groupfitapp.com/",
            logo: "https://groupfitapp.com/groupfit-logo.png",
            description,
            areaServed: { "@type": "Country", name: "Canada" },
            sameAs: [
              "https://facebook.com/groupfit.fb",
              "https://www.instagram.com/groupfit_app",
              "https://x.com/groupfitapp",
              "https://www.youtube.com/@GroupFitApp",
              "https://www.tiktok.com/@groupfit.app",
              "https://www.linkedin.com/company/101067588"
            ]
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center">
        <div className="absolute inset-0">
          <img src={aboutHeroImg} alt="Group fitness training" className="w-full h-full object-cover" loading="eager" decoding="async" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-secondary/50" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10 py-40">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest">About Group Fit</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-6">
              Fitness, your way.<br />
              <span className="text-primary">Anywhere.</span>
            </h1>
            <p className="text-xl text-white/75 leading-relaxed max-w-xl">
              Group Fit connects you with verified trainers across Canada for in-person and virtual sessions — instant booking, transparent pricing, no back-and-forth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-secondary border-b border-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To make fitness accessible, affordable, and convenient by connecting people with certified trainers for personalised in-person and virtual sessions — anytime, anywhere." },
              { icon: Eye, title: "Our Vision", text: "To enrich lives by providing easy access to diverse fitness activities, empowering individuals to achieve their health goals flexibly and on their own schedule." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-black text-foreground mb-3">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/3 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mb-14">
            <motion.span initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
              How It Works
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-black text-white leading-[1.05] tracking-tight">
              Book in 4 steps.
            </motion.h2>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {howItWorksSteps.map((step) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="group relative bg-secondary p-7 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="absolute top-4 right-5 text-6xl font-black text-white/[0.04] select-none leading-none pointer-events-none">{step.step}</div>
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-white text-sm font-black mb-5 shadow-[0_0_16px_hsl(355_78%_56%/0.4)]">{step.step}</div>
                <step.icon className="w-5 h-5 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)]">
              <Link to="/how-it-works">Full booking guide <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customer Options */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <motion.span initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
              For Customers
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] tracking-tight">
              Train your way — every way.
            </motion.h2>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {customerOptions.map((opt) => (
              <motion.div
                key={opt.title}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.2)] transition-all duration-300">
                  <opt.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{opt.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{opt.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trainer Features */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-12">
            <motion.span initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">
              For Trainers
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="text-4xl md:text-5xl font-black text-foreground leading-[1.05] tracking-tight">
              Run your business properly.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mt-4 text-lg text-muted-foreground">
              Set your own prices, sell session packs, offer virtual training, and manage everything in one place.
            </motion.p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {trainerFeatures.map((feat) => (
              <motion.div
                key={feat.title}
                variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_hsl(355_78%_56%/0.2)] transition-all duration-300">
                  <feat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feat.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10">
            <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white">
              <Link to="/trainer">Learn more for trainers <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">Trust & Safety</span>
            <h2 className="text-4xl font-black text-foreground tracking-tight mb-4">Verified from the start.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Every trainer on Group Fit completes identity verification and credential review before they can accept bookings.</p>
          </motion.div>
          <motion.div className="grid md:grid-cols-3 gap-6" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {[
              { icon: Shield, title: "ID Verification", description: "All trainers complete identity verification through Plaid before onboarding." },
              { icon: CheckCircle, title: "Credential Review", description: "Certifications and experience are manually reviewed by the Group Fit team." },
              { icon: Clock, title: "Ongoing Standards", description: "Report any concern via support@groupfitapp.com — we act on every report." },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -5, transition: { duration: 0.25 } }} className="group text-center bg-card border border-border rounded-2xl p-6 hover:border-primary/40 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <span className="inline-block text-primary font-bold text-sm uppercase tracking-widest mb-3">See It Live</span>
            <h2 className="text-4xl font-black text-foreground tracking-tight">Real sessions. Real results.</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="max-w-4xl mx-auto">
            <YouTubeEmbed playlistId="PLsM4U67lWn_-fabL01WQkp1xNS4iuGNNZ" title="Group Fit Customer Training Sessions" autoplay />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">Start training today.</h2>
            <p className="text-white/70 mb-8 text-lg">In-person or virtual, solo or with friends — find your trainer now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)]">
                <Link to="/download">Find a Trainer</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                <Link to="/how-it-works">How it Works <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
