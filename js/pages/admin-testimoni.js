/* ===================================================================
   HALAMAN: PANEL ADMIN MODERASI TESTIMONI (/admin-testimoni)
   Tidak tampil di menu navigasi publik. Akses via mengetik langsung
   URL: namadomain.com/#/admin-testimoni

   - Kalau Firebase sudah dikonfigurasi: login pakai akun Firebase
     Authentication (email + password sungguhan, dibuat di Firebase
     Console), dan sesi login tersimpan otomatis oleh Firebase.
   - Kalau belum: fallback ke kata sandi tunggal (ADMIN_PASSWORD) yang
     hanya berlaku untuk sesi browser saat ini (perilaku lama).
   =================================================================== */

let _adminAuthUnsub = null;

function renderAdminTestimoni() {
  return `<main id="admin-testimoni-root">
    <section class="section" style="min-height:70vh;display:flex;align-items:center">
      <div class="container" style="text-align:center;color:var(--ink-soft)">Memuat…</div>
    </section>
  </main>`;
}

function adminLoginFormHTML() {
  return `
    <section class="section" style="min-height:70vh;display:flex;align-items:center">
      <div class="container" style="max-width:420px">
        <div class="card fade-up visible">
          <div class="eyebrow">Area Terbatas</div>
          <h3 style="margin-bottom:8px">Panel Moderasi Testimoni</h3>
          <p style="margin-bottom:24px;font-size:0.92rem">
            ${FIREBASE_READY
              ? "Masuk dengan akun admin (email &amp; kata sandi) untuk meninjau testimoni yang masuk."
              : "Masukkan kata sandi admin untuk melihat dan menyetujui testimoni yang masuk."}
          </p>
          <form id="admin-login-form" style="display:flex;flex-direction:column;gap:12px">
            ${FIREBASE_READY ? `<input type="email" id="admin-email" placeholder="Email admin" class="mini-form input" style="padding:13px 16px;border:2px solid var(--line);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:0.95rem" required />` : ""}
            <input type="password" id="admin-password" placeholder="Kata sandi admin" class="mini-form input" style="padding:13px 16px;border:2px solid var(--line);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:0.95rem" required />
            <button type="submit" class="btn btn-primary" style="width:100%">Masuk</button>
            <p id="admin-login-error" style="color:var(--coral);font-size:0.85rem;display:none"></p>
          </form>
          ${!FIREBASE_READY ? `<p style="margin-top:16px;font-size:0.78rem;color:var(--ink-soft)">Mode demo lokal aktif (belum tersambung ke database online). Lihat SETUP-FIREBASE.md untuk mengaktifkan penyimpanan online.</p>` : ""}
        </div>
      </div>
    </section>`;
}

function adminDashboardHTML() {
  return `
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Panel Internal</div>
        <h1>Moderasi Testimoni</h1>
        <p>Tinjau testimoni yang dikirim orang tua, setujui untuk menampilkannya secara publik, atau tolak jika tidak sesuai.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;flex-wrap:wrap;gap:12px">
          <div class="tab-row" style="margin-bottom:0">
            <button class="tab-btn active" data-admin-tab="pending">Menunggu Persetujuan</button>
            <button class="tab-btn" data-admin-tab="approved">Sudah Disetujui</button>
          </div>
          <button class="btn btn-outline btn-sm" id="admin-logout">Keluar</button>
        </div>

        <div id="admin-tab-pending" class="tab-panel active">
          <div style="text-align:center;padding:40px 0;color:var(--ink-soft)">Memuat…</div>
        </div>
        <div id="admin-tab-approved" class="tab-panel">
          <div style="text-align:center;padding:40px 0;color:var(--ink-soft)">Memuat…</div>
        </div>
      </div>
    </section>`;
}

function adminTestiCard(item, mode) {
  const stars = "★".repeat(item.rating) + "☆".repeat(5 - item.rating);
  const tanggal = new Date(item.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

  const actions = mode === "pending"
    ? `
      <button class="btn btn-primary btn-sm" data-action="approve" data-id="${item.id}">Setujui & Tayangkan</button>
      <button class="btn btn-outline btn-sm" data-action="reject" data-id="${item.id}">Tolak</button>
    `
    : `
      <button class="btn btn-outline btn-sm" data-action="unapprove" data-id="${item.id}">Batalkan Tayang</button>
      <button class="btn btn-outline btn-sm" data-action="delete" data-id="${item.id}">Hapus Permanen</button>
    `;

  return `
    <div class="card" style="margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:240px">
          <div class="testi-stars" style="margin-bottom:8px">${stars}</div>
          <p class="testi-quote" style="margin-bottom:12px">"${item.kutipan}"</p>
          <div class="testi-person">
            <div class="testi-avatar">${item.nama.charAt(0)}</div>
            <div><strong>${item.nama}</strong><span>${item.anak} · Dikirim ${tanggal}</span></div>
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;min-width:160px">${actions}</div>
      </div>
    </div>`;
}

function loadAdminLists() {
  const pendingEl = document.getElementById("admin-tab-pending");
  const approvedEl = document.getElementById("admin-tab-approved");
  if (!pendingEl || !approvedEl) return;

  Promise.all([getPendingSubmissions(), getApprovedSubmissions()])
    .then(([pending, approved]) => {
      pendingEl.innerHTML = pending.length
        ? pending.map(item => adminTestiCard(item, "pending")).join("")
        : `<p style="color:var(--ink-soft)">Belum ada testimoni baru yang menunggu persetujuan.</p>`;

      approvedEl.innerHTML = approved.length
        ? approved.map(item => adminTestiCard(item, "approved")).join("")
        : `<p style="color:var(--ink-soft)">Belum ada testimoni yang disetujui untuk tayang.</p>`;

      attachAdminActionHandlers();
    })
    .catch(err => {
      console.error("Gagal memuat data admin:", err);
      pendingEl.innerHTML = `<p style="color:var(--coral)">Gagal memuat data. Periksa koneksi internet Anda dan coba muat ulang halaman.</p>`;
      approvedEl.innerHTML = "";
    });
}

function attachAdminActionHandlers() {
  document.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      btn.disabled = true;

      let task;
      if (action === "approve") task = updateSubmissionStatus(id, "approved");
      else if (action === "reject") task = updateSubmissionStatus(id, "rejected");
      else if (action === "unapprove") task = updateSubmissionStatus(id, "pending");
      else if (action === "delete") {
        if (!confirm("Hapus testimoni ini secara permanen?")) { btn.disabled = false; return; }
        task = deleteSubmission(id);
      }

      task
        .then(() => loadAdminLists())
        .catch(err => {
          console.error("Gagal memproses aksi:", err);
          alert("Gagal memproses. Periksa koneksi internet Anda lalu coba lagi.");
          btn.disabled = false;
        });
    });
  });
}

function renderAdminRoot(loggedIn) {
  const root = document.getElementById("admin-testimoni-root");
  if (!root) return;

  if (!loggedIn) {
    root.innerHTML = adminLoginFormHTML();
    const form = document.getElementById("admin-login-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = FIREBASE_READY ? document.getElementById("admin-email").value.trim() : "";
      const password = document.getElementById("admin-password").value;
      const btn = form.querySelector("button[type='submit']");
      const errEl = document.getElementById("admin-login-error");
      errEl.style.display = "none";
      btn.disabled = true; btn.textContent = "Memeriksa...";

      adminSignIn(email, password)
        .then(() => renderAdminRoot(true))
        .catch((err) => {
          console.error("Login gagal:", err);
          errEl.textContent = FIREBASE_READY ? "Email atau kata sandi salah." : "Kata sandi salah. Coba lagi.";
          errEl.style.display = "block";
        })
        .finally(() => {
          btn.disabled = false; btn.textContent = "Masuk";
        });
    });
    return;
  }

  root.innerHTML = adminDashboardHTML();
  loadAdminLists();

  const tabs = document.querySelectorAll("[data-admin-tab]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll("#admin-tab-pending, #admin-tab-approved").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`admin-tab-${tab.dataset.adminTab}`).classList.add("active");
    });
  });

  document.getElementById("admin-logout").addEventListener("click", () => {
    adminSignOut().then(() => renderAdminRoot(false));
  });
}

function initAdminTestimoni() {
  if (_adminAuthUnsub) { try { _adminAuthUnsub(); } catch (e) {} _adminAuthUnsub = null; }
  _adminAuthUnsub = onAdminAuthChange((loggedIn) => renderAdminRoot(loggedIn));
}
