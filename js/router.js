/* ===================================================================
   ROUTER — SPA routing sederhana berbasis hash (#/halaman)
   Tidak memerlukan server khusus; bisa dibuka langsung dari file lokal
   maupun di-deploy ke hosting statis manapun.
   =================================================================== */

const ROUTES = {
  "/": { title: "Beranda", render: renderBeranda },
  "/tentang-kami": { title: "Tentang Kami", render: renderTentangKami },
  "/program": { title: "Program & Kegiatan", render: renderProgram },
  "/fasilitas": { title: "Fasilitas", render: renderFasilitas },
  "/jadwal-biaya": { title: "Jadwal Harian & Biaya", render: renderJadwalBiaya },
  "/galeri": { title: "Galeri", render: renderGaleri },
  "/blog": { title: "Blog Parenting", render: renderBlog },
  "/testimoni": { title: "Testimoni", render: renderTestimoni },
  "/kontak": { title: "Kontak & Lokasi", render: renderKontak },
  "/admin-testimoni": { title: "Panel Moderasi Testimoni", render: renderAdminTestimoni },
};

const NAV_ITEMS = [
  { path: "/", label: "Beranda" },
  { path: "/tentang-kami", label: "Tentang Kami" },
  { path: "/program", label: "Program" },
  { path: "/fasilitas", label: "Fasilitas" },
  { path: "/jadwal-biaya", label: "Jadwal & Biaya" },
  { path: "/galeri", label: "Galeri" },
  { path: "/blog", label: "Blog" },
  { path: "/testimoni", label: "Testimoni" },
  { path: "/kontak", label: "Kontak" },
];

function getCurrentPath() {
  const hash = window.location.hash || "#/";
  const path = hash.replace("#", "");
  return ROUTES[path] ? path : "/";
}

function navigateTo(path) {
  window.location.hash = `#${path}`;
}

function router() {
  const path = getCurrentPath();
  const route = ROUTES[path];

  document.title = `${route.title} — Rumah Harmoni Daycare`;

  const app = document.getElementById("app");
  app.innerHTML = route.render();

  renderHeader(path);
  renderFooter();
  attachGlobalHandlers();

  if (typeof route.afterRender === "function") route.afterRender();
  runPageScripts(path);

  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  observeFadeUps();
}

function runPageScripts(path) {
  if (path === "/") initBeranda();
  if (path === "/jadwal-biaya") initJadwalBiaya();
  if (path === "/galeri") initGaleri();
  if (path === "/kontak") initKontak();
  if (path === "/blog") initBlog();
  if (path === "/admin-testimoni") initAdminTestimoni();
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
