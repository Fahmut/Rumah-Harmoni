/* ===================================================================
   TESTIMONI STORAGE — wrapper localStorage untuk testimoni
   - Submisi baru dari form Beranda masuk ke daftar "pending"
   - Admin (lewat panel /admin-testimoni) menyetujui -> masuk "approved"
   - Halaman Testimoni & Beranda menggabungkan TESTIMONIALS_FULL (bawaan)
     dengan testimoni "approved" dari localStorage
   =================================================================== */

const TESTI_STORAGE_KEY = "rh_testimoni_submissions_v1";

// GANTI password ini di kode untuk akses panel moderasi
const ADMIN_PASSWORD = "harmoni2026";

function getAllSubmissions() {
  try {
    const raw = localStorage.getItem(TESTI_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Gagal membaca testimoni dari localStorage:", e);
    return [];
  }
}

function saveAllSubmissions(list) {
  try {
    localStorage.setItem(TESTI_STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch (e) {
    console.error("Gagal menyimpan testimoni ke localStorage:", e);
    return false;
  }
}

function addSubmission(data) {
  const list = getAllSubmissions();
  const entry = {
    id: "t_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    nama: data.nama,
    anak: data.anak,
    rating: data.rating,
    kutipan: data.kutipan,
    status: "pending", // pending | approved | rejected
    createdAt: new Date().toISOString(),
  };
  list.unshift(entry);
  saveAllSubmissions(list);
  return entry;
}

function updateSubmissionStatus(id, status) {
  const list = getAllSubmissions();
  const idx = list.findIndex(item => item.id === id);
  if (idx === -1) return false;
  list[idx].status = status;
  saveAllSubmissions(list);
  return true;
}

function deleteSubmission(id) {
  const list = getAllSubmissions().filter(item => item.id !== id);
  saveAllSubmissions(list);
}

function getApprovedSubmissions() {
  return getAllSubmissions().filter(item => item.status === "approved");
}

function getPendingSubmissions() {
  return getAllSubmissions().filter(item => item.status === "pending");
}

// Gabungkan testimoni bawaan (data.js) dengan testimoni approved dari localStorage
function getCombinedTestimonials() {
  const approved = getApprovedSubmissions().map(t => ({
    nama: t.nama,
    anak: t.anak,
    kutipan: t.kutipan,
    rating: t.rating,
    tanggal: new Date(t.createdAt).toLocaleDateString("id-ID", { month: "long", year: "numeric" }),
    aspek: { kebersihan: t.rating, pengasuhan: t.rating, komunikasi: t.rating, fasilitas: t.rating },
  }));
  return [...approved, ...TESTIMONIALS_FULL];
}

function getCombinedTestimonialsShort(limit = 3) {
  const combined = getCombinedTestimonials();
  return combined.slice(0, limit);
}
