import { Baby, Users, Trophy } from "lucide-react";

export type AgeGroup = {
  id: string;
  name: string;
  ageRange: string;
  icon: typeof Baby;
  focus: string;
  description: string;
  schedule: { day: string; time: string }[];
  highlights: string[];
};

export const ageGroups: AgeGroup[] = [
  {
    id: "u10",
    name: "U10",
    ageRange: "Usia 7–10 tahun",
    icon: Baby,
    focus: "Fundamental & Fun Football",
    description:
      "Membangun kecintaan terhadap sepak bola melalui permainan dan koordinasi dasar. Fokus pada ball mastery dan keseimbangan motorik.",
    schedule: [
      { day: "Selasa", time: "15:30 — 17:00" },
      { day: "Kamis", time: "15:30 — 17:00" },
      { day: "Sabtu", time: "07:30 — 09:00" },
    ],
    highlights: ["Drill koordinasi", "Game-based learning", "Mini tournament"],
  },
  {
    id: "u13",
    name: "U13",
    ageRange: "Usia 11–13 tahun",
    icon: Users,
    focus: "Skill Development & Position Awareness",
    description:
      "Memperkenalkan posisi, taktik dasar, dan transisi permainan. Penekanan pada teknik passing, control, dan pengambilan keputusan.",
    schedule: [
      { day: "Senin", time: "16:00 — 17:30" },
      { day: "Rabu", time: "16:00 — 17:30" },
      { day: "Sabtu", time: "09:30 — 11:00" },
    ],
    highlights: ["Drill posisi", "Friendly match mingguan", "Video review"],
  },
  {
    id: "u16",
    name: "U16",
    ageRange: "Usia 14–16 tahun",
    icon: Trophy,
    focus: "Tactical & Performance",
    description:
      "Persiapan menuju level kompetitif. Latihan intensitas tinggi dengan periodisasi, taktik tim, dan pengembangan fisik atletik.",
    schedule: [
      { day: "Senin", time: "17:30 — 19:30" },
      { day: "Rabu", time: "17:30 — 19:30" },
      { day: "Jumat", time: "17:30 — 19:30" },
      { day: "Sabtu", time: "16:00 — 18:00" },
    ],
    highlights: ["Strength & conditioning", "Liga internal", "Talent scouting"],
  },
];

export const facilities = [
  {
    title: "Lapangan Rumput",
    description: "Lapangan utama berstandar dengan rumput terawat untuk semua sesi latihan dan pertandingan resmi.",
  },
  {
    title: "Lapangan Mini & Futsal",
    description: "Area latihan teknik kecil untuk drill 1v1, rondo, dan small-sided games.",
  },
  {
    title: "Ruang Ganti & Loker",
    description: "Ruang ganti bersih dengan loker pribadi, shower air hangat, dan ruang strategi.",
  },
  {
    title: "Gym & Recovery",
    description: "Peralatan strength & conditioning serta zona recovery dengan foam roller dan ice bath.",
  },
  {
    title: "Klinik Olahraga",
    description: "Layanan fisioterapi mingguan dan asesmen pencegahan cedera oleh tenaga ahli.",
  },
  {
    title: "Ruang Edukasi",
    description: "Ruang teori untuk video analysis, sesi nutrisi, dan workshop mental performance.",
  },
];
