export type Coach = {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
};

export const coaches: Coach[] = [
  {
    id: "head-coach",
    name: "Coach Bayu Pratama",
    role: "Kepala Pelatih",
    bio: "Mantan pemain liga lokal dengan lebih dari 15 tahun pengalaman melatih usia muda. Fokus pada pengembangan teknik dasar dan mentalitas juara.",
    experience: "AFC C License — 15+ tahun",
    image: "/images/foto3.png",
  },
  {
    id: "asst-coach",
    name: "Coach Rina Anggraini",
    role: "Asisten Pelatih & Pengembangan Fisik",
    bio: "Lulusan ilmu keolahragaan, ahli dalam program kondisi fisik dan pencegahan cedera untuk atlet muda.",
    experience: "Sport Science S1 — 8 tahun",
    image: "/images/foto1.png",
  },
  {
    id: "gk-coach",
    name: "Coach Adi Saputra",
    role: "Pelatih Penjaga Gawang",
    bio: "Mantan kiper profesional. Mengkhususkan diri dalam latihan refleks, positioning, dan kepemimpinan area pertahanan.",
    experience: "Goalkeeping Specialist — 10 tahun",
    image: "/images/foto2.png",
  },
];
