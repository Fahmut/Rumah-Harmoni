/* ===================================================================
   HALAMAN: KONTAK & LOKASI (/kontak)
   =================================================================== */

function renderKontak() {
  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Mari Terhubung</div>
        <h1>Kontak & Lokasi</h1>
        <p>Hubungi kami untuk pertanyaan, kunjungan, atau pendaftaran. Kami siap membantu.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">
        <div class="fade-up">
          <div class="contact-info-item">
            ${iconCircleByColor("phone", "teal")}
            <div><h4>WhatsApp</h4><p>+${SITE.whatsapp.slice(0,2)} ${SITE.whatsapp.slice(2)}</p></div>
          </div>
          <div class="contact-info-item">
            ${iconCircleByColor("location", "violet")}
            <div><h4>Alamat</h4><p>${SITE.alamat}</p></div>
          </div>
          <div class="contact-info-item">
            ${iconCircleByColor("clock", "amber")}
            <div><h4>Jam Operasional</h4><p>${SITE.jamOperasional}</p></div>
          </div>
          <div class="contact-info-item">
            ${iconCircleByColor("instagram", "coral")}
            <div><h4>Instagram</h4><p><a href="${SITE.instagramUrl}" target="_blank" rel="noopener">${SITE.instagram}</a></p></div>
          </div>
          <div class="contact-info-item">
            ${iconCircleByColor("mail", "navy")}
            <div><h4>Email</h4><p>${SITE.email}</p></div>
          </div>

          <div class="map-embed">
            <iframe src="${SITE.mapsEmbedUrl}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Lokasi Rumah Harmoni Daycare"></iframe>
          </div>
        </div>

        <div class="card fade-up">
          <h3 style="margin-bottom:8px">Kirim Pesan Singkat</h3>
          <p style="margin-bottom:24px;font-size:0.92rem">Isi form berikut, dan tim kami akan menghubungi Anda melalui WhatsApp.</p>
          <form class="contact-form" id="contact-form">
            <div class="form-row">
              <div class="form-group">
                <label for="ct-nama">Nama Lengkap</label>
                <input type="text" id="ct-nama" required />
              </div>
              <div class="form-group">
                <label for="ct-wa">Nomor WhatsApp</label>
                <input type="tel" id="ct-wa" required />
              </div>
            </div>
            <div class="form-group">
              <label for="ct-topik">Topik</label>
              <select id="ct-topik">
                <option>Pendaftaran Anak Baru</option>
                <option>Jadwal Kunjungan</option>
                <option>Informasi Biaya</option>
                <option>Lainnya</option>
              </select>
            </div>
            <div class="form-group">
              <label for="ct-pesan">Pesan</label>
              <textarea id="ct-pesan" rows="4" placeholder="Tuliskan pertanyaan Anda di sini..." required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">Kirim via WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  </main>`;
}

function initKontak() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = document.getElementById("ct-nama").value.trim();
    const wa = document.getElementById("ct-wa").value.trim();
    const topik = document.getElementById("ct-topik").value;
    const pesanText = document.getElementById("ct-pesan").value.trim();
    if (!nama || !wa || !pesanText) return;

    const pesan = `Assalamu'alaikum, nama saya ${nama} (WA: ${wa}).\nTopik: ${topik}\nPesan: ${pesanText}`;
    window.open(waLink(pesan), "_blank");
    showToast("Terhubung ke WhatsApp — silakan lanjutkan percakapan di sana.");
    form.reset();
  });
}
