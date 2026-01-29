import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PillLink } from "@/components/ui/PillLink";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// City images - local assets with responsive sizes
import mississaugaImg from "@/assets/cities/mississauga.jpg";
import mississaugaImg400 from "@/assets/cities/mississauga.jpg?w=400&format=webp";
import mississaugaImg200 from "@/assets/cities/mississauga.jpg?w=200&format=webp";

import vancouverImg from "@/assets/cities/vancouver.jpg";
import vancouverImg400 from "@/assets/cities/vancouver.jpg?w=400&format=webp";
import vancouverImg200 from "@/assets/cities/vancouver.jpg?w=200&format=webp";

import calgaryImg from "@/assets/cities/calgary.jpg";
import calgaryImg400 from "@/assets/cities/calgary.jpg?w=400&format=webp";
import calgaryImg200 from "@/assets/cities/calgary.jpg?w=200&format=webp";

import edmontonImg from "@/assets/cities/edmonton.jpg";
import edmontonImg400 from "@/assets/cities/edmonton.jpg?w=400&format=webp";
import edmontonImg200 from "@/assets/cities/edmonton.jpg?w=200&format=webp";

import winnipegImg from "@/assets/cities/winnipeg.jpg";
import winnipegImg400 from "@/assets/cities/winnipeg.jpg?w=400&format=webp";
import winnipegImg200 from "@/assets/cities/winnipeg.jpg?w=200&format=webp";

const cities = [
  { 
    name: "Toronto", 
    slug: "toronto", 
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop",
    srcSet: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=200&h=150&fit=crop 200w, https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=400&h=300&fit=crop 400w"
  },
  { name: "Mississauga", slug: "mississauga", image: mississaugaImg, srcSet: `${mississaugaImg200} 200w, ${mississaugaImg400} 400w` },
  { name: "Vancouver", slug: "vancouver", image: vancouverImg, srcSet: `${vancouverImg200} 200w, ${vancouverImg400} 400w` },
  { name: "Calgary", slug: "calgary", image: calgaryImg, srcSet: `${calgaryImg200} 200w, ${calgaryImg400} 400w` },
  { name: "Edmonton", slug: "edmonton", image: edmontonImg, srcSet: `${edmontonImg200} 200w, ${edmontonImg400} 400w` },
  { name: "Winnipeg", slug: "winnipeg", image: winnipegImg, srcSet: `${winnipegImg200} 200w, ${winnipegImg400} 400w` },
];

export function CitiesSection() {
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
          <PillLink to="/cities">
            View all cities
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
                        srcSet={city.srcSet}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        alt={`Personal trainers available in ${city.name}, Canada`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width={400}
                        height={300}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <span className="font-medium text-white text-sm group-hover:text-primary transition-colors duration-300">{city.name}</span>
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
