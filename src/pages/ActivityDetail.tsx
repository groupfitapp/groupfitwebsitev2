import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, MapPin, Users, Video, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

// Activity images
import strengthImg from "@/assets/activities/strength.jpg";
import yogaImg from "@/assets/activities/yoga.jpg";
import boxingImg from "@/assets/activities/boxing.jpg";
import hiitImg from "@/assets/activities/hiit-v2.jpg";
import kickboxingImg from "@/assets/activities/kickboxing-v2.jpg";
import soccerImg from "@/assets/activities/soccer-v2.jpg";
import basketballImg from "@/assets/activities/basketball.jpg";
import calisthenicsImg from "@/assets/activities/calisthenics-v2.jpg";
import bootcampImg from "@/assets/activities/bootcamp.jpg";
import muayThaiImg from "@/assets/activities/muay-thai-v2.jpg";
import jiuJitsuImg from "@/assets/activities/jiu-jitsu-v2.jpg";
import wrestlingImg from "@/assets/activities/wrestling-v2.jpg";
import selfDefenseImg from "@/assets/activities/self-defense.jpg";

const activityImages: Record<string, string> = {
  "strength-and-conditioning": strengthImg,
  "yoga": yogaImg,
  "boxing": boxingImg,
  "hiit": hiitImg,
  "kickboxing": kickboxingImg,
  "soccer": soccerImg,
  "basketball": basketballImg,
  "calisthenics": calisthenicsImg,
  "bootcamp": bootcampImg,
  "muay-thai": muayThaiImg,
  "jiu-jitsu": jiuJitsuImg,
  "wrestling": wrestlingImg,
  "self-defense": selfDefenseImg,
};

const activityData: Record<string, { title: string; metaTitle: string; metaDesc: string; intro: string; bestFor: string[]; sessionIncludes: string[]; locations: string[]; faqs: { q: string; a: string }[] }> = {
  "strength-and-conditioning": { title: "Strength & Conditioning", metaTitle: "Strength & Conditioning Training | In-Person Personal Trainer | Group Fit", metaDesc: "Book an in-person strength and conditioning coach at your location. Build strength, improve form, and train with structure in a 60-minute session.", intro: "Structured coaching to build strength, improve movement quality, and develop conditioning—beginner to advanced.", bestFor: ["General fitness and consistency", "Fat loss and conditioning", "Strength and muscle development", "Athletic performance"], sessionIncludes: ["Warm-up and mobility", "Form coaching and technique", "Strength blocks (lower/upper/full-body)", "Conditioning finisher and cooldown"], locations: ["Home (bodyweight or basic equipment)", "Condo gym / gym", "Outdoor sessions when weather allows"], faqs: [{ q: "Do I need equipment?", a: "No. Sessions can be built around bodyweight or whatever equipment you have access to." }, { q: "Is this good for beginners?", a: "Yes. A coach can start with fundamentals and progress safely." }, { q: "Can I train with friends?", a: "Yes. Use a private group booking so everyone meets at the same location and time." }] },
  "yoga": { title: "Yoga", metaTitle: "Yoga Training | In-Person Yoga Instructor | Group Fit", metaDesc: "Book an in-person yoga instructor at your location for flexibility, mobility, and stress reduction.", intro: "Private yoga tailored to your level for flexibility, mobility, and stress reduction.", bestFor: ["Flexibility and mobility", "Recovery and relaxation", "Posture and movement quality", "Beginner-friendly foundations"], sessionIncludes: ["Breathwork and warm-up", "Guided flow or targeted mobility work", "Balance and stability drills", "Cooldown and stretching"], locations: ["Home or quiet indoor space", "Studio space or gym area (if permitted)"], faqs: [{ q: "Is yoga beginner-friendly?", a: "Yes. Sessions can be adapted to your current mobility and experience." }, { q: "Do I need a mat?", a: "A mat helps, but sessions can be adapted if you don't have one." }] },
  "boxing": { title: "Boxing", metaTitle: "Boxing Training | In-Person Boxing Coach | Group Fit", metaDesc: "Book an in-person boxing coach at your location. Train striking fundamentals and conditioning.", intro: "Boxing fundamentals with conditioning—great for fitness and skill development.", bestFor: ["Cardio and conditioning", "Coordination and confidence", "Technique and footwork", "Fitness-focused striking"], sessionIncludes: ["Warm-up and footwork", "Technique drills and combinations", "Bag/pad work if available", "Conditioning rounds and cooldown"], locations: ["Gym or suitable indoor space", "Home with enough open space", "Outdoor sessions when appropriate"], faqs: [{ q: "Do I need gloves or a heavy bag?", a: "Helpful but not required. Sessions can still focus on footwork, technique, and conditioning." }, { q: "Is boxing only for experienced people?", a: "No. Beginners can start with fundamentals and progress safely." }, { q: "Can I book boxing as a group session?", a: "Yes. Create a private group booking so everyone trains together." }] },
  "hiit": { title: "HIIT", metaTitle: "HIIT Training | In-Person HIIT Coach | Group Fit", metaDesc: "Book an in-person HIIT coach at your location. High-intensity interval training tailored to your fitness level.", intro: "High-intensity interval training tailored to your fitness level and goals.", bestFor: ["Time-efficient conditioning", "Cardio fitness", "Fat loss support"], sessionIncludes: ["Warm-up", "Interval blocks with rest cycles", "Strength or core segment", "Cooldown"], locations: ["Home or condo gym", "Outdoor sessions when appropriate"], faqs: [{ q: "Is HIIT safe for beginners?", a: "Yes when scaled. Coaches can adjust intensity and rest intervals." }, { q: "Do I need equipment?", a: "No. Many HIIT sessions are bodyweight-based." }] },
  "kickboxing": { title: "Kickboxing", metaTitle: "Kickboxing Training | In-Person Kickboxing Coach | Group Fit", metaDesc: "Book an in-person kickboxing coach at your location. Train striking fundamentals and conditioning.", intro: "High-energy striking sessions combining technique with conditioning.", bestFor: ["Cardio and conditioning", "Striking technique", "Power and coordination"], sessionIncludes: ["Warm-up and mobility", "Striking drills and combinations", "Pad/bag work if available", "Conditioning rounds and cooldown"], locations: ["Gym or open indoor space", "Outdoor sessions when appropriate"], faqs: [{ q: "Will it be too intense?", a: "It can be scaled. Your coach can adjust intensity and rest." }, { q: "Do I need equipment?", a: "No. Equipment helps but is optional." }, { q: "Can I do it as a group?", a: "Yes—private group bookings are available." }] },
  "muay-thai": { title: "Muay Thai", metaTitle: "Muay Thai Training | In-Person Muay Thai Coach | Group Fit", metaDesc: "Book an in-person Muay Thai coach at your location for striking fundamentals and conditioning.", intro: "Striking-focused training emphasizing fundamentals, conditioning, and discipline.", bestFor: ["Cardio and conditioning", "Striking fundamentals", "Skill development"], sessionIncludes: ["Warm-up", "Technique and combination drills", "Conditioning rounds", "Cooldown"], locations: ["Gym or open indoor space", "Outdoor sessions when appropriate"], faqs: [{ q: "Beginner-friendly?", a: "Yes—sessions can start with basics and safe progressions." }, { q: "Do I need equipment?", a: "Optional. Coaches can adapt to what you have." }, { q: "Can I book as a group?", a: "Yes—private group bookings are available." }] },
  "soccer": { title: "Soccer", metaTitle: "Soccer Training | In-Person Soccer Coach | Group Fit", metaDesc: "Book an in-person soccer coach at your location. Improve footwork, agility, skills and conditioning.", intro: "Skill and conditioning sessions focused on footwork, agility, and fundamentals.", bestFor: ["Skill development", "Speed and agility", "Conditioning and endurance", "Confidence on the ball"], sessionIncludes: ["Warm-up and movement prep", "Footwork and agility drills", "Ball control and technique drills", "Conditioning and cooldown"], locations: ["Field or open outdoor space", "Indoor turf / facility if arranged"], faqs: [{ q: "Is this for kids or adults?", a: "Both. Sessions can be tailored to age and skill level." }, { q: "Do I need a field?", a: "A field is ideal, but drills can be adapted to available space." }, { q: "Can I book for a small group?", a: "Yes. Private group bookings work well for sport training." }] },
  "basketball": { title: "Basketball", metaTitle: "Basketball Training | In-Person Basketball Coach | Group Fit", metaDesc: "Book an in-person basketball coach at your location for skill and conditioning sessions.", intro: "Skill and conditioning sessions focused on footwork, coordination, and fundamentals.", bestFor: ["Footwork and quickness", "Fundamentals and confidence", "Conditioning"], sessionIncludes: ["Warm-up and movement drills", "Skill work (shooting/ball-handling depending on space)", "Conditioning and cooldown"], locations: ["Court preferred", "Suitable outdoor space"], faqs: [{ q: "Do I need a court?", a: "A court is ideal for full skill work. Some drills can be adapted to other spaces." }] },
  "bootcamp": { title: "Bootcamp", metaTitle: "Bootcamp Training | In-Person Bootcamp Coach | Group Fit", metaDesc: "Book an in-person bootcamp coach at your location. Full-body circuit sessions for general fitness.", intro: "Full-body circuit sessions designed for general fitness and motivation—ideal for private groups.", bestFor: ["General fitness", "Weight loss and conditioning", "Group motivation"], sessionIncludes: ["Warm-up", "Circuit blocks (strength + cardio stations)", "Finisher", "Cooldown"], locations: ["Outdoor park sessions", "Gym space or home space (depending on setup)"], faqs: [{ q: "Is bootcamp good for groups?", a: "Yes. Bootcamp is one of the best formats for private group bookings." }, { q: "Is it beginner-friendly?", a: "Yes—exercises can be scaled." }, { q: "Do I need equipment?", a: "No. Coaches can design sessions around bodyweight training." }] },
  "calisthenics": { title: "Calisthenics", metaTitle: "Calisthenics Training | In-Person Calisthenics Coach | Group Fit", metaDesc: "Book an in-person calisthenics coach for bodyweight strength training and progressions.", intro: "Bodyweight strength training using progressions to build control, core strength, and mobility.", bestFor: ["Bodyweight strength", "Core and control", "Mobility and joint health"], sessionIncludes: ["Warm-up and mobility", "Progressions (push/pull/core)", "Skill development (space permitting)", "Cooldown"], locations: ["Parks with bars (ideal)", "Home/indoor space with modifications"], faqs: [{ q: "Do I need a pull-up bar?", a: "Helpful but not required. Coaches can adapt with alternatives." }, { q: "Is calisthenics only for advanced athletes?", a: "No—beginners can start with foundational progressions." }, { q: "Can I do this outdoors?", a: "Yes. Parks are often a great setting for calisthenics." }] },
  "jiu-jitsu": { title: "Jiu Jitsu", metaTitle: "Jiu Jitsu Training | In-Person Coach | Group Fit", metaDesc: "Book an in-person Jiu Jitsu coach for grappling fundamentals. Session structure depends on space and mat availability.", intro: "Grappling-focused coaching emphasizing technique, control, and movement fundamentals (space dependent).", bestFor: ["Grappling fundamentals", "Technique development", "Confidence and fitness", "Self-defense foundations"], sessionIncludes: ["Movement drills and warm-up", "Technique instruction", "Controlled positional practice (space permitting)", "Cooldown and mobility"], locations: ["Mat space preferred for safe grappling", "Suitable open indoor space for movement drills"], faqs: [{ q: "Do I need mats?", a: "Mats are strongly recommended for safe grappling practice. Without mats, sessions can focus on movement drills and conditioning." }, { q: "Is it beginner-friendly?", a: "Yes—coaching can start with fundamentals and controlled drills." }, { q: "Can this be done at home?", a: "Yes, if you have suitable space; mat space is ideal." }] },
  "wrestling": { title: "Wrestling", metaTitle: "Wrestling Training | In-Person Coach | Group Fit", metaDesc: "Book in-person wrestling fundamentals (space dependent). Sessions emphasize movement, balance, drills, and conditioning.", intro: "Wrestling fundamentals focused on stance, movement, balance, and conditioning (space dependent).", bestFor: ["Athletic performance", "Balance and explosiveness", "Conditioning"], sessionIncludes: ["Warm-up and movement prep", "Stance/motion and drill work", "Conditioning and cooldown"], locations: ["Mat space recommended for takedown work", "Open space for movement drills"], faqs: [{ q: "Do I need mats?", a: "Mats are recommended for takedown work. Without mats, sessions can focus on safe movement drills and conditioning." }, { q: "Is it only for competitive wrestlers?", a: "No—coaches can tailor fundamentals to your level." }, { q: "Can this be done at home?", a: "Yes if you have suitable space; mats improve safety for certain drills." }] },
  "self-defense": { title: "Self Defense", metaTitle: "Self Defense Training | In-Person Coach | Group Fit", metaDesc: "Book in-person self defense training focused on fundamentals, awareness, movement, and controlled drills.", intro: "Practical training focused on fundamentals, awareness, movement, and controlled drills.", bestFor: ["Confidence and readiness", "Fitness and movement", "Fundamental self-defense skills"], sessionIncludes: ["Warm-up and mobility", "Fundamental techniques and movement", "Controlled drills (space permitting)", "Cooldown"], locations: ["Indoor space with room to move", "Outdoor sessions when appropriate"], faqs: [{ q: "Is this the same as martial arts training?", a: "It may overlap, but self-defense sessions focus on practical fundamentals and controlled drills." }, { q: "Is it beginner-friendly?", a: "Yes. Coaches can start with basics and build gradually." }, { q: "Do I need equipment?", a: "No. Sessions can be run without equipment." }] },
};

const topCities = [
  { name: "Toronto", slug: "toronto" },
  { name: "Vancouver", slug: "vancouver" },
  { name: "Calgary", slug: "calgary" },
  { name: "Ottawa", slug: "ottawa" },
  { name: "Montreal", slug: "montreal" },
  { name: "Edmonton", slug: "edmonton" },
  { name: "Mississauga", slug: "mississauga" },
  { name: "Winnipeg", slug: "winnipeg" },
];

const sessionOptions = [
  { icon: User, title: "1-on-1 Training", description: "Private session with a dedicated coach focused entirely on you." },
  { icon: Users, title: "Group Sessions", description: "Train with friends, family, or colleagues — split the cost." },
  { icon: Video, title: "Virtual Training", description: "Remote coaching sessions from anywhere, at any time." },
];

export default function ActivityDetail() {
  const { slug } = useParams();
  const activity = activityData[slug || ""] || activityData["strength-and-conditioning"];
  const heroImage = activityImages[slug || ""] || activityImages["strength-and-conditioning"];

  return (
    <>
      <Helmet>
        <title>{activity.metaTitle}</title>
        <meta name="description" content={activity.metaDesc} />
        <meta name="keywords" content={`${activity.title} training near me, private ${activity.title} coach, ${activity.title} lessons in Canada, in-person ${activity.title} sessions`} />
        <link rel="canonical" href={`https://groupfitapp.com/activities/${slug}`} />
        <meta property="og:title" content={activity.metaTitle} />
        <meta property="og:description" content={activity.metaDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://groupfitapp.com/groupfit-logo.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${activity.title} Training`,
            "description": activity.metaDesc,
            "provider": {
              "@type": "Organization",
              "name": "Group Fit",
              "url": "https://groupfitapp.com"
            },
            "areaServed": "Canada",
            "serviceType": `${activity.title} Training`
          })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label={`${activity.title} training - Book in-person sessions with certified coaches`}
        />
        <div className="absolute inset-0 bg-secondary/65" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              {activity.title} Trainers Near You
            </h1>
            <p className="mt-6 text-lg text-white/80">{activity.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white shadow-[0_0_20px_hsl(355_78%_56%/0.3)]">
                <Link to="/download">Find Your {activity.title} Trainer Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why Choose {activity.title} Training</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">Best for</h3>
                <ul className="space-y-2">{activity.bestFor.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">60-minute session may include</h3>
                <ul className="space-y-2">{activity.sessionIncludes.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">Where sessions work best</h3>
                <ul className="space-y-2">{activity.locations.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Options */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Available Options</h2>
              <p className="text-muted-foreground mt-2">Choose the format that works for you.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {sessionOptions.map((opt, i) => (
                <motion.div
                  key={opt.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <opt.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{opt.title}</h3>
                  <p className="text-muted-foreground text-sm">{opt.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">How It Works</h2>
            </motion.div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { step: "1", text: `Choose ${activity.title} as your activity` },
                { step: "2", text: "Select a trainer from available options" },
                { step: "3", text: "Pick your time and confirm your location" },
                { step: "4", text: "Book instantly — no back-and-forth" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-4 bg-card border border-border rounded-xl p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <span className="text-foreground text-sm pt-1">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cities with trainers */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Cities with {activity.title} Trainers
              </h2>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3">
              {topCities.map((city, i) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/cities/${city.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200"
                  >
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    {city.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {activity.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-5"><span className="font-medium text-foreground">{faq.q}</span></AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your {activity.title} Trainer Now
            </h2>
            <p className="text-white/70 mb-8">Book certified {activity.title} trainers for private or group sessions, in-person or virtual. Fast booking, transparent pricing, verified coaches.</p>
            <div className="flex justify-center mb-6">
              <AppStoreBadges iosLink={APP_LINKS.customer.ios} androidLink={APP_LINKS.customer.android} />
            </div>
            <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10">
              <Link to="/cities">Check Cities <ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <Link to="/activities" className="text-white/60 hover:text-primary transition-colors text-sm">← Back to Activities</Link>
              <Link to="/how-it-works" className="text-white/60 hover:text-primary transition-colors text-sm">How it Works</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
