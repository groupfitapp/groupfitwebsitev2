import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/PillLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// City images - local assets
import mississaugaImg from "@/assets/cities/mississauga.jpg";
import vancouverImg from "@/assets/cities/vancouver.jpg";
import calgaryImg from "@/assets/cities/calgary.jpg";
import edmontonImg from "@/assets/cities/edmonton.jpg";
import winnipegImg from "@/assets/cities/winnipeg.jpg";

const cities = [
  { nameKey: "cities.cityNames.toronto", slug: "toronto", image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop" },
  { nameKey: "cities.cityNames.mississauga", slug: "mississauga", image: mississaugaImg },
  { nameKey: "cities.cityNames.vancouver", slug: "vancouver", image: vancouverImg },
  { nameKey: "cities.cityNames.calgary", slug: "calgary", image: calgaryImg },
  { nameKey: "cities.cityNames.edmonton", slug: "edmonton", image: edmontonImg },
  { nameKey: "cities.cityNames.winnipeg", slug: "winnipeg", image: winnipegImg },
];

export function CitiesSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              {t("home.cities.title")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-2 text-muted-foreground"
            >
              {t("home.cities.subtitle")}
            </motion.p>
          </div>
          <PillLink to="/cities">
            {t("home.cities.viewAll")}
          </PillLink>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {cities.map((city) => (
                <CarouselItem key={city.slug} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lifted)] rounded-xl transition-shadow duration-300"
                  >
                    <Link
                      to={`/cities/${city.slug}`}
                      className="group block relative aspect-[4/3] rounded-xl overflow-hidden"
                    >
                      <img
                        src={city.image}
                        alt={`Personal trainers available in ${t(city.nameKey)}, Canada`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <span className="font-medium text-white text-sm group-hover:text-primary transition-colors duration-300">{t(city.nameKey)}</span>
                      </div>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
