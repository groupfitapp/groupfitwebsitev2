import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PillLinkProps {
  to: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "default";
  className?: string;
}

export const PillLink = forwardRef<HTMLAnchorElement, PillLinkProps>(
  ({ to, children, icon, variant = "primary", className }, ref) => {
    return (
      <Link
        ref={ref}
        to={to}
        className={cn(
          "group inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-200",
          variant === "primary" 
            ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white hover:border-primary" 
            : "bg-muted text-foreground border border-border hover:bg-primary/10 hover:text-primary hover:border-primary/30",
          className
        )}
      >
        {icon}
        {children}
        <ArrowRight className="w-4 h-4 transition-transform group-hover:animate-bounce-x" />
      </Link>
    );
  }
);

PillLink.displayName = "PillLink";
