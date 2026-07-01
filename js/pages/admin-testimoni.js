/* ===================================================================
   HALAMAN: PANEL ADMIN MODERASI TESTIMONI (/admin-testimoni)
   Tidak tampil di menu navigasi publik. Akses via mengetik langsung
   URL: namadomain.com/#/admin-testimoni
   =================================================================== */

function renderAdminTestimoni() {
  const isUnlocked = sessionStorage.getItem("rh_admin_unlocked") === "true";

  if (!isUnlocked) {
    return `
    <main>
      <section class="section" style="min-height:70vh;display:flex;align-items:center;">
        <div class="container" style="max-width:420px">
          <div class="card fade-up visible">
            <div class="eyebrow">Area Terbatas</div>
            <h3 style="margin-bottom:8px">Panel Moderasi Testimoni</h3>
            <p style="margin-bottom:24px;font-size:0.92rem">Masukkan kata sandi admin untuk melihat dan menyetujui testimoni yang masuk.</p>
            <form id="admin-login-form" style="display:flex;flex-direction:column;gap:12px">
              <input type="password" id="admin-password" placeholder="Kata sandi admin" class="mini-form input" style="padding:13px 16px;border:2px solid var(--line);border-radius:var(--radius-sm);font-family:var(--font-body);font-size:0.95rem" required />
              <button type="submit" class="btn btn-primary" style="width:100%">Masuk</button>
              <p id="admin-login-error" style="color:var(--coral);font-size:0.85rem;display:none">Kata sandi salah. Coba lagi.</p>
            </form>
          </div>
        </div>
      </section>
    </main>`;
  }

  return `
  <main>
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

        <div id="admin-tab-pending" class="tab-panel active"></div>
        <div id="admin-tab-approved" class="tab-panel"></div>
      </div>
    </section>
  </main>`;
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

function renderAdminLists() {
  const pendingEl = document.getElementById("admin-tab-pending");
  const approvedEl = document.getElementById("admin-tab-approved");
  if (!pendingEl || !approvedEl) return;

  const pending = getPendingSubmissions();
  const approved = getApprovedSubmissions();

  pendingEl.innerHTML = pending.length
    ? pending.map(item => adminTestiCard(item, "pending")).join("")
    : `<p style="color:var(--ink-soft)">Belum ada testimoni baru yang menunggu persetujuan.</p>`;

  approvedEl.innerHTML = approved.length
    ? approved.map(item => adminTestiCard(item, "approved")).join("")
    : `<p style="color:var(--ink-soft)">Belum ada testimoni yang disetujui untuk tayang.</p>`;
}

function initAdminTestimoni() {
  const loginForm = document.getElementById("admin-login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const pass = document.getElementById("admin-password").value;
      if (pass === ADMIN_PASSWORD) {
        sessionStorage.setItem("rh_admin_unlocked", "true");
        navigateTo("/admin-testimoni");
        router();
      } else {
        document.getElementById("admin-login-error").style.display = "block";
      }
    });
    return;
  }

  renderAdminLists();

  const tabs = document.querySelectorAll("[data-admin-tab]");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      document.querySelectorAll("#admin-tab-pending, #admin-tab-approved").forEach(p => p.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(`admin-tab-${tab.dataset.adminTab}`).classList.add("active");
    });
  });

  document.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "approve") updateSubmissionStatus(id, "approved");
      if (action === "reject") updateSubmissionStatus(id, "rejected");
      if (action === "unapprove") updateSubmissionStatus(id, "pending");
      if (action === "delete") { if (confirm("Hapus testimoni ini secara permanen?")) deleteSubmission(id); }
      renderAdminLists();
      attachAdminActionHandlers();
    });
  });

  const logoutBtn = document.getElementById("admin-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("rh_admin_unlocked");
      navigateTo("/admin-testimoni");
      router();
    });
  }
}

// Re-attach handler tombol approve/reject setelah render ulang list
function attachAdminActionHandlers() {
  document.querySelectorAll("[data-action]").forEach(btn => {
    btn.replaceWith(btn.cloneNode(true)); // bersihkan listener lama
  });
  document.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      if (action === "approve") updateSubmissionStatus(id, "approved");
      if (action === "reject") updateSubmissionStatus(id, "rejected");
      if (action === "unapprove") updateSubmissionStatus(id, "pending");
      if (action === "delete") { if (confirm("Hapus testimoni ini secara permanen?")) deleteSubmission(id); }
      renderAdminLists();
      attachAdminActionHandlers();
    });
  });
}
