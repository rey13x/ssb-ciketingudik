/**
 * Infinite horizontal marquee strip with football keywords.
 * Pure CSS animation defined in tailwind config (`marquee`).
 */
export const Marquee = () => {
  const items = [
    "Disiplin",
    "Teknik",
    "Sportivitas",
    "Kerja Sama",
    "Mentalitas Juara",
    "Strategi",
    "Skill",
    "Karakter",
    "Stamina",
    "Passion",
  ];

  return (
    <div className="relative overflow-hidden border-y border-border bg-foreground py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-10 px-10">
            <span className="font-display text-3xl uppercase tracking-wide text-background sm:text-4xl">
              {it}
            </span>
            <span className="h-3 w-3 rotate-45 bg-primary" />
          </div>
        ))}
      </div>
    </div>
  );
};
