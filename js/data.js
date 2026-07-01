/* ===================================================================
   DATA TERPUSAT — Rumah Harmoni Daycare
   Ubah nilai di sini untuk update nomor WA, alamat, dan konten utama
   di SELURUH halaman secara otomatis.
   =================================================================== */

const SITE = {
  nama: "Rumah Harmoni Daycare",
  kota: "Kediri",
  tagline: "Tempat anak bertumbuh dengan kasih, ilmu, dan nilai Islami",

  // GANTI nomor WhatsApp di sini (format: 62 tanpa tanda + atau 0 di depan)
  whatsapp: "6285143888368",
  waPesanDefault: "Assalamu'alaikum, saya ingin bertanya tentang Rumah Harmoni Daycare",

  alamat: "Jl.Ogan No.20,Desa Pelem Kec.Pare, Kab.Kediri (Belakang RSUD)",
  jamOperasional: "Senin – Sabtu, 07.00 – 17.00",
  instagram: "@harmoniciles",
  instagramUrl: "https://www.instagram.com/harmoniciles/",
  email: "halo@rumahharmonidaycare.id",

  // Ganti dengan link Google Maps embed asli nanti
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d581.511674262033!2d112.17628795749913!3d-7.763282622327253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e785c38708c6ab5%3A0xc08596f8ebd58e35!2sRumah%20Harmoni%2C%20Jl.%20Ogan%20No.20%2C%20Cangkring%2C%20Pelem%2C%20Kec.%20Pare%2C%20Kabupaten%20Kediri%2C%20Jawa%20Timur%2064213%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1782923118362!5m2!1sen!2sus",
  mapsLinkUrl: "https://maps.google.com/?q=Kediri",

  izinOperasional: "No. 503/IZIN-PAUD/2022/Disdik Kediri",
  sertifikatAkreditasi: "Terakreditasi B — Lembaga Penyelenggara PAUD Sejenis (Disdik Kota Kediri)",
};

function waLink(pesanKustom) {
  const pesan = encodeURIComponent(pesanKustom || SITE.waPesanDefault);
  return `https://wa.me/${SITE.whatsapp}?text=${pesan}`;
}

// ====================== PROGRAM & KEGIATAN ======================
const PROGRAMS = [
  {
    id: "stimulasi",
    kategori: "Stimulasi Tumbuh Kembang",
    ringkas: "Memantau setiap tonggak perkembangan anak lewat aktivitas yang terukur.",
    icon: "growth",
    color: "violet",
    kegiatan: [
      "Pemantauan milestone tumbuh kembang per usia",
      "Sensory play (permainan tekstur, warna, dan suara)",
      "Stimulasi bahasa & kognitif harian",
      "Laporan perkembangan bulanan untuk orang tua",
    ],
  },
  {
    id: "bermain-belajar",
    kategori: "Bermain & Belajar",
    ringkas: "Belajar lewat bermain — cara paling alami bagi anak usia dini menyerap ilmu.",
    icon: "play",
    color: "teal",
    kegiatan: [
      "Play-based learning terstruktur",
      "Pengenalan huruf & angka dengan media interaktif",
      "Storytelling dan dongeng harian",
      "Permainan edukatif kelompok & individu",
    ],
  },
  {
    id: "seni-kreativitas",
    kategori: "Seni & Kreativitas",
    ringkas: "Menumbuhkan imajinasi dan kemampuan motorik halus melalui karya seni.",
    icon: "art",
    color: "amber",
    kegiatan: [
      "Mewarnai dan menggambar bebas",
      "Finger painting",
      "Kolase dan kerajinan tangan",
      "Gerak dan lagu",
    ],
  },
  {
    id: "motorik-fisik",
    kategori: "Motorik & Fisik",
    ringkas: "Menjaga anak aktif dan sehat lewat aktivitas fisik yang terarah.",
    icon: "run",
    color: "coral",
    kegiatan: [
      "Senam pagi rutin",
      "Permainan outdoor terawasi",
      "Aktivitas bola",
      "Latihan lompat dan koordinasi tubuh",
    ],
  },
  {
    id: "karakter-agama",
    kategori: "Karakter & Agama",
    ringkas: "Menanamkan adab dan nilai Islami sejak usia dini secara bertahap dan menyenangkan.",
    icon: "star",
    color: "navy",
    kegiatan: [
      "Hafalan doa harian",
      "Sholat berjamaah (usia 4 tahun ke atas)",
      "Kisah-kisah nabi",
      "Pembiasaan adab (makan, salam, antre, berbagi)",
    ],
  },
  {
    id: "nutrisi-makan",
    kategori: "Nutrisi & Makan",
    ringkas: "Tumbuh kembang optimal dimulai dari asupan gizi yang terencana.",
    icon: "food",
    color: "teal",
    kegiatan: [
      "Menu bergizi seimbang 2x sehari",
      "Snack sehat ala jajanan pasar",
      "Edukasi makan mandiri sesuai usia",
      "Penyesuaian menu untuk alergi/pantangan (atas info orang tua)",
    ],
  },
];

// ====================== TESTIMONI ======================
const TESTIMONIALS_SHORT = [
  {
    nama: "Bu Ratna",
    anak: "Ibu dari Aisyah, 3 tahun",
    kutipan: "Anak saya makin percaya diri dan hafal banyak doa sejak di sini. Laporan hariannya juga detail.",
    rating: 5,
  },
  {
    nama: "Bu Dewi",
    anak: "Ibu dari Hanif, 2 tahun",
    kutipan: "Pengasuhnya sabar dan komunikatif. Saya tenang kerja karena bisa pantau lewat CCTV kapan saja.",
    rating: 5,
  },
  {
    nama: "Bu Sinta",
    anak: "Ibu dari Zahra, 4 tahun",
    kutipan: "Suka sekali dengan kegiatan seninya. Hasil karyanya selalu dibawa pulang dan ceritanya panjang sekali.",
    rating: 5,
  },
];

const TESTIMONIALS_FULL = [
  ...TESTIMONIALS_SHORT.map(t => ({
    ...t,
    aspek: { kebersihan: 5, pengasuhan: 5, komunikasi: 5, fasilitas: 4 },
    tanggal: "Maret 2026",
  })),
  
];

// ====================== BLOG PARENTING ======================
const BLOG_POSTS = [
  {
    id: "pola-asuh-positif",
    kategori: "Pola Asuh",
    judul: "5 Cara Menerapkan Pola Asuh Positif Tanpa Bentakan",
    ringkas: "Disiplin tidak harus dengan suara keras. Berikut pendekatan lembut yang tetap efektif untuk anak usia dini.",
    tanggal: "12 Mei 2026",
    konten: [
      "Banyak orang tua merasa membentak adalah satu-satunya cara agar anak menurut dengan cepat. Padahal, penelitian tumbuh kembang menunjukkan bahwa pendekatan yang konsisten dan tenang justru membentuk kedisiplinan yang lebih tahan lama, tanpa membuat anak takut atau menutup diri.",
      "1. Beri instruksi yang jelas dan spesifik. Daripada berkata \"jangan nakal\", katakan dengan jelas apa yang Anda inginkan, misalnya \"tolong rapikan mainan dulu sebelum makan\".",
      "2. Tetapkan konsekuensi yang masuk akal, bukan hukuman emosional. Konsekuensi sebaiknya berkaitan langsung dengan perilaku, misalnya mainan yang tidak dirapikan akan disimpan sementara.",
      "3. Validasi perasaan anak sebelum mengoreksi perilaku. Anak yang merasa didengar lebih mudah diarahkan dibandingkan anak yang merasa hanya dimarahi.",
      "4. Konsisten antara satu situasi dengan situasi lain. Aturan yang berubah-ubah membuat anak bingung dan justru lebih sering menguji batasan.",
      "5. Beri pujian spesifik saat anak berhasil mengikuti arahan, bukan sekadar \"anak baik\", tapi \"terima kasih sudah merapikan mainan tanpa diminta dua kali\".",
      "Pola asuh positif membutuhkan konsistensi dan kesabaran, namun hasilnya adalah anak yang memahami alasan di balik aturan, bukan sekadar takut pada amarah orang tua.",
    ],
  },
  {
    id: "milestone-0-6",
    kategori: "Tumbuh Kembang",
    judul: "Tonggak Tumbuh Kembang Anak Usia 0–6 Tahun yang Perlu Dipantau",
    ringkas: "Kenali tanda-tanda perkembangan motorik, bahasa, dan sosial anak di setiap fase usianya.",
    tanggal: "28 April 2026",
    konten: [
      "Setiap anak berkembang dengan kecepatannya sendiri, namun ada beberapa tonggak (milestone) umum yang bisa menjadi acuan orang tua untuk memantau perkembangan anak di tahun-tahun awal.",
      "Usia 0–1 tahun: bayi mulai mengangkat kepala, merespons suara, tersenyum sosial, lalu merangkak dan berusaha berdiri menjelang usia satu tahun.",
      "Usia 1–2 tahun: anak mulai berjalan, mengucapkan beberapa kata sederhana, dan menunjukkan rasa ingin tahu yang besar terhadap lingkungan sekitarnya.",
      "Usia 2–3 tahun: kemampuan bicara berkembang pesat, anak mulai menyusun kalimat pendek, dan mulai menunjukkan keinginan untuk mandiri seperti makan sendiri.",
      "Usia 3–4 tahun: anak mulai bermain secara kooperatif dengan teman sebaya, mengenal warna dan bentuk dasar, serta mampu mengikuti instruksi dua langkah.",
      "Usia 4–6 tahun: kemampuan motorik halus semakin matang (menggambar, menggunting), anak mulai memahami aturan sosial sederhana, dan siap untuk pembelajaran pra-membaca.",
      "Jika anak menunjukkan keterlambatan signifikan di beberapa area sekaligus, ada baiknya berkonsultasi dengan dokter anak atau tenaga profesional tumbuh kembang untuk evaluasi lebih lanjut.",
    ],
  },
  {
    id: "resep-mpasi",
    kategori: "Resep MPASI",
    judul: "3 Resep MPASI Bergizi yang Disukai Bayi 6–12 Bulan",
    ringkas: "Resep sederhana, bahan mudah didapat, dan tetap memenuhi kebutuhan gizi harian bayi.",
    tanggal: "15 April 2026",
    konten: [
      "Memasuki usia 6 bulan, bayi mulai membutuhkan asupan tambahan selain ASI atau susu formula. Berikut tiga resep MPASI yang mudah dibuat di rumah dengan bahan-bahan sederhana.",
      "1. Bubur Bayam Hati Ayam — rebus hati ayam hingga matang, haluskan bersama bayam yang sudah dikukus, campurkan dengan bubur beras. Kaya zat besi untuk mendukung pertumbuhan sel darah.",
      "2. Puree Labu Kuning Kentang — kukus labu kuning dan kentang hingga lunak, haluskan bersama sedikit ASI atau susu formula. Teksturnya lembut dan rasanya manis alami, biasanya disukai bayi.",
      "3. Bubur Ikan Tuna Brokoli — kukus brokoli dan ikan tuna segar, haluskan bersama bubur beras dan sedikit minyak zaitun. Sumber omega-3 yang baik untuk perkembangan otak.",
      "Selalu perkenalkan satu jenis makanan baru terlebih dahulu selama 2–3 hari untuk memantau reaksi alergi sebelum mengombinasikan dengan bahan lain.",
      "Tekstur MPASI disesuaikan dengan usia: di awal usia 6 bulan, tekstur sebaiknya halus seperti puree, kemudian secara bertahap dinaikkan kekentalannya seiring bertambahnya usia dan kemampuan mengunyah bayi.",
    ],
  },
  {
    id: "kegiatan-rumah",
    kategori: "Kegiatan di Rumah",
    judul: "10 Kegiatan Sederhana di Rumah untuk Stimulasi Anak",
    ringkas: "Tidak perlu mainan mahal — barang-barang rumah tangga bisa jadi media belajar yang seru.",
    tanggal: "2 April 2026",
    konten: [
      "Stimulasi tumbuh kembang anak tidak selalu memerlukan mainan edukatif yang mahal. Berikut beberapa kegiatan sederhana yang bisa dilakukan dengan barang-barang yang sudah ada di rumah.",
      "1. Sortir warna — kumpulkan benda-benda rumah dengan warna berbeda, minta anak mengelompokkannya berdasarkan warna.",
      "2. Mencari harta karun sederhana — sembunyikan beberapa mainan kecil di sekitar ruangan dan minta anak menemukannya.",
      "3. Bermain peran dengan dapur mainan atau alat dapur asli yang aman, melatih imajinasi dan bahasa.",
      "4. Menyusun menara dari kardus bekas atau kotak susu, melatih motorik halus dan kesabaran.",
      "5. Mendengarkan dan menebak suara benda sehari-hari yang direkam atau dibuat langsung.",
      "6. Melukis dengan jari menggunakan pewarna makanan alami yang aman untuk kulit anak.",
      "7. Bermain pasir atau beras dalam baskom untuk stimulasi sensori.",
      "8. Membuat kolase dari potongan koran atau majalah bekas.",
      "9. Bernyanyi dan menari bersama untuk melatih koordinasi dan kepercayaan diri.",
      "10. Membaca buku bergambar sambil menunjuk dan menyebutkan nama benda di setiap halaman.",
      "Kunci dari semua kegiatan ini adalah keterlibatan orang tua secara aktif — bukan sekadar menyediakan alat, tapi ikut bermain dan merespons reaksi anak.",
    ],
  },
  {
    id: "faq-penitipan",
    kategori: "FAQ",
    judul: "Tanya Jawab Seputar Penitipan Anak yang Sering Ditanyakan Orang Tua",
    ringkas: "Mulai dari adaptasi awal hingga keamanan — kami jawab pertanyaan yang paling sering masuk.",
    tanggal: "20 Maret 2026",
    konten: [
      "Berikut adalah pertanyaan-pertanyaan yang paling sering kami terima dari orang tua yang baru pertama kali ingin menitipkan anaknya di daycare.",
      "Apakah anak akan menangis terus selama di daycare? Pada minggu-minggu awal, sebagian anak memang mengalami masa adaptasi dan mungkin menangis saat ditinggal. Pengasuh kami terlatih untuk mendampingi proses ini dengan pendekatan yang lembut dan bertahap.",
      "Bagaimana saya bisa memantau kondisi anak selama di daycare? Kami menyediakan akses CCTV langsung yang bisa diakses orang tua, serta laporan harian tertulis mengenai aktivitas, makan, dan kondisi anak.",
      "Apakah bisa menitipkan anak dengan kondisi alergi tertentu? Tentu, sampaikan informasi alergi atau pantangan makanan saat pendaftaran agar kami bisa menyesuaikan menu dan pengawasan khusus.",
      "Bagaimana jika anak sakit saat di daycare? Kami memiliki prosedur P3K dasar dan akan segera menghubungi orang tua jika anak menunjukkan gejala sakit yang memerlukan penanganan lebih lanjut.",
      "Apakah ada batasan usia minimal untuk dititipkan? Kami menerima anak mulai usia tertentu sesuai kebijakan masing-masing program — silakan tanyakan detail usia yang sesuai dengan kebutuhan Anda melalui WhatsApp.",
      "Jika pertanyaan Anda belum terjawab di sini, jangan ragu untuk menghubungi kami langsung melalui WhatsApp, tim kami akan dengan senang hati membantu.",
    ],
  },
  {
    id: "ciri-daycare-baik",
    kategori: "Tips Memilih",
    judul: "6 Ciri Daycare Berkualitas yang Wajib Dicek Sebelum Mendaftar",
    ringkas: "Dari rasio pengasuh hingga kurikulum — ini panduan praktis sebelum memutuskan tempat penitipan anak.",
    tanggal: "5 Maret 2026",
    konten: [
      "Memilih tempat penitipan anak bukan keputusan yang bisa diambil sembarangan. Berikut enam hal penting yang sebaiknya dicek sebelum mendaftarkan anak ke sebuah daycare.",
      "1. Rasio pengasuh dan anak — semakin kecil rasionya (misalnya 1 pengasuh untuk 4-5 anak), semakin terjamin perhatian individual yang diterima anak.",
      "2. Kualifikasi dan sertifikasi pengasuh — pastikan pengasuh memiliki pelatihan dasar PAUD dan pertolongan pertama (P3K).",
      "3. Standar kebersihan dan keamanan fasilitas — perhatikan kebersihan ruangan, ketersediaan pagar pengaman, dan sistem pengawasan seperti CCTV.",
      "4. Transparansi komunikasi — daycare yang baik akan memberikan laporan rutin mengenai aktivitas dan perkembangan anak, bukan hanya saat ditanya.",
      "5. Kurikulum dan program stimulasi yang terstruktur — bukan sekadar 'penitipan', tapi ada program belajar dan bermain yang mendukung tumbuh kembang anak.",
      "6. Legalitas dan izin operasional — pastikan lembaga memiliki izin resmi dari dinas terkait sebagai bentuk akuntabilitas dan standar pelayanan.",
      "Jangan ragu untuk melakukan kunjungan langsung sebelum mendaftar, perhatikan suasana, kebersihan, dan interaksi pengasuh dengan anak-anak yang sudah ada di sana.",
    ],
  },
];

// ====================== GALERI ======================
const GALLERY_CATEGORIES = ["Semua", "Kegiatan Harian", "Fasilitas", "Event"];

const GALLERY_ITEMS = [
  { kategori: "Kegiatan Harian", judul: "Sesi storytelling pagi", foto: "images/galeri/storytelling-pagi.jpg" },
  { kategori: "Kegiatan Harian", judul: "Finger painting bersama", foto: "images/galeri/finger-painting.jpg" },
  { kategori: "Fasilitas", judul: "Ruang bermain ber-AC", foto: "images/galeri/ruang-bermain-ac.jpg" },
  { kategori: "Kegiatan Harian", judul: "Senam pagi ceria", foto: "images/galeri/senam-pagi.jpg" },
  { kategori: "Event", judul: "Peringatan Maulid Nabi", foto: "images/galeri/maulid-nabi.jpg" },
  { kategori: "Fasilitas", judul: "Taman outdoor", foto: "images/galeri/taman-outdoor.jpg" },
  { kategori: "Kegiatan Harian", judul: "Belajar mengenal huruf", foto: "images/galeri/belajar-huruf.jpg" },
  { kategori: "Fasilitas", judul: "Area makan anak", foto: "images/galeri/area-makan.jpg" },
  { kategori: "Event", judul: "Hari libur tematik", foto: "images/galeri/hari-libur-tematik.jpg" },
  { kategori: "Kegiatan Harian", judul: "Sholat berjamaah", foto: "images/galeri/sholat-berjamaah.jpg" },
  { kategori: "Fasilitas", judul: "Ruang tidur siang", foto: "images/galeri/ruang-tidur-siang.jpg" },
  { kategori: "Kegiatan Harian", judul: "Bermain bola di taman", foto: "images/galeri/main-bola-taman.jpg" },
];

// ====================== PENGASUH ======================
const CAREGIVERS = [
  { nama: "Miss Muntaz", peran: "Pengasuh", deskripsi: "pendidikan Terakhir: S1 IAIH Pare Pernah mengajar di RA sejak tahun 2019 dan senang dunia anak².", foto: "images/tentang-kami/pengasuh/muntaz.jpg" },
  { nama: "Miss Ayla", peran: "Pengasuh", deskripsi: "Pendidikan Terakhir : S1 STAI Hidayatut Thullab Kediri.", foto: "images/tentang-kami/pengasuh/ayla.jpg" },
  { nama: "Miss Tia", peran: "Pengasuh", deskripsi: "Pendidikan terakhir : S1 UIN Syekh Wasil Kediri Telah mendampingi Individu Berkebutuhan Khusus sejak tahun 2022 dan mencintai dunia anak anak.", foto: "images/tentang-kami/pengasuh/tia.jpg" },
  { nama: "Miss Ulul", peran: "Pengasuh", deskripsi: "Pendidikan terakhir S1 IAI Hasanuddin pare Pernah mengajar di RA Alistiqomah thn 2020 senang dunia anak anak.", foto: "images/tentang-kami/pengasuh/ulul.jpg" },
  { nama: "Miss Shinfani", peran: "Pengasuh", deskripsi: "- S1 UIN Syekh Wasil Kediri <br> - S2 Magister Psikologi Profesi Universitas Muhammadiyah Malang.", foto: "images/tentang-kami/pengasuh/shinfani.jpg" },
];
