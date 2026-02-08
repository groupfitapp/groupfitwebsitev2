import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useEffect, useState } from "react";

// Reviews data parsed from CSV - filtered to 4+ stars with meaningful text
const reviews = [{
  author: "Zaina Mohamed",
  rating: 5,
  text: "The variety and ease of finding coaches for mostly any sort of training is unmatched. I can make a booking in like less than 30 seconds."
}, {
  author: "mahaEl221",
  rating: 5,
  text: "This app is great, and the trainers are the real deal definitely would recommend."
}, {
  author: "rsbdjejdddn",
  rating: 5,
  text: "This is the new wave. Need more people to hear about group fit."
}, {
  author: "JustinW1ll1ams",
  rating: 5,
  text: "Amazing App. Very user friendly and very helpful with sports training."
}, {
  author: "Im7180",
  rating: 5,
  text: "This app is a game changer and the trainers are solid."
}, {
  author: "MahinAr16",
  rating: 5,
  text: "Simple app, helps me with my fitness journey, recommend to everyone"
}, {
  author: "Harry Muliyil",
  rating: 5,
  text: "This app is incredible. I've gotten to experience 1 on 1 time with a few different trainers and they've all been amazing and really helped me reach my goals."
}, {
  author: "Emily352",
  rating: 5,
  text: "This app is so smooth and easy to use!! 10/10 would recommend to parents and students. Good for all ages!!"
}, {
  author: "Connor B 45",
  rating: 5,
  text: "This is a game changing app."
}, {
  author: "Laith532",
  rating: 5,
  text: "I can't wait to book more sessions as it's such a great way to spend time"
}, {
  author: "JA643",
  rating: 5,
  text: "love how the trainers are easy to reach"
}, {
  author: "Majfhdb",
  rating: 5,
  text: "Love the variety of different sports to train"
}, {
  author: "Aizah4687",
  rating: 5,
  text: "This app helped me so much with the perfect trainer"
}, {
  author: "TGCyber10",
  rating: 5,
  text: "Love the variety can't wait to use it more"
}, {
  author: "Too many adds 1",
  rating: 5,
  text: "I love using Group Fit! It's so easy to find great personal trainers near me, and I like that I can book sessions that fit my schedule. The trainers are professional, friendly, and really know what they're doing."
}, {
  author: "Kari353",
  rating: 5,
  text: "Easy to use great to get into the gym."
}, {
  author: "mgamer.101",
  rating: 5,
  text: "10/10 recommend"
}, {
  author: "robert2070",
  rating: 5,
  text: "app runs smooth no bugs it's pretty good"
}, {
  author: "Mickey84tt",
  rating: 5,
  text: "Great setup, good workouts."
}, {
  author: "Viksaathvik",
  rating: 5,
  text: "Helped me with my fitness journey"
}, {
  author: "Zain",
  rating: 5,
  text: "This app is the best choice for active people, organizing their workout schedule, and their types of workouts. I recommend this app to anyone because it works the best."
}, {
  author: "dyrkwinder",
  rating: 5,
  text: "I've been using this fitness app for a few weeks now, and it's been a game-changer. The workout plans are easy to follow, and there's something for every fitness level."
}, {
  author: "Smokymountain9",
  rating: 5,
  text: "Group Fit has been a game-changer for my fitness routine. The app makes it easy to find workout classes, connect with others, and stay motivated."
}, {
  author: "Bella Boicca",
  rating: 5,
  text: "The creator of this app is a genius. This app helped me and my friend maya soo much."
}, {
  author: "20pounds lighter",
  rating: 5,
  text: "Damn so amazed that this app exists it is great love the trainers and thanks to this I lost a 10 pounds already"
}, {
  author: "gravemindset",
  rating: 5,
  text: "I found a trainer so easily and the app is so easy to use."
}, {
  author: "Bshehrebdur",
  rating: 5,
  text: "Great app for fitness!"
}, {
  author: "Scott6989",
  rating: 5,
  text: "Helped me excel in soccer so much"
}, {
  author: "Miss peak chipotle",
  rating: 5,
  text: "Easy to use and the trainers are amazing"
}, {
  author: "JRLLENA",
  rating: 5,
  text: "Super easy to access"
}, {
  author: "PakariL",
  rating: 5,
  text: "I lost 40 pounds since I started this app, I'm glad that personal trainers are finally accessible."
}, {
  author: "Phonemmm",
  rating: 5,
  text: "Would recommend for people trying to work out"
}, {
  author: "Lebron James🐐",
  rating: 5,
  text: "Great app been using for awhile now"
}, {
  author: "lozicc07",
  rating: 5,
  text: "Very easy to use, quick sign up, and very useful. Overall great app."
}, {
  author: "Huzaifah213",
  rating: 5,
  text: "If you're not using it you're missing out because it saved my life."
}, {
  author: "Angelo2100",
  rating: 5,
  text: "Helps achieve your fitness goals and has everything you need."
}, {
  author: "Pritesh2647",
  rating: 5,
  text: "This app changed my unhealthy lifestyle and I became a new person."
}, {
  author: "Rafehhh",
  rating: 5,
  text: "app's easy to use, for both beginners and pros this app is perfect!"
}, {
  author: "Weijie223",
  rating: 5,
  text: "Good job on this app man, pretty good really useful"
}, {
  author: "trapizoids",
  rating: 5,
  text: "This app is a total game-changer! GroupFit connected me with an amazing personal trainer who totally understood my goals and pushed me to stay motivated."
}, {
  author: "Jakelano",
  rating: 5,
  text: "The trainers are very professional and friendly. There are so many activities to choose from."
}, {
  author: "floofy cookie",
  rating: 5,
  text: "The app is great incredible sports and activities definitely a worthwhile app."
}, {
  author: "Murr lak",
  rating: 5,
  text: "App is very smooth and very friendly trainers"
}, {
  author: "Toseef Raza",
  rating: 5,
  text: "I would recommend it"
}, {
  author: "donkhi",
  rating: 5,
  text: "the app is very easy to use and the trainers are very easy going.. a must have!!"
}, {
  author: "VanUrban",
  rating: 5,
  text: "Perfect app for training"
}, {
  author: "Ishpreetttt",
  rating: 5,
  text: "Had no trouble and it was pretty straightforward and helpful"
}, {
  author: "k.u.24",
  rating: 5,
  text: "Super easy to use, and very helpful"
}, {
  author: "Gabe Bairos",
  rating: 5,
  text: "At first, this app just looked like any other fitness app you'd come across. Little did I know how much power would be held into this app. Download it and start the journey already!!!"
}, {
  author: "Kiran2323",
  rating: 5,
  text: "Good app. Love to use"
}, {
  author: "Zaryan Anwar",
  rating: 5,
  text: "Amazing app very useful and I use it daily."
}, {
  author: "cjrbx",
  rating: 5,
  text: "Great for the gym easy to use super helpful"
}, {
  author: "Jud Z",
  rating: 5,
  text: "Love this app! It's super helpful"
}, {
  author: "QurayshM",
  rating: 5,
  text: "Group Fit is exactly what I've been looking for! From browsing different activities and trainers to booking sessions. No more stressing about where to find a coach or how to schedule a session."
}, {
  author: "HuzMohd",
  rating: 5,
  text: "I wanted to coach myself for boxing but always had an issue finding the right person with a convenient time slot with Groupfit I can book at my leisure at any venue of my choice."
}];
function getInitials(name: string) {
  return name.split(/[\s_]+/).map(n => n[0]).join("").toUpperCase().slice(0, 2);
}
export function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect — cache scrollWidth to avoid forced reflows every frame
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    let animationId: number;
    const scrollSpeed = 0.5;

    // Cache the half-width; update on resize
    let halfWidth = scrollContainer.scrollWidth / 2;
    const onResize = () => {
      halfWidth = scrollContainer.scrollWidth / 2;
    };
    window.addEventListener("resize", onResize, { passive: true });

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start when reaching the end (seamless loop)
        if (scrollContainer.scrollLeft >= halfWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", onResize);
    };
  }, [isPaused]);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];
  return <section className="py-16 md:py-24 bg-background overflow-hidden" style={{ contain: 'layout style' }}>
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            App Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Everyone</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See what our customers are saying about Group Fit on the App Store
          </p>
        </div>
      </div>

      {/* Horizontal scroll container */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scrollbar-hide px-4 pb-4" style={{
      scrollbarWidth: "none",
      msOverflowStyle: "none"
    }} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
        {duplicatedReviews.map((review, index) => <div key={`${review.author}-${index}`} className="flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all duration-300 border border-border/50">
            <div className="flex items-center gap-3 mb-4">
              <Avatar className="h-10 w-10 bg-primary/10">
                <AvatarFallback className="bg-primary/10 text-primary font-medium text-sm">
                  {getInitials(review.author)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground truncate">{review.author}</p>
                <div className="flex gap-0.5">
                  {Array.from({
                length: review.rating
              }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
              "{review.text}"
            </p>
          </div>)}
      </div>

      {/* Gradient fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </section>;
}