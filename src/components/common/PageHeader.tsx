import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
}

export const PageHeader = ({
  eyebrow,
  title,
  description,
  breadcrumb,
}: PageHeaderProps) => {
  return (
    <section className="relative overflow-hidden bg-foreground py-20 sm:py-28">
      {/* Decorative slashes */}
      <div
        aria-hidden
        className="absolute -right-32 -top-20 h-[140%] w-[60%] -rotate-12 bg-primary/10"
      />
      <div
        aria-hidden
        className="absolute -left-24 bottom-0 h-2 w-72 -rotate-12 bg-primary"
      />
      <div
        aria-hidden
        className="absolute right-10 top-10 hidden h-40 w-40 rounded-full border-[12px] border-primary/20 sm:block"
      />

      <div className="container relative">
        {breadcrumb && (
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-background/65"
          >
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {b.to ? (
                  <Link to={b.to} className="hover:text-primary transition-smooth">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-background">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </div>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-background sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};
