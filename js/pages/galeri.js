/* ===================================================================
   HALAMAN: GALERI (/galeri)
   =================================================================== */

function renderGaleri() {
  const filterBtns = GALLERY_CATEGORIES.map(cat => `
    <button class="filter-btn ${cat === "Semua" ? "active" : ""}" data-filter="${cat}">${cat}</button>
  `).join("");

  const items = GALLERY_ITEMS.map((item, i) => `
    <div class="gallery-item fade-up" data-category="${item.kategori}" style="transition-delay:${(i % 4) * 60}ms">
      <img src="${item.foto || placeholderImg(item.judul, i, 1, 1)}" alt="${item.judul}" loading="lazy" />
      <div class="gallery-item-overlay"><span>${item.judul}</span></div>
    </div>
  `).join("");

  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Momen Keseharian</div>
        <h1>Galeri Kegiatan</h1>
        <p>Lihat keseruan kegiatan harian, fasilitas, dan momen spesial anak-anak di Rumah Harmoni Daycare.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="filter-row fade-up">${filterBtns}</div>
        <div class="gallery-grid" id="gallery-grid">${items}</div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Video Profil</div>
          <h2>Kenali Rumah Harmoni lebih dekat</h2>
        </div>
        <div class="card fade-up" style="max-width:760px;margin:0 auto;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;background:var(--midnight)">
          <p style="color:rgba(255,255,255,0.6);text-align:center">Video profil singkat akan ditampilkan di sini.<br><span style="font-size:0.82rem">(Unggah video melalui pengaturan galeri)</span></p>
        </div>
      </div>
    </section>
  </main>`;
}

function initGaleri() {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".gallery-item");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;

      items.forEach(item => {
        if (filter === "Semua" || item.dataset.category === filter) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}
