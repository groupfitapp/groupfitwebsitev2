import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

import citiesHeroImg from "@/assets/heroes/cities-hero.jpg";

// City images - local assets
import mississaugaImg from "@/assets/cities/mississauga.jpg";
import vancouverImg from "@/assets/cities/vancouver.jpg";
import calgaryImg from "@/assets/cities/calgary.jpg";
import edmontonImg from "@/assets/cities/edmonton.jpg";
import winnipegImg from "@/assets/cities/winnipeg.jpg";
import ottawaImg from "@/assets/cities/ottawa.jpg";
import quebecImg from "@/assets/cities/quebec.jpg";
import halifaxImg from "@/assets/cities/halifax.jpg";
import bramptonImg from "@/assets/cities/brampton.jpg";
import oakvilleImg from "@/assets/cities/oakville.jpg";
import saskatoonImg from "@/assets/cities/saskatoon.jpg";

const cityImages: Record<string, string> = {
  toronto: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop",
  mississauga: mississaugaImg,
  vancouver: vancouverImg,
  calgary: calgaryImg,
  edmonton: edmontonImg,
  winnipeg: winnipegImg,
  ottawa: ottawaImg,
  "quebec-city": quebecImg,
  halifax: halifaxImg,
  brampton: bramptonImg,
  oakville: oakvilleImg,
  fredericton: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
  saskatoon: saskatoonImg
};

interface City {
  name: string;
  slug: string;
}

interface Province {
  name: string;
  cities: City[];
}

const provinces: Province[] = [
  {
    name: "Ontario",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Mississauga", slug: "mississauga" },
      { name: "Ottawa", slug: "ottawa" },
      { name: "Brampton", slug: "brampton" },
      { name: "Oakville", slug: "oakville" }
    ]
  },
  {
    name: "British Columbia",
    cities: [{ name: "Vancouver", slug: "vancouver" }]
  },
  {
    name: "Alberta",
    cities: [
      { name: "Calgary", slug: "calgary" },
      { name: "Edmonton", slug: "edmonton" }
    ]
  },
  {
    name: "Manitoba",
    cities: [{ name: "Winnipeg", slug: "winnipeg" }]
  },
  {
    name: "Quebec",
    cities: [{ name: "Quebec City", slug: "quebec-city" }]
  },
  {
    name: "Nova Scotia",
    cities: [{ name: "Halifax", slug: "halifax" }]
  },
  {
    name: "New Brunswick",
    cities: [{ name: "Fredericton", slug: "fredericton" }]
  },
  {
    name: "Saskatchewan",
    cities: [{ name: "Saskatoon", slug: "saskatoon" }]
  }
];

export default function Cities() {
  const title = "Cities | Personal Trainer at Your Address | Group Fit";
  const description =
    "Browse Canadian cities served by Group Fit. To see real availability and book an in-person coach, enter your session address and time in Group Fit.";
  const canonical = "https://groupfitapp.com/cities";
  const ogImage = "https://groupfitapp.com/groupfit-logo.png";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="791" />
        <meta property="og:image:height" content="791" />
        <meta property="og:image:alt" content="Group Fit" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@groupfitapp" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Group Fit" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={citiesHeroImg}
            alt="Canadian cityscape"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs className="mb-6" />
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          >
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 28, filter: "blur(6px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            >
              Find trainers near you
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } } }}
              className="mt-6 text-lg text-white/60"
            >
              City pages help you choose the right activity and understand session options. To see real availability and book, use Group Fit with your exact session address and time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Cities by Province */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {provinces.map((province, provIndex) => (
            <motion.div
              key={province.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: provIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {province.name}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {province.cities.map((city, index) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Link
                      to={`/cities/${city.slug}`}
                      aria-label={`View personal training in ${city.name}`}
                      className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                    >
                      <img
                        src={cityImages[city.slug]}
                        alt={`Find personal trainers in ${city.name} for in-person sessions`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">{city.name}</h3>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        {/* Decorative elements with enhanced glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to find a trainer?
            </h2>

            <div className="flex justify-center mb-6">
              <AppStoreBadges iosLink={APP_LINKS.customer.ios} androidLink={APP_LINKS.customer.android} />
            </div>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/activities" aria-label="View Group Fit activities">
                View Activities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
