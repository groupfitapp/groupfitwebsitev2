import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

// City images from unsplash - iconic landmarks
const cityImages: Record<string, string> = {
  toronto: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop",
  mississauga: "https://images.unsplash.com/photo-1569878698889-7bffa1896872?w=400&h=300&fit=crop",
  vancouver: "https://images.unsplash.com/photo-1559511260-66a68e7e7a91?w=400&h=300&fit=crop",
  calgary: "https://images.unsplash.com/photo-1554769524-4a3c08bbe85a?w=400&h=300&fit=crop",
  edmonton: "https://images.unsplash.com/photo-1543318234-f49d07d27e26?w=400&h=300&fit=crop",
  winnipeg: "https://images.unsplash.com/photo-1602879943431-07f0d41baef2?w=400&h=300&fit=crop",
  ottawa: "https://images.unsplash.com/photo-1570117429971-0b3e6aeb6a7d?w=400&h=300&fit=crop",
  "quebec-city": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  halifax: "https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=400&h=300&fit=crop",
  fredericton: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop",
  saskatoon: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
  brampton: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop",
  oakville: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
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
      { name: "Oakville", slug: "oakville" },
    ],
  },
  {
    name: "British Columbia",
    cities: [
      { name: "Vancouver", slug: "vancouver" },
    ],
  },
  {
    name: "Alberta",
    cities: [
      { name: "Calgary", slug: "calgary" },
      { name: "Edmonton", slug: "edmonton" },
    ],
  },
  {
    name: "Manitoba",
    cities: [
      { name: "Winnipeg", slug: "winnipeg" },
    ],
  },
  {
    name: "Quebec",
    cities: [
      { name: "Quebec City", slug: "quebec-city" },
    ],
  },
  {
    name: "Nova Scotia",
    cities: [
      { name: "Halifax", slug: "halifax" },
    ],
  },
  {
    name: "New Brunswick",
    cities: [
      { name: "Fredericton", slug: "fredericton" },
    ],
  },
  {
    name: "Saskatchewan",
    cities: [
      { name: "Saskatoon", slug: "saskatoon" },
    ],
  },
];

export default function Cities() {
  return (
    <>
      <Helmet>
        <title>Cities | In-Person Personal Trainers Near You | Group Fit</title>
        <meta
          name="description"
          content="Find in-person personal trainers by city. Booking and availability depend on your exact session address, activity selection, and time in Group Fit."
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
              Find trainers near you
            </h1>
            <p className="mt-6 text-lg text-white/70">
              City pages help you pick the right activity and understand session location options. To see real availability and book, use Group Fit with your exact session address and time.
            </p>
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
                      className="group block relative aspect-[4/3] rounded-2xl overflow-hidden"
                    >
                      <img
                        src={cityImages[city.slug]}
                        alt={city.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-lg">
                          {city.name}
                        </h3>
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
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
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
              <AppStoreBadges
                iosLink={APP_LINKS.customer.ios}
                androidLink={APP_LINKS.customer.android}
              />
            </div>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Link to="/activities">
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
