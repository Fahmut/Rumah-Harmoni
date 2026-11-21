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
          ${PROGRAMS.map((p, i) => {
            const fotos = (p.foto && p.foto.length ? p.foto : [null]);
            return `
            <div class="program-detail-card fade-up" style="transition-delay:${i * 60}ms">
              <div class="program-detail-icon program-slider" data-program-slider="${i}" style="background:${COLOR_MAP[p.color].bg}">
                ${fotos.map((foto, fi) => `
                  <div class="program-slide ${fi === 0 ? "active" : ""}">
                    <img src="${foto || placeholderImg(p.kategori, i, 4, 3)}" alt="${p.kategori}" loading="lazy" />
                  </div>
                `).join("")}
                ${fotos.length > 1 ? `
                  <div class="program-slider-dots">
                    ${fotos.map((_, fi) => `<button type="button" class="program-slider-dot ${fi === 0 ? "active" : ""}" data-dot="${fi}" aria-label="Foto ${fi + 1}"></button>`).join("")}
                  </div>
                ` : ""}
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
          `;
          }).join("")}
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

function initProgram() {
  document.querySelectorAll(".program-slider").forEach((slider) => {
    const slides = slider.querySelectorAll(".program-slide");
    const dots = slider.querySelectorAll(".program-slider-dot");
    if (slides.length <= 1) return;

    let current = 0;
    let timer = null;

    function goTo(index) {
      slides[current].classList.remove("active");
      dots[current] && dots[current].classList.remove("active");
      current = (index + slides.length) % slides.length;
      slides[current].classList.add("active");
      dots[current] && dots[current].classList.add("active");
    }

    function next() { goTo(current + 1); }

    function startAutoSlide() {
      stopAutoSlide();
      timer = setInterval(next, 4000);
    }
    function stopAutoSlide() {
      if (timer) clearInterval(timer);
    }

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        goTo(i);
        startAutoSlide(); // reset timer setelah interaksi manual
      });
    });

    // Jeda auto-slide saat foto disentuh/hover, lanjut lagi saat dilepas
    slider.addEventListener("mouseenter", stopAutoSlide);
    slider.addEventListener("mouseleave", startAutoSlide);

    startAutoSlide();
  });
}
