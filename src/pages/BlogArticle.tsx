import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";
import { PageHeader } from "@/components/common/PageHeader";

// Article content based on ID - customize each article's content here
const articleContentMap: Record<string, string> = {
  "1": `
    <h2>Pencapaian Luar Biasa</h2>
    <p>Tim U13 SSB Ciketing Udik telah mencapai prestasi yang gemilang dalam Turnamen Antar SSB Bekasi 2025. Dengan kerja keras, dedikasi, dan semangat juara, para pemain muda kami berhasil membawa pulang trofi juara.</p>
    
    <h3>Perjalanan Menuju Puncak</h3>
    <p>Perjalanan tim dimulai dari fase grup dimana mereka berhasil melewati semua laga dengan gemilang. Pertandingan demi pertandingan dijalani dengan penuh semangat dan disiplin tinggi sesuai dengan nilai-nilai yang kami ajarkan di SSB Ciketing Udik.</p>
    
    <h3>Partai Final yang Heroik</h3>
    <p>Dalam partai final yang berlangsung sengit, tim U13 kami berhadapan dengan tim tuan rumah dengan kepercayaan diri tinggi. Dengan pola bermain yang solid dan eksekusi taktik yang sempurna, akhirnya tim kami berhasil menang dengan skor 3-1 di pertandingan yang sangat kompetitif.</p>
    
    <h3>Pesan Pelatih</h3>
    <p>Coach kami menyampaikan bahwa kemenangan ini bukan hanya hasil dari kemampuan teknis, tetapi juga mental yang kuat, kerja sama tim yang solid, dan kepercayaan diri yang tinggi. Semua pemain membuat kontribusi penting dalam mencapai hasil yang luar biasa ini.</p>
    
    <h3>Apresiasi</h3>
    <p>Kami berterima kasih kepada semua pemain, orang tua, dan tim support kami yang telah memberikan dukungan penuh. Trofi ini adalah bukti nyata dari komitmen kami dalam memberikan pendidikan olahraga yang berkualitas tinggi.</p>
  `,
  "2": `
    <h2>5 Latihan Dasar yang Wajib Dikuasai</h2>
    <p>Coach Bayu telah merancang program latihan yang komprehensif untuk memastikan setiap pemain muda menguasai fondasi sepak bola yang kuat. Berikut adalah lima drill fundamental yang menjadi kurikulum wajib di setiap sesi latihan SSB Ciketing Udik.</p>
    
    <h3>1. Kontrol Bola dan First Touch</h3>
    <p>Latihan pertama fokus pada kemampuan pemain menerima dan mengontrol bola dengan sempurna. First touch yang baik adalah fondasi dari semua keterampilan sepak bola lainnya. Kami menggunakan berbagai variasi latihan untuk meningkatkan sentuhan pemain pada bola.</p>
    
    <h3>2. Passing Accuracy</h3>
    <p>Passing yang akurat adalah kunci komunikasi di lapangan. Drill ini mengajarkan pemain berbagai teknik passing termasuk short pass, long pass, dan ground pass. Presisi dan timing yang tepat adalah elemen penting yang kami tekankan.</p>
    
    <h3>3. Dribbling dan Ball Manipulation</h3>
    <p>Kemampuan dribbling yang baik memungkinkan pemain membawa bola melewati lawan. Kami melatih berbagai teknik dribbling dengan cone drills, slalom runs, dan 1v1 situations untuk meningkatkan kepercayaan diri pemain dengan bola.</p>
    
    <h3>4. Positioning dan Movement</h3>
    <p>Latihan ini mengajarkan pemain tentang penempatan posisi yang tepat dan gerakan off-the-ball. Pemahaman tentang ruang, waktu, dan positioning yang baik membedakan pemain yang berkualitas dari yang lainnya.</p>
    
    <h3>5. Fundamental Shooting</h3>
    <p>Shooting adalah aspek penting dari sepak bola. Kami melatih teknik shooting yang benar, termasuk power, accuracy, dan technique. Drill ini meningkatkan kepercayaan diri pemain untuk menyelesaikan peluang di lapangan.</p>
    
    <h3>Kesimpulan</h3>
    <p>Penguasaan lima latihan dasar ini adalah fondasi yang kuat untuk pengembangan pemain di masa depan. Dengan praktik yang konsisten dan bimbingan yang tepat, pemain kami akan terus berkembang menjadi pemain yang berkualitas tinggi.</p>
  `,
  "3": `
    <h2>Jadwal Open Trial Penerimaan Siswa Baru 2025/2026</h2>
    <p>SSB Ciketing Udik dengan bangga membuka kesempatan untuk calon siswa baru mengikuti open trial. Ini adalah waktu yang tepat untuk bergabung dengan akademi sepak bola terkemuka di Bekasi.</p>
    
    <h3>Pendaftaran Dibuka untuk Semua Kategori Usia</h3>
    <p>Kami membuka pendaftaran untuk berbagai kategori usia mulai dari U6 hingga U18. Setiap kategori usia memiliki program latihan yang disesuaikan dengan kebutuhan perkembangan pemain.</p>
    
    <h3>Jadwal Lengkap</h3>
    <p><strong>U6 - U8:</strong> Setiap Sabtu dan Minggu, 09:00 - 10:30 WIB</p>
    <p><strong>U9 - U12:</strong> Setiap Sabtu dan Minggu, 10:30 - 12:00 WIB dan 14:00 - 15:30 WIB</p>
    <p><strong>U13 - U16:</strong> Setiap Selasa, Kamis, dan Sabtu, 15:30 - 17:30 WIB</p>
    <p><strong>U17 - U18:</strong> Setiap Selasa, Kamis, dan Minggu, 18:00 - 20:00 WIB</p>
    
    <h3>Persyaratan Pendaftaran</h3>
    <ul>
      <li>Mengisi formulir pendaftaran</li>
      <li>Membawa fotokopi akte kelahiran atau KTP</li>
      <li>Membawa sepatu olahraga dan perlengkapan latihan</li>
      <li>Sertifikat vaksinasi (jika ada)</li>
    </ul>
    
    <h3>Tata Cara Pendaftaran</h3>
    <p>Pendaftaran dapat dilakukan secara online melalui website kami atau datang langsung ke kantor SSB Ciketing Udik. Biaya open trial adalah gratis, tanpa komitmen apapun. Peserta akan dinilai oleh pelatih profesional kami untuk menentukan penempatan yang tepat.</p>
    
    <h3>Apa yang Akan Dinilai</h3>
    <p>Selama open trial, tim kami akan mengevaluasi kemampuan teknis, atletik, mental, dan karakter pemain. Kami percaya bahwa sepak bola adalah alat untuk pengembangan karakter dan kepemimpinan.</p>
  `,
  "4": `
    <h2>Pentingnya Nutrisi untuk Performa Atlet Usia Dini</h2>
    <p>Nutrisi yang tepat adalah pilar penting untuk mendukung performa optimal anak-anak yang aktif berlatih sepak bola. Dalam artikel ini, Dr. Sari Putri, ahli gizi olahraga, memberikan panduan praktis untuk orang tua.</p>
    
    <h3>Kebutuhan Kalori yang Lebih Tinggi</h3>
    <p>Anak-anak yang aktif berlatih memiliki kebutuhan kalori yang lebih tinggi dibandingkan anak-anak sedentari. Penting untuk memberikan asupan nutrisi yang cukup untuk mendukung pertumbuhan dan aktivitas mereka.</p>
    
    <h3>Protein untuk Pemulihan Otot</h3>
    <p>Protein adalah nutrisi penting untuk pemulihan dan pembangunan otot setelah latihan. Sediakan sumber protein berkualitas tinggi seperti telur, daging tanpa lemak, ikan, dan produk susu untuk anak-anak Anda.</p>
    
    <h3>Karbohidrat Kompleks untuk Energi</h3>
    <p>Karbohidrat kompleks seperti nasi merah, roti gandum, dan oatmeal memberikan energi yang stabil dan berkelanjutan. Hindari karbohidrat sederhana yang memberikan energi cepat namun turun drastis.</p>
    
    <h3>Lemak Sehat dan Mineral</h3>
    <p>Lemak sehat dari avokad, kacang-kacangan, dan minyak zaitun penting untuk fungsi otak dan kesehatan jantung. Selain itu, pastikan asupan mineral seperti kalsium, zat besi, dan magnesium terpenuhi.</p>
    
    <h3>Hidrasi yang Cukup</h3>
    <p>Hidrasi adalah kunci performa atletik. Pastikan anak-anak minum air yang cukup sebelum, selama, dan setelah latihan. Untuk sesi latihan yang panjang, pertimbangkan minuman elektrolit untuk mengganti ion yang hilang melalui keringat.</p>
    
    <h3>Pola Makan yang Konsisten</h3>
    <p>Konsistensi adalah kunci. Jadwalkan makan yang teratur dengan snack sehat di antara waktu makan untuk memastikan anak-anak mendapatkan nutrisi yang tepat sepanjang hari.</p>
  `,
  "5": `
    <h2>Cerita di Balik Layar Persiapan Match-Day U16</h2>
    <p>Kemenangan di lapangan bukan hanya hasil dari kemampuan teknis semata. Ada kisah panjang di balik layar yang melibatkan persiapan mental, taktik, dan ritual yang dirancang dengan matang oleh Coach Adi dan timnya.</p>
    
    <h3>Persiapan Fisik</h3>
    <p>Minggu sebelum pertandingan, tim U16 menjalani program pelatihan intensif yang dirancang khusus. Focus pada stamina, kecepatan, dan kekuatan otot. Setiap latihan memiliki tujuan spesifik untuk mempersiapkan pemain menghadapi lawan.</p>
    
    <h3>Analisis Taktik dan Lawan</h3>
    <p>Coach Adi dan asisten pelatih menghabiskan waktu berjam-jam menganalisis video pertandingan lawan. Mereka mengidentifikasi kelemahan dan kekuatan tim lawan untuk merancang strategi yang efektif. Setiap pemain dibekali dengan pemahaman mendalam tentang peran mereka dalam pertandingan.</p>
    
    <h3>Persiapan Mental</h3>
    <p>Mental yang kuat adalah penentu kemenangan. Tim psikolog olahraga kami bekerja dengan pemain untuk membangun kepercayaan diri, fokus, dan resiliensi. Visualization dan meditation sessions menjadi bagian penting dari rutinitas.</p>
    
    <h3>Ritual Pra-Pertandingan</h3>
    <p>Sebelum pertandingan dimulai, tim memiliki ritual pra-pertandingan yang telah dikembangkan selama bertahun-tahun. Dari pemanasan khusus hingga ceramah motivasi dari pelatih, setiap detail dirancang untuk membuat pemain siap secara mental dan fisik.</p>
    
    <h3>Supportive Environment</h3>
    <p>Orang tua, keluarga, dan staff SSB memberikan suasana yang suportif dan positif. Keyakinan bahwa setiap pemain bisa memberikan yang terbaik adalah energi yang membuat tim semangat menghadapi tantangan.</p>
    
    <h3>Kesimpulan</h3>
    <p>Persiapan match-day yang sempurna adalah kombinasi dari perencanaan fisik, mental, taktik, dan spiritual. Ini menunjukkan komitmen kami dalam memberikan pendidikan olahraga yang holistik.</p>
  `,
  "6": `
    <h2>Workshop Orang Tua: Mendampingi Karier Sepak Bola Anak</h2>
    <p>SSB Ciketing Udik mengadakan workshop bulanan khusus untuk membantu orang tua memahami peran penting mereka dalam mendukung karier sepak bola anak-anak mereka. Workshop ini telah membantu ratusan keluarga menciptakan lingkungan yang mendukung perkembangan anak.</p>
    
    <h3>Peran Orang Tua dalam Pengembangan Anak</h3>
    <p>Orang tua bukan hanya penonton, tetapi partner penting dalam perjalanan anak menuju kesuksesan. Workshop ini membahas bagaimana orang tua dapat memberikan dukungan yang tepat tanpa tekanan yang berlebihan.</p>
    
    <h3>Mengelola Ekspektasi dan Tekanan</h3>
    <p>Salah satu tantangan terbesar adalah menyeimbangkan ekspektasi dengan kenyataan. Kami membantu orang tua memahami bahwa tidak setiap anak akan menjadi pemain profesional, namun semua anak dapat belajar nilai-nilai penting seperti disiplin, kerja sama, dan ketekunan.</p>
    
    <h3>Mendukung Kesehatan Mental Anak</h3>
    <p>Workshop membahas pentingnya kesehatan mental anak di samping kesehatan fisik. Kami berbagi strategi untuk membangun kepercayaan diri, mengatasi kegagalan, dan membangun resiliensi dalam menghadapi tantangan.</p>
    
    <h3>Nutrisi dan Gaya Hidup Sehat</h3>
    <p>Bagian penting dari workshop adalah diskusi tentang nutrisi yang tepat, istirahat yang cukup, dan gaya hidup sehat. Orang tua belajar bagaimana menciptakan lingkungan rumah yang mendukung gaya hidup atlet.</p>
    
    <h3>Komunikasi Efektif dengan Pelatih</h3>
    <p>Kami mengajarkan orang tua tentang pentingnya komunikasi dua arah dengan pelatih. Memahami program latihan, feedback dari pelatih, dan berkontribusi pada perkembangan anak secara konstruktif.</p>
    
    <h3>Membangun Karakter Melalui Olahraga</h3>
    <p>Yang terpenting, workshop menekankan bahwa sepak bola adalah alat untuk membangun karakter. Nilai-nilai seperti integritas, kerja sama tim, dan sportivitas adalah pencapaian terpenting yang dapat diraih anak melalui olahraga.</p>
  `,
};

export default function BlogArticle() {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = blogPosts.find((post) => post.id === id);
  const articleContent = articleContentMap[id || ""] || "";

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-display text-3xl font-bold">
            Artikel Tidak Ditemukan
          </h1>
          <p className="mb-8 text-muted-foreground">
            Maaf, artikel yang Anda cari tidak tersedia.
          </p>
          <Button asChild variant="outline">
            <a href="/blog">Kembali ke Blog</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader title={article.title} subtitle="Artikel Detail" />

      <article className="bg-background py-16 sm:py-24">
        <div className="container max-w-3xl">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-8 inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-background text-foreground"
              >
                {article.category}
              </span>
            </div>

            <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
              {article.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 border-b border-border pb-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
            </div>
          </div>

          {/* Article Image */}
          <div className="mb-12 overflow-hidden rounded-lg">
            <img
              src={article.cover}
              alt={article.title}
              className="h-96 w-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert max-w-none text-foreground"
            dangerouslySetInnerHTML={{ __html: articleContent }}
          />

          {/* Share & Back to Blog */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold text-muted-foreground">
                  Kembali ke daftar artikel
                </p>
              </div>
              <Button asChild variant="outline">
                <a href="/blog">Lihat Semua Artikel</a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
