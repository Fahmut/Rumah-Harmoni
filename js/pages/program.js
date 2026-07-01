/* ===================================================================
   HALAMAN: PROGRAM & KEGIATAN (/program) — halaman terpenting
   =================================================================== */

function renderProgram() {
  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Kurikulum Harian</div>
        <h1>Program & Kegiatan</h1>
        <p>Enam kategori kegiatan yang dirancang menyentuh setiap aspek tumbuh kembang anak — fisik, kognitif, sosial, dan spiritual.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="program-detail-grid">
          ${PROGRAMS.map((p, i) => `
            <div class="program-detail-card fade-up" style="transition-delay:${i * 60}ms">
              <div class="program-detail-icon" style="background:${COLOR_MAP[p.color].bg}">
                <div style="color:${COLOR_MAP[p.color].fg}">${ICONS[p.icon]}</div>
              </div>
              <div class="program-detail-body">
                <span class="program-tag">Kategori ${i + 1}</span>
                <h3>${p.kategori}</h3>
                <p>${p.ringkas}</p>
                <div class="program-detail-list">
                  ${p.kegiatan.map(k => `<span class="pill-tag">${k}</span>`).join("")}
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <section class="section section-navy">
      <div class="hero-glow"></div>
      <div class="container" style="position:relative;z-index:2">
        <div class="cta-band fade-up" style="background:var(--white)">
          <div>
            <h3 style="color:var(--navy)">Ingin tahu lebih lanjut soal kurikulum kami?</h3>
            <p style="color:var(--ink-soft)">Tim kami siap menjelaskan detail setiap program dan menjawab pertanyaan Anda.</p>
          </div>
          <div class="cta-band-actions">
            <a href="${waLink('Assalamu\'alaikum, saya ingin tahu lebih lanjut tentang program & kegiatan di Rumah Harmoni Daycare')}" target="_blank" rel="noopener" class="btn btn-whatsapp">${ICONS.whatsapp}<span>Tanya via WhatsApp</span></a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}
