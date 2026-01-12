import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ChevronRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const activities = [
  "Strength & Conditioning",
  "Yoga",
  "Boxing",
  "HIIT",
  "Kickboxing",
  "Muay Thai",
  "Jiu Jitsu",
  "Wrestling",
  "Self Defense",
  "Soccer",
  "Basketball",
  "Bootcamp",
  "Calisthenics",
];

export default function SearchSection() {
  const [address, setAddress] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Check Availability at Your Address
            </h2>
            <p className="mt-2 text-muted-foreground">
              Type your address to view available coaches for in-person sessions near you.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="space-y-4">
              {/* Address Input */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your session address..."
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="pl-12 h-14 text-base bg-background"
                />
              </div>

              {/* Activity Selector */}
              <div className="relative">
                <Select value={activity} onValueChange={setActivity}>
                  <SelectTrigger className="h-14 text-base pl-12 bg-background">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <SelectValue placeholder="Select an activity" />
                  </SelectTrigger>
                  <SelectContent>
                    {activities.map((act) => (
                      <SelectItem key={act} value={act}>
                        {act}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                className="w-full h-14 text-lg bg-primary hover:bg-red-dark"
                asChild
              >
                <Link to="/download">
                  <Search className="w-5 h-5 mr-2" />
                  Find Available Coaches
                </Link>
              </Button>
            </div>

            {/* Helper Text */}
            <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Results are based on the session address you enter, your selected activity, and trainer availability.
              </p>
            </div>
          </div>

          {/* Supporting Links */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-8">
            <Link
              to="/activities"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all activities
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/cities"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View cities we serve
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              How booking works
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
