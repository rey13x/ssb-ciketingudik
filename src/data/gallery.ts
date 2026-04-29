export type GalleryItem = {
  id: string;
  src: string;
  caption: string;
  category: "Latihan" | "Pertandingan" | "Acara";
  span?: "wide" | "tall" | "default";
};

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/foto1.png", caption: "Sesi dribbling cone — kategori U10", category: "Latihan", span: "tall" },
  { id: "g2", src: "/images/foto2.png", caption: "Duel udara di pertandingan persahabatan", category: "Pertandingan", span: "tall" },
  { id: "g3", src: "/images/foto3.png", caption: "Selebrasi juara turnamen kabupaten", category: "Acara", span: "wide" },
  { id: "g4", src: "/images/foto4.png", caption: "Briefing teknik passing", category: "Latihan", span: "default" },
  { id: "g5", src: "/images/foto5.png", caption: "Sprint dengan bola — U13", category: "Latihan", span: "tall" },
  { id: "g6", src: "/images/foto6.png", caption: "Sesi latihan terbuka di lapangan utama", category: "Latihan", span: "wide" },
  { id: "g7", src: "/images/foto7.png", caption: "Detail momen tendangan", category: "Pertandingan", span: "default" },
  { id: "g8", src: "/images/foto8.png", caption: "Huddle motivasi sebelum match-day", category: "Acara", span: "tall" },
  { id: "g9", src: "/images/foto9.png", caption: "Latihan rutin Sabtu pagi", category: "Latihan", span: "default" },
  { id: "g10", src: "/images/foto10.png", caption: "Final regional U16", category: "Pertandingan", span: "wide" },
  { id: "g11", src: "/images/foto1.png", caption: "Coaching clinic bersama orang tua", category: "Acara", span: "default" },
  { id: "g12", src: "/images/foto2.png", caption: "Atlet muda di pemanasan", category: "Latihan", span: "default" },
  { id: "g13", src: "/images/foto3.png", caption: "Sesi drill teknik dribbling", category: "Latihan", span: "tall" },
  { id: "g14", src: "/images/foto10.png", caption: "Pertandingan antar SSB", category: "Pertandingan", span: "default" },
  { id: "g15", src: "/images/foto1.png", caption: "Acara penyerahan penghargaan", category: "Acara", span: "wide" },
  { id: "g16", src: "/images/foto2.png", caption: "Latihan intensif persiapan turnamen", category: "Latihan", span: "tall" },
];
