/* ===================================================================
   HALAMAN: JADWAL HARIAN & BIAYA (/jadwal-biaya)
   =================================================================== */

const SCHEDULE_FULL = [
  { time: "07.00", title: "Penyambutan", desc: "Anak disambut pengasuh, pengecekan kondisi kesehatan singkat." },
  { time: "07.30", title: "Sarapan", desc: "Sarapan bergizi bersama-sama." },
  { time: "08.30", title: "Pembelajaran", desc: "Sesi belajar tematik: huruf, angka, storytelling." },
  { time: "10.00", title: "Snack Pagi", desc: "Waktu istirahat dan snack sehat." },
  { time: "10.30", title: "Seni / Motorik", desc: "Kegiatan seni atau aktivitas fisik bergantian." },
  { time: "12.00", title: "Makan Siang & Sholat", desc: "Makan siang bersama, dilanjut sholat berjamaah (usia 4+)." },
  { time: "13.00", title: "Tidur Siang", desc: "Waktu istirahat di ruang tidur yang nyaman." },
  { time: "15.00", title: "Snack Sore", desc: "Snack ringan setelah bangun tidur siang." },
  { time: "15.30", title: "Bermain Bebas", desc: "Waktu bermain bebas, indoor atau outdoor." },
  { time: "16.30", title: "Penjemputan", desc: "Anak dijemput, laporan harian diserahkan ke orang tua." },
];

const SCHEDULE_HALF = [
  { time: "07.00", title: "Penyambutan", desc: "Anak disambut pengasuh, pengecekan kondisi kesehatan singkat." },
  { time: "07.30", title: "Sarapan", desc: "Sarapan bergizi bersama-sama." },
  { time: "08.30", title: "Belajar & Bermain", desc: "Kegiatan belajar sambil bermain sesuai tema harian." },
  { time: "10.00", title: "Snack", desc: "Waktu istirahat dan snack sehat." },
  { time: "10.30", title: "Seni / Agama", desc: "Kegiatan seni atau pembiasaan nilai Islami." },
  { time: "12.00", title: "Makan Siang", desc: "Makan siang bersama sebelum penjemputan." },
  { time: "12.30", title: "Penjemputan", desc: "Anak dijemput, laporan harian diserahkan ke orang tua." },
];

function renderJadwalBiaya() {
  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Rutinitas & Investasi</div>
        <h1>Jadwal Harian & Biaya</h1>
        <p>Lihat alur kegiatan harian anak Anda dan pilih paket yang sesuai kebutuhan keluarga.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-head fade-up">
          <div class="eyebrow">Jadwal Harian</div>
          <h2>Rutinitas yang terstruktur setiap hari</h2>
        </div>
        <div class="tab-row fade-up">
          <button class="tab-btn active" data-tab="fullday">Full Day (07.00–16.30)</button>
          <button class="tab-btn" data-tab="halfday">Half Day (07.00–12.30)</button>
        </div>

        <div class="tab-panel active" id="tab-fullday">
          <div class="timeline">
            ${SCHEDULE_FULL.map(s => `
              <div class="timeline-item">
                <div class="timeline-time">${s.time} WIB</div>
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="tab-panel" id="tab-halfday">
          <div class="timeline">
            ${SCHEDULE_HALF.map(s => `
              <div class="timeline-item">
                <div class="timeline-time">${s.time} WIB</div>
                <h4>${s.title}</h4>
                <p>${s.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-head center fade-up">
          <div class="eyebrow" style="justify-content:center">Paket & Biaya</div>
          <h2>Pilih paket sesuai kebutuhan keluarga</h2>
        </div>
        <div class="pricing-grid">
          <div class="pricing-card fade-up">
            <h3>Half Day</h3>
            <p>07.00 – 12.30 WIB</p>
            <div class="price">Rp 750.000<span> /bulan</span></div>
            <ul class="pricing-list">
              <li><div class="check">${ICONS.check}</div>Sarapan & makan siang</li>
              <li><div class="check">${ICONS.check}</div>Kegiatan belajar & bermain</li>
              <li><div class="check">${ICONS.check}</div>Pembiasaan nilai Islami</li>
              <li><div class="check">${ICONS.check}</div>Laporan harian</li>
            </ul>
            <a href="${waLink('Assalamu\'alaikum, saya ingin tahu lebih lanjut tentang paket Half Day')}" target="_blank" rel="noopener" class="btn btn-outline" style="width:100%">Tanya Paket Ini</a>
          </div>
          <div class="pricing-card featured fade-up">
            <h3>Full Day</h3>
            <p>07.00 – 16.30 WIB</p>
            <div class="price">Rp 1.200.000<span> /bulan</span></div>
            <ul class="pricing-list">
              <li><div class="check">${ICONS.check}</div>Sarapan, makan siang, & 2x snack</li>
              <li><div class="check">${ICONS.check}</div>Seluruh kegiatan stimulasi & seni</li>
              <li><div class="check">${ICONS.check}</div>Tidur siang & sholat berjamaah</li>
              <li><div class="check">${ICONS.check}</div>Laporan harian & bulanan</li>
            </ul>
            <a href="${waLink('Assalamu\'alaikum, saya ingin tahu lebih lanjut tentang paket Full Day')}" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%">Tanya Paket Ini</a>
          </div>
        </div>

        <div class="table-scroll mt-2">
          <table class="data-table">
            <thead>
              <tr><th>Rincian</th><th>Half Day</th><th>Full Day</th></tr>
            </thead>
            <tbody>
              <tr><td>Biaya bulanan</td><td>Rp 750.000</td><td>Rp 1.200.000</td></tr>
              <tr><td>Biaya pendaftaran (sekali)</td><td>Rp 300.000</td><td>Rp 300.000</td></tr>
              <tr><td>Seragam (2 pasang)</td><td>Rp 150.000</td><td>Rp 150.000</td></tr>
              <tr><td>Makan & snack</td><td>2x</td><td>3x (termasuk snack sore)</td></tr>
              <tr><td>Jam operasional</td><td>07.00–12.30</td><td>07.00–16.30</td></tr>
            </tbody>
          </table>
        </div>

        <div class="discount-banner fade-up">
          ${iconCircleByColor("star", "amber")}
          <div>
            <h4>Diskon Saudara Kandung</h4>
            <p>Dapatkan potongan 10% untuk anak kedua dan seterusnya yang dititipkan bersamaan.</p>
          </div>
        </div>

        <div class="card mt-2 fade-up">
          <h4 style="margin-bottom:14px">Metode Pembayaran</h4>
          <p>Pembayaran dapat dilakukan melalui transfer bank, e-wallet (DANA, OVO, GoPay), atau tunai langsung di tempat. Pembayaran bulanan dilakukan di awal bulan, paling lambat tanggal 5.</p>
        </div>
      </div>
    </section>
  </main>`;
}

function initJadwalBiaya() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`tab-${tab.dataset.tab}`).classList.add("active");
    });
  });
}
