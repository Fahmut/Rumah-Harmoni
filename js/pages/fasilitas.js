/* ===================================================================
   HALAMAN: FASILITAS (/fasilitas)
   =================================================================== */

const FACILITY_SPACES = [
  { icon: "ac", title: "Ruang Bermain Ber-AC", desc: "Luas, sejuk, dan tertata dengan area bermain edukatif.", foto: "images/fasilitas/ruang-bermain-ac.jpg" },
  { icon: "bed", title: "Area Tidur Siang", desc: "Kasur bersih dan nyaman, terpisah untuk bayi dan anak besar.", foto: "images/fasilitas/area-tidur-siang.jpg" },
  { icon: "kitchen", title: "Dapur & Area Makan", desc: "Dapur higienis untuk menyiapkan menu makan dan snack harian.", foto: "images/fasilitas/dapur-area-makan.jpg" },
  { icon: "bathroom", title: "Kamar Mandi Anak", desc: "Didesain ramah anak dengan perlengkapan ukuran sesuai usia.", foto: "images/fasilitas/kamar-mandi-anak.jpg" },
  { icon: "garden", title: "Taman Outdoor", desc: "Area bermain luar ruangan yang aman dan terawasi.", foto: "images/fasilitas/taman-outdoor.jpg" },
  { icon: "puzzle", title: "Ruang APE", desc: "Penyimpanan alat permainan edukatif yang tertata rapi.", foto: "images/fasilitas/ruang-ape.jpg" },
];

const SAFETY_ITEMS = [
  "CCTV terpasang di area-area utama, dengan akses rekaman yang dapat diberikan orang tua atas izin pengasuh",
  "Akses masuk-keluar terbatas, hanya untuk staf dan orang tua/wali yang terdaftar",
  "Kotak P3K tersedia untuk penanganan awal jika dibutuhkan",
  "Area bermain outdoor dilengkapi rumput sintetis, menciptakan permukaan yang lebih aman dan empuk saat anak berlari dan bermain",
  "Ruang belajar dilapisi matras puzzle, memberikan kenyamanan dan keamanan ekstra bagi anak saat duduk, merangkak, maupun bermain di lantai",
];

const APE_ITEMS = [
  "Alat Permainan Edukatif (APE) yang disesuaikan dengan kelompok usia, untuk mendukung tumbuh kembang anak secara optimal",
  "Media Montessori Sensorial, seperti balok susun berukuran (pink tower, cylinder blocks) dan alat cocok-tanam warna, untuk melatih kepekaan indera dan konsentrasi anak",
  "Media Montessori Practical Life, seperti alat menuang, menjepit, dan mengancing, untuk melatih kemandirian dan koordinasi motorik halus",
  "Buku cerita bergambar dan dongeng anak, menumbuhkan kecintaan membaca sejak dini",
  "Puzzle dan permainan motorik halus, melatih fokus, logika, dan kesabaran anak",
  "Perlengkapan seni: cat air, kertas warna, krayon, dan plastisin, untuk mengasah imajinasi dan ekspresi kreatif anak",
];

function renderFasilitas() {
  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Lingkungan yang Mendukung</div>
        <h1>Fasilitas Kami</h1>
        <p>Setiap ruang dirancang untuk kenyamanan, keamanan, dan tumbuh kembang anak Anda.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head fade-up">
          <div class="eyebrow">Ruang & Area</div>
          <h2>Fasilitas & Area Belajar Rumah Harmoni</h2>
          <p>Setiap sudut dirancang untuk mendukung tumbuh kembang anak — bukan sekadar tempat menitipkan, tapi ruang untuk bereksplorasi, belajar dengan gembira, dan membiasakan ibadah sejak dini.</p>
        </div>
        <div class="facility-grid">
          ${FACILITY_SPACES.map((f, i) => `
            <div class="facility-card fade-up" style="transition-delay:${i * 60}ms">
              <div class="facility-card-image"><img src="${f.foto || placeholderImg(f.title, i, 4, 3)}" alt="${f.title}" loading="lazy" /></div>
              <div class="facility-card-body">
                <h4>${f.title}</h4>
                <p>${f.desc}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container about-split">
        <div class="fade-up">
          <div class="eyebrow">Keamanan</div>
          <h2>Keamanan adalah prioritas utama kami</h2>
          <p>Demi mendukung keamanan pengasuhan yang optimal, Rumah Harmoni menghadirkan serangkaian fasilitas yang dirancang untuk melindungi anak di setiap aktivitasnya, sekaligus memberikan ketenangan bagi orang tua.</p>
          <div class="facility-list mt-1">
            ${SAFETY_ITEMS.map(item => `
              <div class="facility-list-item">
                <div class="check">${ICONS.check}</div>
                <p>${item}</p>
              </div>
            `).join("")}
          </div>
        </div>
        <img src="images/fasilitas/keamanan-cctv.jpg" alt="Sistem keamanan dan CCTV Rumah Harmoni Daycare" class="fade-up" loading="lazy" />
      </div>
    </section>

    <section class="section">
      <div class="container about-split">
        <img src="images/fasilitas/alat-permainan-edukatif.jpg" alt="Alat permainan edukatif dan buku cerita" class="fade-up" loading="lazy" />
        <div class="fade-up">
          <div class="eyebrow">MEDIA PEMBELAJARAN</div>
          <h2>Media Belajar yang MENSTIMULASI  Kreativitas DAN TUMBUH KEMBANG ANAK</h2>
          <p>Kami menyediakan berbagai alat dan media belajar edukatif yang dipilih sesuai tahap usia dan kebutuhan perkembangan anak, sehingga setiap kegiatan bermain sekaligus menjadi pengalaman belajar yang bermakna..</p>
          <div class="facility-list mt-1">
            ${APE_ITEMS.map(item => `
              <div class="facility-list-item">
                <div class="check">${ICONS.check}</div>
                <p>${item}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
