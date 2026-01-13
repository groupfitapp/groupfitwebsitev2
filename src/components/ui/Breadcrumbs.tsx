import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Route name mappings for automatic breadcrumb generation
const routeNames: Record<string, string> = {
  "": "Home",
  "about": "About",
  "activities": "Activities",
  "cities": "Cities",
  "trainer": "For Trainers",
  "how-it-works": "How It Works",
  "requirements": "Requirements",
  "faq": "FAQ",
  "download": "Download",
  "website-terms": "Website Terms",
  "website-privacy": "Website Privacy",
  "app-privacy": "App Privacy",
  "app-user-terms-and-condition": "User Terms",
  "app-trainer-terms-and-condition": "Trainer Terms",
  // Activities
  "strength-and-conditioning": "Strength & Conditioning",
  "yoga": "Yoga",
  "boxing": "Boxing",
  "hiit": "HIIT",
  "kickboxing": "Kickboxing",
  "muay-thai": "Muay Thai",
  "jiu-jitsu": "Jiu Jitsu",
  "wrestling": "Wrestling",
  "self-defense": "Self Defense",
  "soccer": "Soccer",
  "basketball": "Basketball",
  "bootcamp": "Bootcamp",
  "calisthenics": "Calisthenics",
  // Cities
  "toronto": "Toronto",
  "mississauga": "Mississauga",
  "vancouver": "Vancouver",
  "calgary": "Calgary",
  "edmonton": "Edmonton",
  "winnipeg": "Winnipeg",
  "ottawa": "Ottawa",
  "quebec-city": "Quebec City",
  "halifax": "Halifax",
  "saskatoon": "Saskatoon",
  "brampton": "Brampton",
  "oakville": "Oakville",
  "fredericton": "Fredericton",
};

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if not provided
  const breadcrumbItems: BreadcrumbItem[] = items || (() => {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const generatedItems: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
    
    let currentPath = "";
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const name = routeNames[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");
      generatedItems.push({ name, path: currentPath });
    });
    
    return generatedItems;
  })();

  // Don't render on home page
  if (location.pathname === "/" || breadcrumbItems.length <= 1) {
    return null;
  }

  // Generate JSON-LD schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://groupfitapp.com${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-1 text-sm ${className}`}
      >
        <ol className="flex items-center gap-1 flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isFirst = index === 0;
            
            return (
              <li key={item.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="text-white/60" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition-colors flex items-center gap-1"
                  >
                    {isFirst && <Home className="w-4 h-4" aria-hidden="true" />}
                    <span className={isFirst ? "sr-only md:not-sr-only" : ""}>
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
