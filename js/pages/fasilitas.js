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
  "CCTV terpasang di seluruh area dengan akses live untuk orang tua",
  "Pagar pengaman di setiap pintu dan area bermain outdoor",
  "Kotak P3K lengkap dan pengasuh terlatih pertolongan pertama",
  "Lantai anti-licin dan sudut ruangan dilapisi pengaman",
  "Akses masuk-keluar terbatas hanya untuk staf dan orang tua terdaftar",
];

const APE_ITEMS = [
  "Alat Permainan Edukatif (APE) sesuai kelompok usia",
  "Buku cerita bergambar dan dongeng anak",
  "Puzzle dan permainan motorik halus",
  "Perlengkapan seni: cat air, kertas warna, krayon, plastisin",
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
          <h2>Ruang yang nyaman di setiap sudut</h2>
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
          <p>Kami memahami betapa berartinya rasa aman bagi orang tua yang menitipkan anaknya. Karena itu, setiap sudut fasilitas kami dilengkapi sistem pengamanan berlapis.</p>
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
          <div class="eyebrow">Alat & Media Belajar</div>
          <h2>Media belajar yang merangsang kreativitas</h2>
          <p>Kami menyediakan berbagai alat permainan edukatif yang dipilih sesuai usia, agar setiap kegiatan bermain juga menjadi kesempatan belajar.</p>
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
