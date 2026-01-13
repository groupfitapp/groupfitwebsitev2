import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Home, Building, TreePine, Dumbbell, Flame, HeartPulse, ShieldCheck, Volleyball, LucideIcon, HandFist, Target, PersonStanding, Swords } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

// City images
import mississaugaImg from "@/assets/cities/mississauga.jpg";
import vancouverImg from "@/assets/cities/vancouver.jpg";
import calgaryImg from "@/assets/cities/calgary.jpg";
import edmontonImg from "@/assets/cities/edmonton.jpg";
import winnipegImg from "@/assets/cities/winnipeg.jpg";
import ottawaImg from "@/assets/cities/ottawa.jpg";
import quebecImg from "@/assets/cities/quebec.jpg";
import halifaxImg from "@/assets/cities/halifax.jpg";
import saskatoonImg from "@/assets/cities/saskatoon.jpg";
import bramptonImg from "@/assets/cities/brampton.jpg";
import oakvilleImg from "@/assets/cities/oakville.jpg";

const cityImages: Record<string, string> = {
  toronto: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=1200&h=600&fit=crop",
  mississauga: mississaugaImg,
  vancouver: vancouverImg,
  calgary: calgaryImg,
  edmonton: edmontonImg,
  winnipeg: winnipegImg,
  ottawa: ottawaImg,
  "quebec-city": quebecImg,
  halifax: halifaxImg,
  saskatoon: saskatoonImg,
  brampton: bramptonImg,
  oakville: oakvilleImg,
  fredericton: "https://images.unsplash.com/photo-1578861256483-c68e4b7a4e20?w=1200&h=600&fit=crop",
};

// Activity icon mapping
const activityIcons: Record<string, LucideIcon> = {
  "strength-and-conditioning": Dumbbell,
  "boxing": HandFist,
  "kickboxing": Target,
  "yoga": HeartPulse,
  "hiit": Flame,
  "calisthenics": PersonStanding,
  "bootcamp": Flame,
  "self-defense": ShieldCheck,
  "soccer": Volleyball,
  "basketball": Volleyball,
  "muay-thai": Swords,
  "jiu-jitsu": Swords,
  "wrestling": Swords,
};

const cityData: Record<string, { name: string; metaTitle: string; metaDesc: string; intro: string; activities: { name: string; slug: string }[] }> = {
  "toronto": { name: "Toronto", metaTitle: "Personal Trainer Toronto | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Toronto at your location. Choose an activity, session address, and time to see who is available.", intro: "Toronto customers often book Strength & Conditioning for structured progress, Boxing/Kickboxing for conditioning, and Yoga for mobility—especially for home and condo-gym sessions.", activities: [{ name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "mississauga": { name: "Mississauga", metaTitle: "Personal Trainer Mississauga | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Mississauga at your location.", intro: "Mississauga demand often leans toward Strength & Conditioning, HIIT, and Bootcamp—popular for busy schedules and efficient full-body sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "vancouver": { name: "Vancouver", metaTitle: "Personal Trainer Vancouver | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Vancouver at your location.", intro: "Vancouver bookings commonly blend Yoga and Strength & Conditioning, with HIIT and Calisthenics popular for park-friendly sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "calgary": { name: "Calgary", metaTitle: "Personal Trainer Calgary | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Calgary at your location.", intro: "Calgary customers often book Strength & Conditioning plus HIIT/Bootcamp for conditioning, and Boxing/Self Defense for skill-based fitness.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Self Defense", slug: "self-defense" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }] },
  "edmonton": { name: "Edmonton", metaTitle: "Personal Trainer Edmonton | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Edmonton at your location.", intro: "Edmonton bookings often focus on Strength & Conditioning for steady progress, with Yoga for mobility and Boxing/HIIT for conditioning.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "winnipeg": { name: "Winnipeg", metaTitle: "Personal Trainer Winnipeg | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Winnipeg at your location.", intro: "Winnipeg customers often choose Strength & Conditioning and Bootcamp for general fitness, with Yoga as a strong complement for mobility.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "ottawa": { name: "Ottawa", metaTitle: "Personal Trainer Ottawa | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Ottawa at your location.", intro: "Ottawa customers frequently book Strength & Conditioning for progress, with Yoga and Calisthenics for mobility and bodyweight-focused sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "quebec-city": { name: "Quebec City", metaTitle: "Personal Trainer Quebec City | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Quebec City at your location.", intro: "Quebec City customers often lean toward Yoga and Strength & Conditioning, with HIIT popular for efficient conditioning sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "halifax": { name: "Halifax", metaTitle: "Personal Trainer Halifax | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Halifax at your location.", intro: "Halifax customers often book Bootcamp/HIIT for group-friendly conditioning and Strength & Conditioning for steady progress.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "fredericton": { name: "Fredericton", metaTitle: "Personal Trainer Fredericton | In-Person Training | Group Fit", metaDesc: "Book in-person personal training in Fredericton at your location.", intro: "Fredericton customers often combine Strength & Conditioning and Yoga for balanced training—strength, mobility, and consistency.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "saskatoon": { name: "Saskatoon", metaTitle: "Personal Trainer Saskatoon | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Saskatoon at your location.", intro: "Saskatoon demand often centers on Strength & Conditioning and Boxing, with HIIT popular for fast-paced conditioning sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Self Defense", slug: "self-defense" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }] },
  "brampton": { name: "Brampton", metaTitle: "Personal Trainer Brampton | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Brampton at your location.", intro: "Brampton customers frequently book Strength & Conditioning and Boxing, plus Bootcamp/HIIT for high-energy conditioning.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "HIIT", slug: "hiit" }, { name: "Kickboxing", slug: "kickboxing" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
  "oakville": { name: "Oakville", metaTitle: "Personal Trainer Oakville | In-Person Training | Group Fit", metaDesc: "Book an in-person personal trainer in Oakville at your location.", intro: "Oakville customers often prefer Strength & Conditioning for steady progression, with Yoga and Calisthenics popular for mobility and bodyweight sessions.", activities: [{ name: "Bootcamp", slug: "bootcamp" }, { name: "Boxing", slug: "boxing" }, { name: "Calisthenics", slug: "calisthenics" }, { name: "HIIT", slug: "hiit" }, { name: "Strength & Conditioning", slug: "strength-and-conditioning" }, { name: "Yoga", slug: "yoga" }] },
};

const faqs = [
  { q: "What is this page for?", a: "This page helps you choose popular activities and understand where sessions can take place. To book, you'll use Group Fit with your exact session address, activity, and time." },
  { q: "Why do available coaches change when I change the address?", a: "Coach visibility is based on the session address you select in Group Fit. Changing the address can change who covers that location and who is available at your selected time." },
  { q: "How long is each session?", a: "Each session is 60 minutes." },
  { q: "Can I book a private group and split the cost?", a: "Yes. Group bookings are private (your own people). You can split the session cost inside Group Fit so there's no manual collecting." },
  { q: "What if I don't see options at my address?", a: "Try a different date or time, or choose a different activity. Availability depends on the session address, the activity selected, and coach schedules." },
];

export default function CityDetail() {
  const { slug } = useParams();
  const city = cityData[slug || ""] || cityData["toronto"];
  const heroImage = cityImages[slug || ""] || cityImages["toronto"];

  return (
    <>
      <Helmet>
        <title>{city.metaTitle}</title>
        <meta name="description" content={city.metaDesc} />
        <meta name="keywords" content={`personal trainer ${city.name}, fitness coach ${city.name}, in-person training ${city.name}, book trainer ${city.name}`} />
        <link rel="canonical" href={`https://groupfit.ca/cities/${slug}`} />
        <meta property="og:title" content={city.metaTitle} />
        <meta property="og:description" content={city.metaDesc} />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-secondary/65" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">In-person personal training in {city.name}</h1>
            <p className="mt-6 text-lg text-white/80">{city.intro}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Popular activities in {city.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {city.activities.map((act, i) => (
              <motion.div key={act.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={`/activities/${act.slug}`} className="group flex items-center gap-3 bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all">
                  {(() => {
                    const IconComponent = activityIcons[act.slug] || Dumbbell;
                    return <IconComponent className="w-5 h-5 text-primary" />;
                  })()}
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors">{act.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-foreground mb-6">Where sessions can happen</h3>
          <div className="flex flex-wrap gap-4">
            {[{ icon: Home, label: "Home" }, { icon: Building, label: "Condo gym" }, { icon: TreePine, label: "Park" }, { icon: Dumbbell, label: "Facility you arrange" }].map((loc) => (
              <div key={loc.label} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                <loc.icon className="w-4 h-4 text-primary" /><span className="text-sm text-muted-foreground">{loc.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">FAQs</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find a trainer in {city.name}?</h2>
            <div className="flex justify-center mb-6">
              <AppStoreBadges
                iosLink={APP_LINKS.customer.ios}
                androidLink={APP_LINKS.customer.android}
              />
            </div>
            <Button asChild size="lg" variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10"><Link to="/activities">View Activities<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
