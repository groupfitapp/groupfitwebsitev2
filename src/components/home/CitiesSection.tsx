import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// City images - local assets
import torontoImg from "@/assets/cities/toronto.jpg";
import mississaugaImg from "@/assets/cities/mississauga.jpg";
import vancouverImg from "@/assets/cities/vancouver.jpg";
import calgaryImg from "@/assets/cities/calgary.jpg";
import edmontonImg from "@/assets/cities/edmonton.jpg";
import winnipegImg from "@/assets/cities/winnipeg.jpg";

const cityImages: Record<string, string> = {
  toronto: torontoImg,
  mississauga: mississaugaImg,
  vancouver: vancouverImg,
  calgary: calgaryImg,
  edmonton: edmontonImg,
  winnipeg: winnipegImg,
};

interface Province {
  name: string;
  cities: { name: string; slug: string }[];
}

const provinces: Province[] = [
  {
    name: "Ontario",
    cities: [
      { name: "Toronto", slug: "toronto" },
      { name: "Mississauga", slug: "mississauga" },
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
];

export function CitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Available across Canada
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-muted-foreground"
            >
              Subject to trainer availability in your area
            </motion.p>
          </div>
          <Link
            to="/cities"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all cities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-8">
          {provinces.map((province, provIndex) => (
            <motion.div
              key={province.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: provIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{province.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {province.cities.map((city, index) => (
                  <motion.div
                    key={city.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/cities/${city.slug}`}
                      className="group block relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      <img
                        src={cityImages[city.slug]}
                        alt={city.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <span className="font-medium text-white text-sm">{city.name}</span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
