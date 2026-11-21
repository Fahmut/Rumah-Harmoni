/* ===================================================================
   TESTIMONI STORAGE
   - Kalau Firebase sudah dikonfigurasi (lihat js/firebase-config.js),
     semua data testimoni disimpan online di Firestore -> bisa diakses
     dari device/browser manapun, dan admin login pakai akun Firebase
     Authentication (email + password) yang sungguhan.
   - Kalau Firebase BELUM dikonfigurasi, otomatis jatuh ke localStorage
     (perilaku lama) supaya situs tetap jalan sebagai demo/preview.
   Semua fungsi di bawah ini async (mengembalikan Promise) supaya kode
   pemanggil sama persis baik pakai Firestore maupun localStorage.
   =================================================================== */

const TESTI_STORAGE_KEY = "rh_testimoni_submissions_v1";
const TESTI_COLLECTION = "testimoni_submissions";

// Password fallback ini HANYA dipakai kalau Firebase belum dikonfigurasi.
// Begitu Firebase aktif, login admin pakai akun Firebase Authentication
// (dibuat di Firebase Console -> Authentication -> Add user).
const ADMIN_PASSWORD = "harmoni2026";

/* ---------------------------------------------------------------
   AUTH ADMIN
   --------------------------------------------------------------- */

function adminSignIn(email, password) {
  if (FIREBASE_READY && auth) {
    return auth.signInWithEmailAndPassword(email, password).then(() => true);
  }
  // Mode fallback: cocokkan ke ADMIN_PASSWORD, abaikan email
  return new Promise((resolve, reject) => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("rh_admin_unlocked", "true");
      resolve(true);
    } else {
      reject(new Error("Kata sandi salah."));
    }
  });
}

function adminSignOut() {
  if (FIREBASE_READY && auth) {
    return auth.signOut();
  }
  sessionStorage.removeItem("rh_admin_unlocked");
  return Promise.resolve();
}

function isAdminLoggedIn() {
  if (FIREBASE_READY && auth) {
    return !!auth.currentUser;
  }
  return sessionStorage.getItem("rh_admin_unlocked") === "true";
}

// Jalankan callback(isLoggedIn) segera, lalu setiap kali status berubah
// (khusus mode Firebase; mode fallback cuma panggil sekali karena tidak reaktif).
function onAdminAuthChange(callback) {
  if (FIREBASE_READY && auth) {
    return auth.onAuthStateChanged(user => callback(!!user));
  }
  callback(isAdminLoggedIn());
  return () => {};
}

/* ---------------------------------------------------------------
   HELPER localStorage (dipakai hanya sebagai fallback)
   --------------------------------------------------------------- */

function lsGetAll() {
  try {
    const raw = localStorage.getItem(TESTI_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Gagal membaca testimoni dari localStorage:", e);
    return [];
  }
}

function lsSaveAll(list) {
  try {
    localStorage.setItem(TESTI_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Gagal menyimpan testimoni ke localStorage:", e);
  }
}

/* ---------------------------------------------------------------
   CRUD TESTIMONI (Firestore kalau siap, localStorage kalau tidak)
   --------------------------------------------------------------- */

function addSubmission(data) {
  const entry = {
    nama: data.nama,
    anak: data.anak,
    rating: data.rating,
    kutipan: data.kutipan,
    status: "pending", // pending | approved | rejected
  };

  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).add({
      ...entry,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(ref => ({ id: ref.id, ...entry, createdAt: new Date().toISOString() }));
  }

  const list = lsGetAll();
  const localEntry = {
    id: "t_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7),
    ...entry,
    createdAt: new Date().toISOString(),
  };
  list.unshift(localEntry);
  lsSaveAll(list);
  return Promise.resolve(localEntry);
}

function getAllSubmissions() {
  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).orderBy("createdAt", "desc").get().then(snap =>
      snap.docs.map(doc => {
        const d = doc.data();
        return {
          id: doc.id,
          ...d,
          createdAt: d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : new Date().toISOString(),
        };
      })
    );
  }
  return Promise.resolve(lsGetAll());
}

function getPendingSubmissions() {
  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).where("status", "==", "pending").get().then(snap =>
      snap.docs.map(doc => {
        const d = doc.data();
        return { id: doc.id, ...d, createdAt: d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : new Date().toISOString() };
      }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }
  return getAllSubmissions().then(list => list.filter(item => item.status === "pending"));
}

function getApprovedSubmissions() {
  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).where("status", "==", "approved").get().then(snap =>
      snap.docs.map(doc => {
        const d = doc.data();
        return { id: doc.id, ...d, createdAt: d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : new Date().toISOString() };
      }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    );
  }
  return getAllSubmissions().then(list => list.filter(item => item.status === "approved"));
}

function updateSubmissionStatus(id, status) {
  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).doc(id).update({ status }).then(() => true);
  }
  const list = lsGetAll();
  const idx = list.findIndex(item => item.id === id);
  if (idx === -1) return Promise.resolve(false);
  list[idx].status = status;
  lsSaveAll(list);
  return Promise.resolve(true);
}

function deleteSubmission(id) {
  if (FIREBASE_READY && db) {
    return db.collection(TESTI_COLLECTION).doc(id).delete().then(() => true);
  }
  const list = lsGetAll().filter(item => item.id !== id);
  lsSaveAll(list);
  return Promise.resolve(true);
}

/* ---------------------------------------------------------------
   GABUNGAN dengan testimoni bawaan (data.js) untuk halaman publik
   --------------------------------------------------------------- */

function getCombinedTestimonials() {
  return getApprovedSubmissions().then(approved => {
    const mapped = approved.map(t => ({
      nama: t.nama,
      anak: t.anak,
      kutipan: t.kutipan,
      rating: t.rating,
      tanggal: new Date(t.createdAt).toLocaleDateString("id-ID", { month: "long", year: "numeric" }),
      aspek: { kebersihan: t.rating, pengasuhan: t.rating, komunikasi: t.rating, fasilitas: t.rating },
    }));
    return [...mapped, ...TESTIMONIALS_FULL];
  }).catch(err => {
    console.error("Gagal memuat testimoni:", err);
    return [...TESTIMONIALS_FULL];
  });
}

function getCombinedTestimonialsShort(limit = 3) {
  return getCombinedTestimonials().then(combined => combined.slice(0, limit));
}
