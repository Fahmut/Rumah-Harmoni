/* ===================================================================
   HALAMAN: TENTANG KAMI (/tentang-kami)
   =================================================================== */

const VALUES = [
  { icon: "islamic", color: "navy", title: "Tauhid & Akhlak", desc: "Menanamkan kecintaan pada Allah dan akhlak mulia sejak usia dini." },
  { icon: "caregiver", color: "violet", title: "Kasih Sayang", desc: "Setiap anak diasuh dengan kelembutan, seolah bagian dari keluarga sendiri." },
  { icon: "growth", color: "teal", title: "Tumbuh Bersama", desc: "Perkembangan anak dipantau dan distimulasi secara individual." },
  { icon: "shield", color: "amber", title: "Aman & Terpercaya", desc: "Keamanan dan kenyamanan anak adalah prioritas tertinggi kami." },
];

function renderTentangKami() {
  const aboutImg = "images/tentang-kami/sejarah-kami.jpg";

  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Mengenal Kami Lebih Dekat</div>
        <h1>Tentang Rumah Harmoni Daycare</h1>
        <p>Perjalanan kami menjaga dan menumbuhkan generasi yang berakhlak, sejak tahun pertama berdiri di ${SITE.kota}.</p>
      </div>
    </section>

    <section class="section">
      <div class="container about-split">
        <img src="${aboutImg}" alt="Sejarah berdirinya Rumah Harmoni Daycare" class="fade-up" />
        <div class="fade-up">
          <div class="eyebrow">Sejarah Kami</div>
          <h2>Berawal dari kebutuhan keluarga muda di ${SITE.kota}</h2>
          <p>Rumah Harmoni Daycare didirikan atas kegelisahan para orang tua bekerja yang sulit menemukan tempat penitipan anak yang aman, bersih, dan sejalan dengan nilai-nilai Islami. Berawal dari satu ruang kecil dengan beberapa anak titipan tetangga, kami bertumbuh menjadi rumah kedua bagi puluhan keluarga di ${SITE.kota}.</p>
          <p class="mt-1">Hingga kini, kami terus berkomitmen menghadirkan pengasuhan yang hangat, terstruktur, dan berlandaskan adab — agar orang tua tenang bekerja, dan anak tetap tumbuh dalam kasih sayang.</p>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Visi & Misi</div>
          <h2>Nilai yang kami pegang dalam setiap pengasuhan</h2>
        </div>
        <div class="card fade-up" style="max-width:760px;margin:0 auto 48px;text-align:center">
          <h4 style="margin-bottom:10px">Visi</h4>
          <p style="margin-bottom:24px">Menjadi daycare terpercaya di ${SITE.kota} yang melahirkan generasi cerdas, mandiri, dan berakhlak Islami.</p>
          <h4 style="margin-bottom:10px">Misi</h4>
          <p>Memberikan pengasuhan berkualitas melalui stimulasi tumbuh kembang yang terencana, lingkungan yang aman dan nyaman, serta pembiasaan nilai-nilai Islami dalam keseharian anak.</p>
        </div>
        <div class="feature-grid">
          ${VALUES.map((v, i) => `
            <div class="feature-card fade-up" style="transition-delay:${i * 60}ms">
              ${iconCircleByColor(v.icon, v.color)}
              <h4>${v.title}</h4>
              <p>${v.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Tim Kami</div>
          <h2>Pengasuh berpengalaman & bersertifikat</h2>
        </div>
        <div class="caregiver-grid">
          ${CAREGIVERS.map((c, i) => `
            <div class="caregiver-card fade-up" style="transition-delay:${i * 80}ms">
              <div class="caregiver-photo"><img src="${c.foto}" onerror="this.onerror=null;this.src='${placeholderImg(c.nama.split(',')[0], i + 1, 1, 1)}'" alt="${c.nama}" loading="lazy" /></div>
              <div class="caregiver-body">
                <h4>${c.nama}</h4>
                <div class="caregiver-role">${c.peran}</div>
                <p>${c.deskripsi}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head fade-up">
          <div class="eyebrow">Legalitas</div>
          <h2>Izin operasional & akreditasi</h2>
        </div>
        <div class="license-row fade-up">
          <div class="license-badge">
            ${iconCircleByColor("document", "teal")}
            <div><strong>Izin Operasional</strong><span>${SITE.izinOperasional}</span></div>
          </div>
          <div class="license-badge">
            ${iconCircleByColor("star", "amber")}
            <div><strong>Akreditasi</strong><span>${SITE.sertifikatAkreditasi}</span></div>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
