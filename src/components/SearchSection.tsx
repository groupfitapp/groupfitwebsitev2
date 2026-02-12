import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ChevronDown, Info, Loader2, LocateFixed, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AppStoreBadges } from "@/components/ui/AppStoreBadges";
import { APP_LINKS } from "@/lib/appLinks";
import { PillLink } from "@/components/ui/PillLink";

// Extend window for Google Maps
declare global {
  interface Window {
    google?: {
      maps: {
        places: {
          Autocomplete: new (input: HTMLInputElement, options?: object) => {
            addListener: (event: string, callback: () => void) => void;
            getPlace: () => {
              geometry?: {
                location: { lat: () => number; lng: () => number };
              };
              formatted_address?: string;
            };
          };
        };
        Geocoder: new () => {
          geocode: (
            request: { address?: string; location?: { lat: number; lng: number } },
            callback: (
              results: Array<{
                geometry: { location: { lat: () => number; lng: () => number } };
                formatted_address: string;
              }> | null,
              status: string
            ) => void
          ) => void;
        };
      };
    };
  }
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const CONFIG = {
  SHEET_URL:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQcFnalZoacA7H0P-JXOgMkXCfSmnztWUJPGWraznJedSIVauk3Iq6-njDzwp7sXhpoDbyqZBldKVZn/pub?output=csv",
  MAP_ZOOM: 12,
  CIRCLE_COLOR: "#2196F3"
};

interface Trainer {
  Name: string;
  Activity: string;
  Day: string;
  "Start Time": string;
  "End Time": string;
  Latitude: string;
  Longitude: string;
  KM: string;
  DistanceKM?: number;
}

// Calculate distance between two coordinates (Haversine formula)
function getDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Parse time string to minutes
function parseTime(str: string): number {
  const [time, mod] = str.split(" ");
  let [h, m] = time.split(":").map(Number);
  if (mod === "PM" && h < 12) h += 12;
  if (mod === "AM" && h === 12) h = 0;
  return h * 60 + m;
}

// Format minutes to time string
function formatTime(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${m.toString().padStart(2, "0")} ${period}`;
}

// Parse CSV data
function parseCSV(text: string): Trainer[] {
  const lines = text.trim().split("\n");
  const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));

  return lines.slice(1).map((line) => {
    const values: string[] = [];
    let current = "";
    let inQuotes = false;

    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        values.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    const obj: Record<string, string> = {};
    headers.forEach((header, i) => {
      obj[header] = values[i] || "";
    });

    return obj as unknown as Trainer;
  });
}

export default function SearchSection() {
  const [address, setAddress] = useState("");
  const [activity, setActivity] = useState("");
  const [day, setDay] = useState("");
  const [isActivityOpen, setIsActivityOpen] = useState(false);
  const [isDayOpen, setIsDayOpen] = useState(false);

  const [isLoadingMaps, setIsLoadingMaps] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);

  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  const [allTrainers, setAllTrainers] = useState<Trainer[]>([]);
  const [validTrainers, setValidTrainers] = useState<Trainer[]>([]);
  const [filteredTrainers, setFilteredTrainers] = useState<Trainer[]>([]);
  const [availableActivities, setAvailableActivities] = useState<string[]>([]);
  const [availableDays, setAvailableDays] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const activityRef = useRef<HTMLDivElement>(null);
  const dayRef = useRef<HTMLDivElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const autocompleteRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const geocoderRef = useRef<any>(null);

  /**
   * ✅ BIG PERFORMANCE FIX:
   * Load Google Maps only when the user interacts with the address section.
   */
  const loadGoogleMaps = useCallback(() => {
    if (mapsLoaded || isLoadingMaps) return;

    if (window.google?.maps?.places) {
      setMapsLoaded(true);
      return;
    }

    setIsLoadingMaps(true);

    const existing = document.querySelector('script[data-google-maps="1"]') as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => {
        setMapsLoaded(true);
        setIsLoadingMaps(false);
      });
      existing.addEventListener("error", () => {
        setIsLoadingMaps(false);
      });
      return;
    }

    const script = document.createElement("script");
    script.setAttribute("data-google-maps", "1");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfy7AmCWSSV36sswSYqtZkdhSt68M0eaA&libraries=places";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      setMapsLoaded(true);
      setIsLoadingMaps(false);
    };

    script.onerror = () => {
      setIsLoadingMaps(false);
      alert("Map services failed to load. You can still type your address and submit.");
    };

    document.head.appendChild(script);
  }, [mapsLoaded, isLoadingMaps]);

  // Initialize autocomplete when Maps is loaded
  useEffect(() => {
    if (!mapsLoaded || !addressInputRef.current || !window.google?.maps) return;

    geocoderRef.current = new window.google.maps.Geocoder();

    autocompleteRef.current = new window.google.maps.places.Autocomplete(addressInputRef.current, {
      componentRestrictions: { country: "ca" }
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.geometry?.location) {
        const loc = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        };
        setUserLocation(loc);
        setAddress(place.formatted_address || "");
        handleLocationSet(loc);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapsLoaded]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activityRef.current && !activityRef.current.contains(event.target as Node)) {
        setIsActivityOpen(false);
      }
      if (dayRef.current && !dayRef.current.contains(event.target as Node)) {
        setIsDayOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch last updated date on mount (and cache trainer data)
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(CONFIG.SHEET_URL);
        const text = await response.text();
        const lines = text.trim().split("\n");
        const headers = lines[0].split(",").map((h) => h.trim().replace(/"/g, ""));
        const colIndex = headers.indexOf("LastUpdated");
        if (colIndex !== -1 && lines.length > 1) {
          const firstDataRow = lines[1].split(",");
          const val = (firstDataRow[colIndex] || "").trim().replace(/"/g, "");
          if (val) setLastUpdated(val);
        }
        const data = parseCSV(text);
        setAllTrainers(data);
      } catch (error) {
        console.error("Failed to fetch trainer data:", error);
      }
    })();
  }, []);

  // Fetch trainer data (only when needed)
  const fetchTrainerData = useCallback(async (): Promise<Trainer[]> => {
    if (allTrainers.length > 0) return allTrainers;

    try {
      const response = await fetch(CONFIG.SHEET_URL);
      const text = await response.text();
      const data = parseCSV(text);
      setAllTrainers(data);
      return data;
    } catch (error) {
      console.error("Failed to fetch trainer data:", error);
      return [];
    }
  }, [allTrainers]);

  // Handle location set (either from autocomplete or geolocation)
  const handleLocationSet = useCallback(
    async (loc: { lat: number; lng: number }) => {
      setIsSearching(true);
      setShowResults(true);

      const data = await fetchTrainerData();
      const trainersWithDistance = data
        .filter((t) => t.Latitude && t.Longitude)
        .map((t) => ({
          ...t,
          DistanceKM: Math.floor(
            getDistance(loc.lat, loc.lng, parseFloat(t.Latitude), parseFloat(t.Longitude))
          )
        }))
        .filter((t) => t.DistanceKM !== undefined && t.DistanceKM <= parseFloat(t.KM));

      setValidTrainers(trainersWithDistance);

      // Get unique activities
      const uniqueActivities = [...new Set(trainersWithDistance.map((t) => t.Activity))].sort();
      setAvailableActivities(uniqueActivities);

      setActivity("");
      setDay("");
      setFilteredTrainers([]);
      setIsSearching(false);
      setHasSearched(true);
    },
    [fetchTrainerData]
  );

  // Handle activity change
  const handleActivityChange = useCallback(
    (selectedActivity: string) => {
      setActivity(selectedActivity);
      setIsActivityOpen(false);

      // Get available days for this activity
      const trainersForActivity = validTrainers.filter((t) => t.Activity === selectedActivity);
      const uniqueDays = [...new Set(trainersForActivity.map((t) => t.Day))].sort(
        (a, b) => DAYS.indexOf(a) - DAYS.indexOf(b)
      );

      setAvailableDays(uniqueDays);
      setDay("");
      setFilteredTrainers([]);
    },
    [validTrainers]
  );

  // Handle day change
  const handleDayChange = useCallback(
    (selectedDay: string) => {
      setDay(selectedDay);
      setIsDayOpen(false);

      // Filter trainers by activity and day
      const filtered = validTrainers.filter((t) => t.Activity === activity && t.Day === selectedDay);
      setFilteredTrainers(filtered);
    },
    [validTrainers, activity]
  );

  // Handle submit button
  const handleSubmit = useCallback(async () => {
    if (!address.trim()) {
      alert("Please enter an address.");
      return;
    }

    setIsSearching(true);

    // If Maps isn't loaded yet, load it now (so geocoder can run)
    if (!mapsLoaded) {
      loadGoogleMaps();
    }

    // Try to geocode the address if we don't have a location
    if (!userLocation && geocoderRef.current) {
      geocoderRef.current.geocode({ address }, (results, status) => {
        if (status === "OK" && results?.[0]) {
          const loc = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          setUserLocation(loc);
          handleLocationSet(loc);
        } else {
          alert("Could not find the address. Please try again.");
          setIsSearching(false);
        }
      });
    } else if (userLocation) {
      handleLocationSet(userLocation);
    } else {
      // If geocoder isn't available (Maps still loading), let user try again
      setIsSearching(false);
      alert("Loading map services. Please try again in a moment.");
    }
  }, [address, userLocation, handleLocationSet, mapsLoaded, loadGoogleMaps]);

  // Handle use my location
  const handleUseMyLocation = useCallback(() => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    // Ensure Maps loads when user requests location (reverse geocode)
    if (!mapsLoaded) loadGoogleMaps();

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        // Reverse geocode to get address
        if (geocoderRef.current) {
          geocoderRef.current.geocode({ location: loc }, (results, status) => {
            if (status === "OK" && results?.[0]) {
              setAddress(results[0].formatted_address);
            }
            setUserLocation(loc);
            handleLocationSet(loc);
            setIsLoadingLocation(false);
          });
        } else {
          setUserLocation(loc);
          handleLocationSet(loc);
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Could not get your location. Please type your address manually.");
        setIsLoadingLocation(false);
      }
    );
  }, [handleLocationSet, mapsLoaded, loadGoogleMaps]);

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
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight"
            >
              Check Trainer Availability
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              Enter your address to see trainers available for your activity and time—right where you want to train.
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
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Session Address</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      ref={addressInputRef}
                      type="text"
                      placeholder={mapsLoaded ? "Enter address" : "Enter address (map loads when you click)"}
                      value={address}
                      onFocus={loadGoogleMaps}
                      onClick={loadGoogleMaps}
                      onChange={(e) => {
                        setAddress(e.target.value);
                        setHasSearched(false);
                        setShowResults(false);
                      }}
                      className="pl-12 h-14 text-base bg-background border-border focus:border-primary transition-colors"
                    />
                    {isLoadingMaps && (
                      <Loader2 className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground animate-spin" />
                    )}
                  </div>
                  <Button
                    onClick={handleUseMyLocation}
                    disabled={isLoadingLocation}
                    variant="outline"
                    className="h-14 px-4 whitespace-nowrap"
                  >
                    {isLoadingLocation ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <LocateFixed className="w-5 h-5 mr-2" />
                        <span className="hidden sm:inline">Use My Location</span>
                        <span className="sm:hidden">📍</span>
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                size="lg"
                onClick={handleSubmit}
                disabled={!address.trim() || isSearching}
                className="w-full h-14 text-lg bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5 mr-2" />
                    Submit
                  </>
                )}
              </Button>

              {/* Activity & Day Dropdowns - Show after search */}
              <AnimatePresence>
                {showResults && hasSearched && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-5 pt-4"
                  >
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* Activity Selector */}
                      <div ref={activityRef} className="relative flex-1">
                        <label className="block text-sm font-medium text-foreground mb-2">Select Activity</label>
                        <button
                          onClick={() => setIsActivityOpen(!isActivityOpen)}
                          disabled={availableActivities.length === 0}
                          className="w-full h-14 px-4 text-left bg-background border border-border rounded-lg flex items-center justify-between hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className={activity ? "text-foreground" : "text-muted-foreground"}>
                            {activity || "Select Activity"}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                              isActivityOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isActivityOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden max-h-64 overflow-y-auto"
                            >
                              {availableActivities.map((act) => (
                                <button
                                  key={act}
                                  onClick={() => handleActivityChange(act)}
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

                      {/* Day Selector */}
                      <div ref={dayRef} className="relative flex-1">
                        <label className="block text-sm font-medium text-foreground mb-2">Select Day</label>
                        <button
                          onClick={() => setIsDayOpen(!isDayOpen)}
                          disabled={!activity || availableDays.length === 0}
                          className="w-full h-14 px-4 text-left bg-background border border-border rounded-lg flex items-center justify-between hover:border-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className={day ? "text-foreground" : "text-muted-foreground"}>
                            {day || "Select Day"}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-muted-foreground transition-transform ${
                              isDayOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isDayOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 w-full mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden max-h-64 overflow-y-auto"
                            >
                              {availableDays.map((d) => (
                                <button
                                  key={d}
                                  onClick={() => handleDayChange(d)}
                                  className={`w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b border-border last:border-0 ${
                                    day === d ? "bg-primary/10 text-primary" : "text-foreground"
                                  }`}
                                >
                                  {d}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Results Section */}
            <AnimatePresence>
              {showResults && hasSearched && validTrainers.length === 0 && !isSearching && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="text-center p-6 bg-muted/50 rounded-xl">
                    <h3 className="text-xl font-semibold text-foreground mb-2">No trainers found nearby.</h3>
                    <p className="text-muted-foreground">Try searching for a different location or checking back later!</p>
                  </div>
                </motion.div>
              )}

              {showResults && hasSearched && validTrainers.length > 0 && availableActivities.length > 0 && !activity && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="text-center p-6 bg-primary/10 rounded-xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-3">
                      <Info className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">Select an activity and day to see who's available.</p>
                  </div>
                </motion.div>
              )}

              {filteredTrainers.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 pt-6 border-t border-border"
                >
                  <div className="mb-4 text-center">
                    <h3 className="text-lg font-semibold text-foreground">Available Trainers - Book on Group Fit</h3>
                  </div>

                  {/* Desktop Table */}
                  <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-secondary text-white">
                          <th className="px-4 py-3 text-center font-semibold">Name</th>
                          <th className="px-4 py-3 text-center font-semibold">Start Time</th>
                          <th className="px-4 py-3 text-center font-semibold">End Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredTrainers.map((trainer, index) => (
                          <tr
                            key={`${trainer.Name}-${index}`}
                            className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                          >
                            <td className="px-4 py-3 text-center text-foreground font-medium">{trainer.Name}</td>
                            <td className="px-4 py-3 text-center text-muted-foreground">
                              {formatTime(parseTime(trainer["Start Time"]))}
                            </td>
                            <td className="px-4 py-3 text-center text-muted-foreground">
                              {formatTime(parseTime(trainer["End Time"]))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile Cards */}
                  <div className="md:hidden space-y-3">
                    {filteredTrainers.map((trainer, index) => (
                      <div
                        key={`${trainer.Name}-${index}`}
                        className="bg-card border border-border rounded-xl overflow-hidden shadow-sm"
                      >
                        <div className="bg-secondary text-white px-4 py-3 font-semibold">{trainer.Name}</div>
                        <div className="p-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">Start Time</span>
                            <span className="text-sm text-muted-foreground">
                              {formatTime(parseTime(trainer["Start Time"]))}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-foreground">End Time</span>
                            <span className="text-sm text-muted-foreground">
                              {formatTime(parseTime(trainer["End Time"]))}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Download CTA */}
                  <div className="mt-6 text-center">
                    <p className="text-muted-foreground mb-4">Download the Group Fit app to book your session.</p>
                    <AppStoreBadges
                      iosLink={APP_LINKS.customer.ios}
                      androidLink={APP_LINKS.customer.android}
                      className="justify-center"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Helper Text */}
            <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>Results are based on the session address you enter, your selected activity, and trainer availability in the app.</p>
            </div>

            {/* Last Updated */}
            {lastUpdated && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Last Updated On: {lastUpdated}
              </p>
            )}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <PillLink to="/activities" variant="default">
              View all activities
            </PillLink>
            <PillLink to="/cities" variant="default">
              Cities we serve
            </PillLink>
            <PillLink to="/how-it-works" variant="default">
              How it works
            </PillLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
