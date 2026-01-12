import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ChevronDown, Info, Loader2, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { APP_LINKS } from "@/lib/appLinks";

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

interface AddressSuggestion {
  place_id: string;
  description: string;
}

export default function SearchSection() {
  const [address, setAddress] = useState("");
  const [activity, setActivity] = useState("");
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([]);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [showAddressSuggestions, setShowAddressSuggestions] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const activityRef = useRef<HTMLDivElement>(null);
  const addressInputRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout>();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activityRef.current && !activityRef.current.contains(event.target as Node)) {
        setIsActivityOpen(false);
      }
      if (addressInputRef.current && !addressInputRef.current.contains(event.target as Node)) {
        setShowAddressSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simulated address autocomplete (in production, use Google Places API)
  const handleAddressChange = (value: string) => {
    setAddress(value);
    setHasSearched(false);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (value.length < 3) {
      setAddressSuggestions([]);
      setShowAddressSuggestions(false);
      return;
    }

    setIsLoadingAddress(true);

    debounceRef.current = setTimeout(() => {
      // Simulated suggestions - replace with actual API call
      const mockSuggestions: AddressSuggestion[] = [
        { place_id: "1", description: `${value}, Toronto, ON, Canada` },
        { place_id: "2", description: `${value}, Vancouver, BC, Canada` },
        { place_id: "3", description: `${value}, Montreal, QC, Canada` },
        { place_id: "4", description: `${value}, Calgary, AB, Canada` },
      ];
      setAddressSuggestions(mockSuggestions);
      setShowAddressSuggestions(true);
      setIsLoadingAddress(false);
    }, 300);
  };

  const selectAddress = (suggestion: AddressSuggestion) => {
    setAddress(suggestion.description);
    setShowAddressSuggestions(false);
    setAddressSuggestions([]);
  };

  const handleSearch = () => {
    if (address && activity) {
      setHasSearched(true);
    }
  };

  const isFormValid = address.length > 0 && activity.length > 0;

  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Check Trainer Availability
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Enter your session address to find available coaches for in-person training near you.
            </motion.p>
          </div>

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="space-y-5">
              {/* Address Input */}
              <div ref={addressInputRef} className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Session Address
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Enter your session address..."
                    value={address}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    onFocus={() => addressSuggestions.length > 0 && setShowAddressSuggestions(true)}
                    className="pl-12 h-14 text-base bg-background border-border focus:border-primary transition-colors"
                  />
                  {isLoadingAddress && (
                    <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground animate-spin" />
                  )}
                </div>

                {/* Address Suggestions Dropdown */}
                <AnimatePresence>
                  {showAddressSuggestions && addressSuggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                    >
                      {addressSuggestions.map((suggestion) => (
                        <button
                          key={suggestion.place_id}
                          onClick={() => selectAddress(suggestion)}
                          className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors flex items-center gap-3 border-b border-border last:border-0"
                        >
                          <MapPin className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          <span className="text-sm text-foreground truncate">
                            {suggestion.description}
                          </span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Activity Selector */}
              <div ref={activityRef} className="relative">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Activity Type
                </label>
                <button
                  onClick={() => setIsActivityOpen(!isActivityOpen)}
                  className="w-full h-14 px-4 text-left bg-background border border-border rounded-lg flex items-center justify-between hover:border-primary transition-colors"
                >
                  <span className={activity ? "text-foreground" : "text-muted-foreground"}>
                    {activity || "Select an activity"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${isActivityOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Activity Dropdown */}
                <AnimatePresence>
                  {isActivityOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden max-h-64 overflow-y-auto"
                    >
                      {activities.map((act) => (
                        <button
                          key={act}
                          onClick={() => {
                            setActivity(act);
                            setIsActivityOpen(false);
                            setHasSearched(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b border-border last:border-0 ${
                            activity === act ? "bg-primary/10 text-primary" : "text-foreground"
                          }`}
                        >
                          {act}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Button */}
              <Button
                size="lg"
                onClick={handleSearch}
                disabled={!isFormValid}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Search className="w-5 h-5 mr-2" />
                Check Availability
              </Button>
            </div>

            {/* Results Section */}
            <AnimatePresence>
              {hasSearched && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <Search className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Coaches Available!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Download the Group Fit app to view available coaches for {activity} near your location.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Button
                        asChild
                        size="lg"
                        className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background"
                      >
                        <a href={APP_LINKS.customer.ios} target="_blank" rel="noopener noreferrer">
                          <Apple className="w-5 h-5 mr-2" />
                          App Store
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        <a href={APP_LINKS.customer.android} target="_blank" rel="noopener noreferrer">
                          <Smartphone className="w-5 h-5 mr-2" />
                          Google Play
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Helper Text */}
            <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Results are based on the session address you enter, your selected activity, and trainer availability in the app.
              </p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-6"
          >
            <a
              href="/activities"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              View all activities →
            </a>
            <a
              href="/cities"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cities we serve →
            </a>
            <a
              href="/how-it-works"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              How it works →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
