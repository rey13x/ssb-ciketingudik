import { Trophy, ShieldCheck, Users, Sparkles } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const highlights = [
  {
    icon: Trophy,
    title: "Prestasi Konsisten",
    description:
      "Lebih dari 24 trofi turnamen lokal dan regional dalam 5 tahun terakhir.",
  },
  {
    icon: ShieldCheck,
    title: "Pelatih Bersertifikat",
    description:
      "Dilatih oleh pelatih berlisensi AFC dengan pengalaman lebih dari 10 tahun.",
  },
  {
    icon: Users,
    title: "Kelompok Usia Lengkap",
    description:
      "Kurikulum khusus untuk U10, U13, dan U16 dengan jenjang yang jelas.",
  },
  {
    icon: Sparkles,
    title: "Fasilitas Modern",
    description:
      "Lapangan rumput terawat, gym, ruang strategi, hingga klinik olahraga.",
  },
];

export const Highlights = () => {
  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Mengapa Memilih Kami"
          title="Latihan profesional, atmosfer kompetitif."
          description="Kami percaya setiap anak punya potensi untuk berkembang. Tugas kami adalah menyediakan lingkungan terbaik untuk mereka tumbuh."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:border-primary hover:shadow-elegant">
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/0 blur-2xl transition-smooth group-hover:bg-primary/15"
                />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-bounce group-hover:rotate-[-8deg] group-hover:bg-primary group-hover:text-primary-foreground">
                    <h.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-foreground">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {h.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
