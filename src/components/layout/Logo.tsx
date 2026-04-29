import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export const Logo = ({ className, inverted = false }: LogoProps) => {
  return (
    <Link
      to="/"
      className={cn("group relative inline-flex items-center gap-3", className)}
      aria-label="SSB Ciketing Udik — Beranda"
    >
      <img 
        src="/images/logossb.png" 
        alt="SSB Logo" 
        className="h-32 w-32 -ml-2 mt-12 object-contain group-hover:scale-110 transition-smooth"
      />
      <div className="flex flex-col leading-none">
        {/* <span
          className={cn(
            "font-display text-5xl tracking-wide",
            inverted ? "text-background" : "text-foreground"
          )}
        >
            SSB
        </span> */}
      </div>
    </Link>
  );
};
