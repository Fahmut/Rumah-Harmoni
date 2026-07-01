/* ===================================================================
   LAYOUT — Header, Footer, dan handler global (nav mobile, WA float,
   toast notification, fade-up scroll animation)
   =================================================================== */

function renderHeader(activePath) {
  let existing = document.getElementById("site-header");
  const navLinksHtml = NAV_ITEMS.map(item => `
    <a href="#${item.path}" class="${item.path === activePath ? "active" : ""}">${item.label}</a>
  `).join("");

  const headerHtml = `
    <header class="site-header" id="site-header">
      <div class="nav-wrap">
        <a href="#/" class="brand">
          <img src="images/logo.jpeg" alt="Logo Rumah Harmoni Daycare" />
          <span>Rumah Harmoni</span>
        </a>
        <nav class="nav-links" id="nav-links">${navLinksHtml}</nav>
        <div class="nav-cta">
          <button class="nav-toggle" id="nav-toggle" aria-label="Buka menu navigasi" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>`;

  if (existing) {
    existing.outerHTML = headerHtml;
  } else {
    document.body.insertAdjacentHTML("afterbegin", headerHtml);
  }
}

function renderFooter() {
  const existing = document.getElementById("site-footer");
  if (existing) existing.remove();

  const footerHtml = `
    <footer class="site-footer" id="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">
              <img src="images/logo.jpeg" alt="Logo Rumah Harmoni Daycare" />
              <span>Rumah Harmoni</span>
            </div>
            <p>Daycare berbasis nilai Islami di ${SITE.kota}, tempat anak bertumbuh dengan kasih sayang dan stimulasi yang terencana.</p>
            <div class="social-row mt-1">
              <a href="${SITE.instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
              <a href="${waLink()}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><a href="#/">Beranda</a></li>
              <li><a href="#/tentang-kami">Tentang Kami</a></li>
              <li><a href="#/program">Program & Kegiatan</a></li>
              <li><a href="#/fasilitas">Fasilitas</a></li>
              <li><a href="#/jadwal-biaya">Jadwal & Biaya</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Lainnya</h4>
            <ul>
              <li><a href="#/galeri">Galeri</a></li>
              <li><a href="#/blog">Blog Parenting</a></li>
              <li><a href="#/testimoni">Testimoni</a></li>
              <li><a href="#/kontak">Kontak & Lokasi</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Kontak Cepat</h4>
            <ul>
              <li>${SITE.alamat}</li>
              <li>${SITE.jamOperasional}</li>
              <li><a href="${waLink()}" target="_blank" rel="noopener">Chat via WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${SITE.nama}, ${SITE.kota}. Seluruh hak cipta dilindungi.</span>
          <span>${SITE.izinOperasional}</span>
        </div>
      </div>
    </footer>
    <a href="${waLink()}" target="_blank" rel="noopener" class="wa-float" aria-label="Hubungi via WhatsApp">
      ${ICONS.whatsapp}
    </a>
    <div class="toast" id="toast"></div>
  `;
  document.body.insertAdjacentHTML("beforeend", footerHtml);
}

function attachGlobalHandlers() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    links.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

function observeFadeUps() {
  const items = document.querySelectorAll(".fade-up");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
}
