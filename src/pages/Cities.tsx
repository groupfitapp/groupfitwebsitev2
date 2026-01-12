import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";

const cities = [
  { name: "Toronto", slug: "toronto", province: "Ontario" },
  { name: "Mississauga", slug: "mississauga", province: "Ontario" },
  { name: "Vancouver", slug: "vancouver", province: "British Columbia" },
  { name: "Calgary", slug: "calgary", province: "Alberta" },
  { name: "Edmonton", slug: "edmonton", province: "Alberta" },
  { name: "Winnipeg", slug: "winnipeg", province: "Manitoba" },
  { name: "Ottawa", slug: "ottawa", province: "Ontario" },
  { name: "Quebec City", slug: "quebec-city", province: "Quebec" },
  { name: "Halifax", slug: "halifax", province: "Nova Scotia" },
  { name: "Fredericton", slug: "fredericton", province: "New Brunswick" },
  { name: "Saskatoon", slug: "saskatoon", province: "Saskatchewan" },
  { name: "Brampton", slug: "brampton", province: "Ontario" },
  { name: "Oakville", slug: "oakville", province: "Ontario" },
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

      {/* Cities Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={city.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={`/cities/${city.slug}`}
                  className="group block bg-card border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {city.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{city.province}</p>
                </Link>
              </motion.div>
            ))}
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
