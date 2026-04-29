import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 sm:py-32">
      {/* Diagonal yellow slash */}
      <div
        aria-hidden
        className="absolute inset-y-0 -left-32 w-[55%] -skew-x-12 bg-primary"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 left-[20%] w-1 -skew-x-12 bg-foreground"
      />

      {/* Decorative dots */}
      <div
        aria-hidden
        className="absolute right-12 top-12 hidden h-32 w-32 rounded-full border-[14px] border-primary/30 sm:block"
      />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="text-primary-foreground">
              <div className="text-xs font-bold uppercase tracking-[0.25em] opacity-70">
                Bergabung Sekarang
              </div>
              <h2 className="mt-3 font-display text-4xl leading-[0.95] tracking-tight md:text-6xl">
                Trial gratis untuk
                <br /> calon siswa baru.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="text-background">
              <p className="text-base leading-relaxed text-background/85 max-w-md">
                Datang ke sesi latihan, rasakan atmosfernya, dan biarkan
                pelatih kami menilai potensi terbaik anak Anda. Tidak ada
                biaya, tidak ada komitmen.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="xl" variant="hero">
                  <Link to="/contact">
                    Daftar Trial Gratis <ArrowRight />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="ghost"
                  className="text-background border-2 border-background/30 hover:bg-background hover:text-foreground"
                >
                  <Link to="/programs">Pelajari Program</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
