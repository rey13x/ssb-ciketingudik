import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ageGroups } from "@/data/programs";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";

export const ProgramsTeaser = () => {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Program Latihan"
            title="Tiga jenjang. Satu jalur menuju puncak."
            description="Setiap kategori usia memiliki kurikulum, beban latihan, dan tujuan yang berbeda — disesuaikan dengan tahap perkembangan atlet muda."
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline-yellow" size="lg" className="hidden md:inline-flex">
              <Link to="/programs">
                Semua Program <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {ageGroups.map((g, i) => (
            <Reveal key={g.id} delay={i * 0.1}>
              <Link
                to={`/programs#${g.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elegant"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground text-primary transition-bounce group-hover:bg-primary group-hover:text-primary-foreground">
                    <g.icon className="h-7 w-7" />
                  </div>
                  <span className="font-display text-6xl leading-none text-primary/15 transition-smooth group-hover:text-primary/40">
                    {g.name}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-3xl text-foreground">
                  {g.focus}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {g.ageRange}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {g.description}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-smooth group-hover:text-primary">
                  Lihat detail <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button asChild variant="outline-yellow" size="lg" className="w-full">
            <Link to="/programs">
              Semua Program <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
