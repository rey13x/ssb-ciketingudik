import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/common/PageHeader";
import { Reveal } from "@/components/common/Reveal";
import { Parallax } from "@/components/common/Parallax";
import { SectionHeading } from "@/components/common/SectionHeading";
import { coaches } from "@/data/coaches";

const HISTORY_IMG = "/images/foto1.png";

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title="Lebih dari sekadar sekolah bola."
        description="Kami adalah komunitas. Tempat anak-anak tumbuh menjadi pemain — dan menjadi manusia — yang lebih baik."
        breadcrumb={[
          { label: "Beranda", to: "/" },
          { label: "Tentang Kami" },
        ]}
      />

      {/* Detailed History */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-2xl shadow-elegant">
                <Parallax speed={-0.15} className="aspect-[4/5]">
                  <img
                    src={HISTORY_IMG}
                    alt="Foto tim awal SSB Ciketing Udik"
                    crossOrigin="anonymous"
                    className="h-[115%] w-full object-cover"
                  />
                </Parallax>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Sejarah Lengkap"
                title="Dari lapangan tanah ke level kompetitif."
              />
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <Reveal>
                  <p>
                    Tahun 2013, sekelompok pemuda kampung Ciketing Udik
                    berkumpul di lapangan tanah dekat sawah. Mereka resah
                    melihat anak-anak tetangga tidak punya tempat berlatih
                    sepak bola yang layak. Bermodal niat, beberapa bola, dan
                    izin pemilik lahan, lahirlah sebuah sekolah sepak bola
                    sederhana.
                  </p>
                </Reveal>
                <Reveal delay={0.05}>
                  <p>
                    Tahun-tahun pertama tidak mudah. Tidak ada seragam, tidak
                    ada cone — bahkan tiang gawang dibuat dari bambu. Namun
                    semangat 12 anak pertama dan dukungan orang tua membuat
                    SSB ini terus bertahan. Setiap akhir pekan, lapangan itu
                    selalu penuh.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <p>
                    Pada 2017, kami pindah ke lapangan rumput di pinggiran
                    Bantargebang dan mulai menerima pelatih bersertifikat.
                    Trofi pertama datang setahun kemudian — juara turnamen
                    SSB se-Bekasi U13. Sejak itu, perjalanan kami terus
                    menanjak.
                  </p>
                </Reveal>
                <Reveal delay={0.15}>
                  <p>
                    Kini, lebih dari satu dekade kemudian, SSB Ciketing Udik
                    membina 180+ siswa, memiliki 3 kategori usia, 8 pelatih
                    bersertifikat, dan beberapa alumni yang bermain di tim
                    junior klub profesional Indonesia.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-secondary/40 py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Arah Kami"
            title="Visi, misi, dan nilai."
            description="Tiga hal yang menjadi kompas setiap keputusan kami — di lapangan maupun di luar lapangan."
            align="center"
          />
          <div className="mt-14 flex gap-6 overflow-x-auto pb-4">
            {[
              {
                icon: Eye,
                title: "Visi",
                content:
                  "Menjadi sekolah sepak bola usia muda paling dipercaya di Bekasi raya — yang melahirkan pemain berkarakter, berskill, dan siap menembus level profesional.",
              },
              {
                icon: Target,
                title: "Misi",
                content:
                  "Memberikan latihan terstruktur sesuai usia, membangun karakter sportif, menyediakan fasilitas dan pelatih berkualitas, serta menjembatani siswa berbakat ke jenjang yang lebih tinggi.",
              },
              {
                icon: Heart,
                title: "Nilai",
                content:
                  "Disiplin, sportivitas, kerja sama, kerja keras, dan rasa hormat. Lima nilai ini ditanamkan dalam setiap sesi latihan dan setiap pertandingan yang kami mainkan.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="group min-w-[320px] rounded-2xl bg-card p-8 transition-smooth hover:shadow-elegant">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-bounce group-hover:rotate-[-8deg]">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <motion.div
            className="mt-6 flex justify-center opacity-50"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-6 w-6 text-foreground" />
          </motion.div>
        </div>
      </section>

      {/* Coaches */}
      <section className="bg-background py-24 sm:py-32">
        <div className="container">
          <SectionHeading
            eyebrow="Tim Pelatih"
            title="Dilatih oleh yang terbaik."
            description="Setiap pelatih kami adalah profesional berlisensi — sebagian besar mantan pemain dengan rekam jejak nyata di lapangan hijau."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coaches.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                  <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
                    <img
                      src={c.image}
                      alt={c.name}
                      crossOrigin="anonymous"
                      className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-foreground/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground">
                      {c.experience}
                    </div>
                  </div>
                  <div className="flex flex-col p-6">
                    <h3 className="font-display text-2xl text-foreground">
                      {c.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {c.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {c.bio}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
