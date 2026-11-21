/* ===================================================================
   HALAMAN: BERANDA  (/)
   =================================================================== */

const FEATURES = [
  { icon: "cctv", color: "violet", title: "Ruang Ber-CCTV", desc: "Aktivitas sehari-hari anak terpantau CCTV." },
  { icon: "ac", color: "teal", title: "Ruang Ber-AC", desc: "Ruang bermain dan istirahat sejuk, nyaman sepanjang hari." },
  { icon: "caregiver", color: "amber", title: "Pengasuh Berpengalaman dan cinta anak-anak", desc: "Didampingi pengasuh yang berpengalaman dalam menangani anak_anak usia dini dan mencintai dunia anak-anak." },
  { icon: "nutrition", color: "coral", title: "Gizi Terencana", desc: "Menu makan dan snack disusun mengikuti kebutuhan gizi anak." },
  { icon: "report", color: "violet", title: "Laporan Harian", desc: "Update kegiatan,kondisi dan perkembangan anak dapat disampaikan waktu penjemputan secara singkat dan terdata pada buku penghubung secara keseluruhan." },
  { icon: "islamic", color: "navy", title: "Berbasis Nilai Islami", desc: "Pembiasaan adab, doa, dan kisah nabi dalam keseharian." },
];

const HERO_SLIDES = [
  { src: "images/beranda/hero1.jpg", alt: "Suasana kegiatan anak-anak di Daycare Rumah Harmoni" },
  { src: "images/beranda/hero2.png", alt: "Fasilitas Daycare Rumah Harmoni" },
  { src: "images/beranda/hero3.png", alt: "Fasilitas Daycare Rumah Harmoni" },
];

function testiCardHTML(t, i) {
  return `
    <div class="testi-card fade-up visible" style="transition-delay:${i * 80}ms">
      <div class="testi-stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p class="testi-quote">"${t.kutipan}"</p>
      <div class="testi-person">
        <div class="testi-avatar">${t.nama.charAt(0)}</div>
        <div><strong>${t.nama}</strong><span>${t.anak}</span></div>
      </div>
    </div>`;
}

// Muat testimoni terbaru (bawaan + yang disetujui admin) secara online,
// lalu ganti isi grid testimoni begitu data siap.
function loadBerandaTestimonials() {
  const grid = document.getElementById("beranda-testi-grid");
  if (!grid) return;
  getCombinedTestimonialsShort(3).then(list => {
    const el = document.getElementById("beranda-testi-grid");
    if (!el || !list.length) return;
    el.innerHTML = list.map((t, i) => testiCardHTML(t, i)).join("");
  });
}

function renderBeranda() {
  const programImgs = ["images/beranda/program-1.jpg", "images/beranda/program-2.jpg", "images/beranda/program-3.jpg"];

  return `
  <main>
    <!-- HERO -->
    <section class="hero">
      <div class="hero-glow"></div>
      <div class="container hero-grid">
        <div class="hero-copy">
          <div class="eyebrow">Daycare Rumah Harmoni · ${SITE.kota}</div>
          <h1>${SITE.tagline}</h1>
          <p>Daycare Rumah Harmoni adalah rumah kedua bagi anak-anak untuk bertumbuh dan berkembang secara optimal, dalam lingkungan yang aman, nyaman, dan penuh kasih sayang. Kami mendampingi tumbuh kembang anak secara holistik — fisik, kognitif, sosial, dan emosional — melalui program kegiatan yang terstruktur dan terencana, serta pembiasaan nilai-nilai keislaman dalam keseharian.
Kami menjunjung tinggi nilai inklusivitas, di mana setiap anak memiliki hak yang sama untuk menerima pendidikan, pendampingan, dan pengasuhan yang disesuaikan dengan kebutuhannya masing-masing, karena setiap anak dengan keunikannya berhak mendapatkan kesempatan tumbuh kembang yang setara dan bermakna.</p>
          <div class="hero-actions">
            <a href="https://forms.gle/aGnkF8r1JyUy7C6k6" class="btn btn-primary">Daftar Sekarang</a>
            <a href="${waLink()}" target="_blank" rel="noopener" class="btn btn-whatsapp">${ICONS.whatsapp}<span>Hubungi WA</span></a>
          </div>
          <div class="hero-trust">
            <div class="hero-trust-item"><strong>++</strong>Baru hadir dan siap melayani sepenuh hati</div>
            <div class="hero-trust-item"><strong>18+</strong>Anak telah dititipkan sejak di buka</div>
            <div class="hero-trust-item"><strong>1:4</strong>Rasio pengasuh & anak</div>
          </div>
        </div>
        <div class="hero-visual fade-up" id="hero-slider">
          <div class="hero-photo-frame">
            ${HERO_SLIDES.map((s, i) => `
              <img src="${s.src}" alt="${s.alt}" class="hero-slide${i === 0 ? " active" : ""}" data-index="${i}" />
            `).join("")}
            ${HERO_SLIDES.length > 1 ? `
            <div class="hero-dots">
              ${HERO_SLIDES.map((_, i) => `<button type="button" class="hero-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`).join("")}
            </div>` : ""}
          </div>
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
          ${TESTIMONIALS_FULL.slice(0, 3).map((t, i) => testiCardHTML(t, i)).join("")}
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
            <a href="${waLink('Assalamu\'alaikum, saya ingin menjadwalkan kunjungan ke Daycare Rumah Harmoni ')}" target="_blank" rel="noopener" class="btn btn-light">${ICONS.whatsapp}<span>Jadwalkan Kunjungan</span></a>
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
      const pesan = `Assalamu'alaikum, nama saya ${nama} (WA: ${wa}). Saya ingin bertanya tentang Daycare Rumah Harmoni.`;
      window.open(waLink(pesan), "_blank");
      showToast("Terhubung ke WhatsApp — silakan lanjutkan percakapan di sana.");
      form.reset();
    });
  }

  initTestiForm();
  initHeroSlider();
  loadBerandaTestimonials();
}

function initHeroSlider() {
  const slider = document.getElementById("hero-slider");
  if (!slider) return;

  const slides = slider.querySelectorAll(".hero-slide");
  const dots = slider.querySelectorAll(".hero-dot");
  if (slides.length <= 1) return;

  let current = 0;
  let timer = null;

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function nextSlide() {
    goTo(current + 1);
  }

  function startAutoplay() {
    stopAutoplay();
    timer = setInterval(nextSlide, 5000);
  }

  function stopAutoplay() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goTo(parseInt(dot.dataset.index, 10));
      startAutoplay();
    });
  });

  slider.addEventListener("mouseenter", stopAutoplay);
  slider.addEventListener("mouseleave", startAutoplay);

  startAutoplay();
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

    const submitBtn = testiForm.querySelector("button[type='submit']");
    const originalLabel = submitBtn ? submitBtn.textContent : "";
    if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "Mengirim..."; }

    addSubmission({ nama, anak, rating: currentRating, kutipan })
      .then(() => {
        showToast("Terima kasih! Testimoni Anda akan ditampilkan setelah ditinjau oleh kami.");
        testiForm.reset();
        currentRating = 0;
        paintStars(0);
      })
      .catch((err) => {
        console.error("Gagal mengirim testimoni:", err);
        showToast("Gagal mengirim testimoni. Periksa koneksi internet Anda, lalu coba lagi.");
      })
      .finally(() => {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
      });
  });
}
