import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  inverted?: boolean;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  inverted = false,
}: SectionHeadingProps) => {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.18em]",
            inverted ? "text-primary" : "text-foreground/70"
          )}
        >
          <span className="h-px w-8 bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance",
          inverted ? "text-background" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            inverted ? "text-background/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};
