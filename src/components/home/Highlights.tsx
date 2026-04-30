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


      </div>
    </section>
  );
};
