import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useEffect, useState } from "react";

// Reviews data parsed from CSV
const reviews = [
  { author: "Zaina Mohamed", rating: 5, text: "The variety and ease of finding coaches for mostly any sort of training is unmatched. I can make a booking in like less than 30 seconds." },
  { author: "mahaEl221", rating: 5, text: "This app is great, and the trainers are the real deal definitely would recommend." },
  { author: "rsbdjejdddn", rating: 5, text: "This is the new wave. Need more people to hear about group fit." },
  { author: "JustinW1ll1ams", rating: 5, text: "Amazing App. Very user friendly and very helpful with sports training." },
  { author: "Im7180", rating: 5, text: "This app is a game changer and the trainers are solid." },
  { author: "MahinAr16", rating: 5, text: "Simple app, helps me with my fitness journey, recommend to everyone" },
  { author: "Harry Muliyil", rating: 5, text: "This app is incredible. I've gotten to experience 1 on 1 time with a few different trainers and they've all been amazing and really helped me reach my goals." },
  { author: "Emily352", rating: 5, text: "This app is so smooth and easy to use!! 10/10 would recommend to parents and students. Good for all ages!!" },
  { author: "Connor B 45", rating: 5, text: "This is a game changing app." },
  { author: "Laith532", rating: 5, text: "I can't wait to book more sessions as it's such a great way to spend time" },
  { author: "JA643", rating: 5, text: "love how the trainers are easy to reach" },
  { author: "Majfhdb", rating: 5, text: "Love the variety of different sports to train" },
  { author: "Aizah4687", rating: 5, text: "This app helped me so much with the perfect trainer" },
  { author: "TGCyber10", rating: 5, text: "Love the variety can't wait to use it more" },
  { author: "Chesan1243", rating: 5, text: "The activities are so unique" },
];

function getInitials(name: string) {
  return name
    .split(/[\s_]+/)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to start when reaching the end (seamless loop)
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            App Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="text-primary">Thousands</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what our customers are saying about Group Fit on the App Store
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${review.author}-${index}`}
            className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-10 w-10 bg-primary/10">
                <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                  {getInitials(review.author)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{review.author}</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
              "{review.text}"
            </p>
          </div>
        ))}
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}
