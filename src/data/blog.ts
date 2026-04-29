export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "SSB Ciketing Udik Juara Turnamen Antar SSB Bekasi 2025",
    excerpt:
      "Tim U13 berhasil membawa pulang trofi juara setelah mengalahkan tim tuan rumah dengan skor 3-1 di partai final yang berlangsung sengit.",
    category: "Prestasi",
    date: "12 April 2025",
    readTime: "4 min",
    cover: "/images/foto3.png",
    author: "Tim Redaksi",
  },
  {
    id: "2",
    title: "5 Latihan Dasar yang Wajib Dikuasai Pemain Muda",
    excerpt:
      "Coach Bayu membagikan lima drill fundamental yang menjadi kurikulum wajib di setiap sesi latihan SSB Ciketing Udik.",
    category: "Tips",
    date: "28 Maret 2025",
    readTime: "6 min",
    cover: "/images/foto4.png",
    author: "Coach Bayu",
  },
  {
    id: "3",
    title: "Jadwal Open Trial Penerimaan Siswa Baru 2025/2026",
    excerpt:
      "Pendaftaran resmi dibuka untuk semua kategori usia. Simak jadwal lengkap, persyaratan, dan tata cara pendaftarannya.",
    category: "Pengumuman",
    date: "15 Maret 2025",
    readTime: "3 min",
    cover: "/images/foto6.png",
    author: "Manajemen",
  },
  {
    id: "4",
    title: "Pentingnya Nutrisi untuk Performa Atlet Usia Dini",
    excerpt:
      "Bagaimana mengatur pola makan anak yang aktif berlatih sepak bola? Berikut panduan praktis dari ahli gizi olahraga.",
    category: "Edukasi",
    date: "02 Maret 2025",
    readTime: "5 min",
    cover: "/images/foto7.png",
    author: "Dr. Sari Putri",
  },
  {
    id: "5",
    title: "Cerita di Balik Layar Persiapan Match-Day U16",
    excerpt:
      "Kunci kemenangan tidak hanya di lapangan. Lihat persiapan tim mulai dari taktik, mental, hingga ritual pra-pertandingan.",
    category: "Cerita",
    date: "20 Februari 2025",
    readTime: "7 min",
    cover: "/images/foto8.png",
    author: "Coach Adi",
  },
  {
    id: "6",
    title: "Workshop Orang Tua: Mendampingi Karier Sepak Bola Anak",
    excerpt:
      "SSB Ciketing Udik mengadakan workshop bulanan untuk membantu orang tua memahami peran dukungan mereka.",
    category: "Acara",
    date: "08 Februari 2025",
    readTime: "4 min",
    cover: "/images/foto5.png",
    author: "Tim Redaksi",
  },
];
