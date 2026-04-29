import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_IMG_PRIMARY = "/images/foto4.png";
const HERO_IMG_FALLBACK = "/images/foto4.png";

export const Hero = () => {
  const [heroImage, setHeroImage] = useState(HERO_IMG_PRIMARY);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleImageError = () => {
    if (heroImage === HERO_IMG_PRIMARY) {
      setHeroImage(HERO_IMG_FALLBACK);
    }
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] w-full overflow-hidden bg-foreground"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <img
          src={heroImage}
          alt="Pemain muda berlatih sepak bola di lapangan"
          crossOrigin="anonymous"
          onError={handleImageError}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero-overlay)" }}
        />
      </motion.div>

      {/* Decorative diagonal slashes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-2 w-64 -rotate-12 bg-primary/80 origin-left animate-[fade-in_1s_ease-out_0.4s_both]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-24 h-2 w-40 -rotate-12 bg-primary/60 origin-right animate-[fade-in_1s_ease-out_0.6s_both]"
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="container relative z-10 flex min-h-[92vh] flex-col justify-center pt-24 pb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
            Pendaftaran U10 · U13 · U16 dibuka
          </div>

          <h1 className="mt-6 font-display text-[2.75rem] leading-[0.92] tracking-tight text-background sm:text-7xl lg:text-[7.5rem]">
            SSB Ciketing
            <br />
            <span className="relative inline-block">
              <span className="text-primary">Udik.</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
                className="absolute -bottom-2 left-0 h-2 w-full origin-left bg-primary/60"
              />
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-background/80 sm:text-lg">
            Sekolah sepak bola untuk anak Indonesia. Latihan terstruktur,
            pelatih bersertifikat, dan jenjang kompetisi nyata —
            mempersiapkan generasi pemain muda menuju level tertinggi.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="xl" variant="hero">
              <Link to="/contact">
                Daftar Sekarang <ArrowRight className="ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="ghost"
              className="text-background hover:bg-background/10 hover:text-background"
            >
              <Link to="/programs">
                <PlayCircle className="mr-1" /> Lihat Program
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-background/15 pt-8 sm:grid-cols-4 sm:gap-10"
        >
          {[
            { v: "12+", l: "Tahun pengalaman" },
            { v: "180+", l: "Siswa aktif" },
            { v: "24", l: "Trofi turnamen" },
            { v: "8", l: "Pelatih bersertifikat" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl text-primary sm:text-5xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-background/65">
                {s.l}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-background/60"
      >
        Scroll
      </motion.div>
    </section>
  );
};
