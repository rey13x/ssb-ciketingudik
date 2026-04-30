import { Link } from "react-router-dom";
import { CheckCircle2, Calendar, ArrowRight, MapPin } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { ageGroups, facilities } from "@/data/programs";

const Programs = () => {
  return (
    <>
      <PageHeader
        eyebrow="Program Latihan"
        title="Tiga jenjang. Satu tujuan."
        description="Kurikulum kami dirancang sesuai tahap perkembangan atlet muda — dari fun football hingga performance training."
        breadcrumb={[
          { label: "Beranda", to: "/" },
          { label: "Program" },
        ]}
      />

      {/* Age groups */}
      <section className="bg-background py-20 sm:py-28">
        <div className="container space-y-20">
          {ageGroups.filter(g => g.id === "u16").map((group, idx) => (
            <article
              key={group.id}
              id={group.id}
              className="grid scroll-mt-24 items-start gap-6 sm:gap-10 lg:grid-cols-12"
            >
              <Reveal className="lg:col-span-4">
                <div className="sticky top-20 sm:top-28">
                  <div className="relative inline-block">
                    <span className="font-display text-[4rem] leading-none text-primary/50 sm:text-[5rem] lg:text-[10rem]">
                      {group.name}
                    </span>
                    <div className="absolute -right-2 top-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-primary sm:h-16 sm:w-16 lg:-right-4 lg:top-2">
                      <group.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                  </div>
                  <div className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {group.ageRange}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1} className="lg:col-span-8">
                <div className="rounded-2xl bg-card p-6 transition-smooth hover:shadow-elegant sm:p-8 lg:p-10">
                  <h3 className="font-display text-3xl text-foreground sm:text-4xl">
                    {group.focus}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>

                  <div className="mt-8 grid gap-8 md:grid-cols-2">
                    {/* Schedule */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                        <Calendar className="h-3.5 w-3.5 text-primary" />
                        Jadwal Latihan
                      </h4>
                      <ul className="mt-4 divide-y divide-border rounded-lg">
                        {group.schedule.map((s) => (
                          <li
                            key={s.day}
                            className="flex items-center justify-between px-4 py-3 text-sm"
                          >
                            <span className="font-semibold text-foreground">
                              {s.day}
                            </span>
                            <span className="text-muted-foreground">
                              {s.time}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        Materi Utama
                      </h4>
                      <ul className="mt-4 space-y-3">
                        {group.highlights.map((h) => (
                          <li
                            key={h}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild variant="default">
                      <Link to="/contact">
                        Daftar {group.name} <ArrowRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Fasilitas"
            title="Tempat berkembang yang layak."
            description="Kami percaya, lingkungan latihan terbaik melahirkan performa terbaik."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div 
                  className="group relative h-full rounded-2xl p-7 transition-smooth hover:-translate-y-1 hover:shadow-elegant overflow-hidden"
                  style={{
                    backgroundImage: 'url(/images/foto9.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                  <div className="relative z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary transition-bounce group-hover:rotate-[-8deg] group-hover:bg-primary group-hover:text-primary-foreground">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-2xl text-background">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-background/80">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
