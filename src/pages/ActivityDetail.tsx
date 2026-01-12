import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight, CheckCircle, MapPin, Home, TreePine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { APP_LINKS } from "@/lib/appLinks";

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

export default function ActivityDetail() {
  const { slug } = useParams();
  const activity = activityData[slug || ""] || activityData["strength-and-conditioning"];

  return (
    <>
      <Helmet>
        <title>{activity.metaTitle}</title>
        <meta name="description" content={activity.metaDesc} />
      </Helmet>

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">{activity.title} training at your location</h1>
            <p className="mt-6 text-lg text-white/70">{activity.intro}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Best for</h3>
              <ul className="space-y-2">{activity.bestFor.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">60-minute session may include</h3>
              <ul className="space-y-2">{activity.sessionIncludes.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Where sessions work best</h3>
              <ul className="space-y-2">{activity.locations.map((item, i) => <li key={i} className="flex items-start gap-2 text-muted-foreground"><MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />{item}</li>)}</ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
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

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-red-dark text-white"><a href={APP_LINKS.customer.ios} target="_blank" rel="noopener noreferrer"><Download className="w-5 h-5 mr-2" />Download App</a></Button>
              <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10"><Link to="/cities">Check Cities<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            </div>
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
