/* ===================================================================
   HALAMAN: BERANDA  (/)
   =================================================================== */

const FEATURES = [
  { icon: "cctv", color: "violet", title: "CCTV Live Akses", desc: "Pantau aktivitas anak kapan saja lewat akses live untuk orang tua." },
  { icon: "ac", color: "teal", title: "Ruang Ber-AC", desc: "Ruang bermain dan istirahat sejuk, nyaman sepanjang hari." },
  { icon: "caregiver", color: "amber", title: "Pengasuh Bersertifikat", desc: "Didampingi pengasuh terlatih dengan sertifikasi PAUD & P3K." },
  { icon: "nutrition", color: "coral", title: "Gizi Terencana", desc: "Menu makan dan snack disusun mengikuti kebutuhan gizi anak." },
  { icon: "report", color: "violet", title: "Laporan Harian", desc: "Update kegiatan dan kondisi anak dikirim setiap hari." },
  { icon: "islamic", color: "navy", title: "Berbasis Nilai Islami", desc: "Pembiasaan adab, doa, dan kisah nabi dalam keseharian." },
];

function renderBeranda() {
  const heroImg = "images/beranda/hero.jpg";
  const programImgs = ["images/beranda/program-1.jpg", "images/beranda/program-2.jpg", "images/beranda/program-3.jpg"];

  return `
  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">Daycare Berbasis Nilai Islami · ${SITE.kota}</div>
          <h1>${SITE.tagline}</h1>
          <p>Rumah Harmoni Daycare menjaga, mendampingi, dan menstimulasi tumbuh kembang anak Anda setiap hari — dengan pengasuh bersertifikat, lingkungan aman berkamera, dan kegiatan yang terencana.</p>
          <div class="hero-actions">
            <a href="#/kontak" class="btn btn-primary">Daftar Sekarang</a>
            <a href="${waLink()}" target="_blank" rel="noopener" class="btn btn-whatsapp">${ICONS.whatsapp}<span>Hubungi WA</span></a>
          </div>
          <div class="hero-trust">
            <div class="hero-trust-item"><strong>8+</strong>Tahun melayani keluarga di ${SITE.kota}</div>
            <div class="hero-trust-item"><strong>150+</strong>Anak telah dititipkan</div>
            <div class="hero-trust-item"><strong>1:4</strong>Rasio pengasuh & anak</div>
          </div>
        </div>
        <div class="hero-visual fade-up">
          <img src="${heroImg}" alt="Suasana kegiatan anak-anak di Rumah Harmoni Daycare" />
          <div class="hero-badge">
            ${iconCircleByColor("shield", "teal")}
            <div>
              <strong>Lingkungan Terpantau</strong>
              <span>CCTV aktif di seluruh area, pagar pengaman penuh</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MINI FORM -->
    <section class="section-tight">
      <div class="container">
        <div class="mini-form-card fade-up">
          <div class="form-copy">
            <h3>Tertarik menitipkan anak Anda?</h3>
            <p>Tinggalkan nama dan nomor WhatsApp Anda. Tim kami akan menghubungi untuk menjelaskan program dan jadwal kunjungan.</p>
          </div>
          <form class="mini-form" id="mini-form">
            <input type="text" id="mf-nama" placeholder="Nama lengkap" required />
            <input type="tel" id="mf-wa" placeholder="Nomor WhatsApp (contoh: 081234567890)" required />
            <button type="submit" class="btn btn-primary">Kirim & Lanjut ke WhatsApp</button>
            <p class="form-note">Pesan akan dikirim langsung ke WhatsApp kami, tanpa biaya apa pun.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- KEUNGGULAN -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Mengapa Rumah Harmoni</div>
          <h2>Keunggulan yang kami jaga setiap hari</h2>
        </div>
        <div class="feature-grid">
          ${FEATURES.map((f, i) => `
            <div class="feature-card fade-up" style="transition-delay:${i * 60}ms">
              ${iconCircleByColor(f.icon, f.color)}
              <h4>${f.title}</h4>
              <p>${f.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- PROGRAM UNGGULAN -->
    <section class="section">
      <div class="container">
        <div class="section-head fade-up">
          <div class="eyebrow">Program Unggulan</div>
          <h2>Kegiatan yang menstimulasi setiap aspek tumbuh kembang</h2>
        </div>
        <div class="program-grid">
          ${PROGRAMS.slice(0, 3).map((p, i) => `
            <div class="program-card fade-up" style="transition-delay:${i * 80}ms">
              <div class="program-image"><img src="${programImgs[i]}" alt="${p.kategori}" /></div>
              <div class="program-card-body">
                <span class="program-tag">${p.kategori}</span>
                <h4>${p.ringkas}</h4>
                <a href="#/program" class="program-link">Lihat detail program</a>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="text-center mt-2">
          <a href="#/program" class="btn btn-outline">Lihat Semua Program</a>
        </div>
      </div>
    </section>

    <!-- TESTIMONI -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Kata Orang Tua</div>
          <h2>Dipercaya oleh keluarga di ${SITE.kota}</h2>
        </div>
        <div class="testi-grid" id="beranda-testi-grid">
          ${getCombinedTestimonialsShort(3).map((t, i) => `
            <div class="testi-card fade-up" style="transition-delay:${i * 80}ms">
              <div class="testi-stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
              <p class="testi-quote">"${t.kutipan}"</p>
              <div class="testi-person">
                <div class="testi-avatar">${t.nama.charAt(0)}</div>
                <div><strong>${t.nama}</strong><span>${t.anak}</span></div>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="text-center mt-2">
          <a href="#/testimoni" class="btn btn-outline">Baca Semua Testimoni</a>
        </div>
      </div>
    </section>

    <!-- FORM TESTIMONI -->
    <section class="section">
      <div class="container">
        <div class="card fade-up" style="max-width:640px;margin:0 auto" id="testi-form-wrap">
          <div class="eyebrow" style="justify-content:center">Sudah Pernah Menitipkan di Sini?</div>
          <h3 class="text-center" style="margin-bottom:8px">Bagikan Pengalaman Anda</h3>
          <p class="text-center" style="margin-bottom:28px">Testimoni Anda akan kami tinjau terlebih dahulu sebelum ditampilkan secara publik di website ini.</p>
          <form id="testi-form" style="display:flex;flex-direction:column;gap:16px">
            <div class="form-row">
              <div class="form-group">
                <label for="tf-nama">Nama Anda</label>
                <input type="text" id="tf-nama" placeholder="Contoh: Bu Ratna" required />
              </div>
              <div class="form-group">
                <label for="tf-anak">Nama & Usia Anak</label>
                <input type="text" id="tf-anak" placeholder="Contoh: Ibu dari Aisyah, 3 tahun" required />
              </div>
            </div>
            <div class="form-group">
              <label>Rating Kepuasan</label>
              <div id="tf-rating" class="testi-stars" style="font-size:1.6rem;cursor:pointer">
                <span class="tf-star" data-value="1">☆</span><span class="tf-star" data-value="2">☆</span><span class="tf-star" data-value="3">☆</span><span class="tf-star" data-value="4">☆</span><span class="tf-star" data-value="5">☆</span>
              </div>
              <input type="hidden" id="tf-rating-value" value="0" />
            </div>
            <div class="form-group">
              <label for="tf-kutipan">Pengalaman Anda</label>
              <textarea id="tf-kutipan" rows="4" placeholder="Ceritakan kesan Anda selama menitipkan anak di Rumah Harmoni Daycare..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">Kirim Testimoni</button>
            <p class="form-note">Testimoni akan ditinjau oleh tim kami dan ditampilkan setelah disetujui.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="section section-alt">
      <div class="container">
        <div class="cta-band fade-up">
          <div>
            <h3>Yuk, kunjungi langsung dan lihat suasananya</h3>
            <p>Jadwalkan kunjungan gratis bersama anak Anda sebelum memutuskan.</p>
          </div>
          <div class="cta-band-actions">
            <a href="${waLink('Assalamu\'alaikum, saya ingin menjadwalkan kunjungan ke Rumah Harmoni Daycare')}" target="_blank" rel="noopener" class="btn btn-light">${ICONS.whatsapp}<span>Jadwalkan Kunjungan</span></a>
          </div>
        </div>
      </div>
    </section>
  </main>`;
}

function initBeranda() {
  const form = document.getElementById("mini-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("mf-nama").value.trim();
      const wa = document.getElementById("mf-wa").value.trim();
      if (!nama || !wa) return;
      const pesan = `Assalamu'alaikum, nama saya ${nama} (WA: ${wa}). Saya ingin bertanya tentang Rumah Harmoni Daycare.`;
      window.open(waLink(pesan), "_blank");
      showToast("Terhubung ke WhatsApp — silakan lanjutkan percakapan di sana.");
      form.reset();
    });
  }

  initTestiForm();
}

function initTestiForm() {
  const starsEl = document.getElementById("tf-rating");
  const ratingInput = document.getElementById("tf-rating-value");
  const testiForm = document.getElementById("testi-form");
  if (!starsEl || !testiForm) return;

  const starSpans = starsEl.querySelectorAll(".tf-star");
  let currentRating = 0;

  function paintStars(rating) {
    starSpans.forEach(span => {
      const val = parseInt(span.dataset.value, 10);
      span.textContent = val <= rating ? "★" : "☆";
    });
  }

  starSpans.forEach(span => {
    const val = parseInt(span.dataset.value, 10);

    span.addEventListener("mouseenter", () => paintStars(val));
    span.addEventListener("click", () => {
      currentRating = val;
      ratingInput.value = currentRating;
      paintStars(currentRating);
    });
  });

  starsEl.addEventListener("mouseleave", () => paintStars(currentRating));

  testiForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (currentRating === 0) {
      showToast("Mohon beri rating bintang terlebih dahulu.");
      return;
    }

    const nama = document.getElementById("tf-nama").value.trim();
    const anak = document.getElementById("tf-anak").value.trim();
    const kutipan = document.getElementById("tf-kutipan").value.trim();
    if (!nama || !anak || !kutipan) return;

    addSubmission({ nama, anak, rating: currentRating, kutipan });

    showToast("Terima kasih! Testimoni Anda akan ditampilkan setelah ditinjau oleh kami.");
    testiForm.reset();
    currentRating = 0;
    paintStars(0);
  });
}
