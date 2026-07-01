/* ===================================================================
   HALAMAN: TESTIMONI (/testimoni)
   =================================================================== */

function renderTestimoni() {
  const allTesti = getCombinedTestimonials();
  const avgRating = (allTesti.reduce((a, t) => a + t.rating, 0) / allTesti.length).toFixed(1);

  const aspekKeys = { kebersihan: "Kebersihan", pengasuhan: "Pengasuhan", komunikasi: "Komunikasi", fasilitas: "Fasilitas" };
  const aspekAvg = {};
  Object.keys(aspekKeys).forEach(key => {
    aspekAvg[key] = (allTesti.reduce((a, t) => a + t.aspek[key], 0) / allTesti.length).toFixed(1);
  });

  const cards = allTesti.map((t, i) => `
    <div class="testi-card fade-up" style="transition-delay:${(i % 3) * 70}ms">
      <div class="testi-stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="testi-quote">"${t.kutipan}"</p>
      <div class="testi-person">
        <div class="testi-avatar">${t.nama.charAt(0)}</div>
        <div><strong>${t.nama}</strong><span>${t.anak} · ${t.tanggal}</span></div>
      </div>
    </div>
  `).join("");

  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Kepercayaan Orang Tua</div>
        <h1>Testimoni Orang Tua</h1>
        <p>Ulasan jujur dari keluarga yang telah menitipkan anaknya di Rumah Harmoni Daycare.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="rating-overview fade-up">
          <div class="rating-score">
            <div class="big-number">${avgRating}</div>
            <div class="stars">★★★★★</div>
            <p>Berdasarkan ${allTesti.length} ulasan orang tua</p>
          </div>
          <div class="rating-bars">
            ${Object.entries(aspekKeys).map(([key, label]) => `
              <div class="rating-bar-row">
                <span>${label}</span>
                <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${(aspekAvg[key] / 5) * 100}%"></div></div>
                <span>${aspekAvg[key]}/5</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="testi-grid">${cards}</div>

        <div class="text-center mt-2 fade-up">
          <p style="margin-bottom:16px">Lihat lebih banyak ulasan asli dari orang tua kami di Google Review, atau bagikan pengalaman Anda sendiri.</p>
          <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
            <a href="${SITE.mapsLinkUrl}" target="_blank" rel="noopener" class="btn btn-outline">Lihat Google Review</a>
            <a href="#/" class="btn btn-primary">Tulis Testimoni Anda</a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
