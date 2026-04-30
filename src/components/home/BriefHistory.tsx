import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { Parallax } from "@/components/common/Parallax";

const HISTORY_IMG_PRIMARY = "/images/foto5.png";
const HISTORY_IMG_FALLBACK = "/images/foto5.png";

export const BriefHistory = () => {
  const [historyImage, setHistoryImage] = useState(HISTORY_IMG_PRIMARY);

  const handleImageError = () => {
    if (historyImage === HISTORY_IMG_PRIMARY) {
      setHistoryImage(HISTORY_IMG_FALLBACK);
    }
  };

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24 sm:py-32">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-elegant">
                <Parallax speed={-0.15} className="aspect-[4/3] w-full">
                  <img
                    src={historyImage}
                    alt="Tim awal SSB Ciketing Udik"
                    crossOrigin="anonymous"
                    onError={handleImageError}
                    className="h-[115%] w-full object-cover"
                  />
                </Parallax>
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 sm:block">
                <div className="font-display text-5xl leading-none text-primary-foreground">
                  2013
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-widest text-primary-foreground/80">
                  Tahun Berdiri
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.18em] text-foreground/70">
                <span className="h-px w-8 bg-primary" />
                Sejarah Singkat
              </div>
              <h2 className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
                Lahir dari kecintaan kampung pada{" "}
                <span className="yellow-underline">si kulit bundar.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  SSB Ciketing Udik berdiri tahun 2013 di pinggiran Bekasi —
                  berawal dari sekelompok ayah dan pemuda kampung yang ingin
                  memberikan ruang berlatih layak bagi anak-anak setempat.
                </p>
                <p>
                  Dari satu lapangan tanah dengan 12 anak, kini kami menjadi
                  rumah bagi lebih dari 180 siswa aktif di tiga kelompok usia,
                  dengan pelatih bersertifikat dan fasilitas yang terus
                  berkembang.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <Button asChild size="lg" variant="default" className="mt-8">
                <Link to="/about">
                  Baca Cerita Lengkap <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
