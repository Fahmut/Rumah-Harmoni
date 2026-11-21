/* ===================================================================
   FIREBASE CONFIG — testimoni tersimpan online (Firestore) supaya
   bisa diakses dari HP/laptop/browser manapun, bukan cuma localStorage.

   CARA SETUP (gratis, ± 10 menit), lihat panduan lengkap di
   SETUP-FIREBASE.md di folder ini. Ringkasnya:
   1. Buat project di https://console.firebase.google.com
   2. Tambahkan "Web App" di project itu -> Firebase kasih objek config
      seperti di bawah ini -> salin ke sini, GANTI semua nilai "GANTI_..."
   3. Aktifkan Firestore Database (mode production) & Authentication
      (metode Email/Password) di menu Firebase Console.
   4. Buat 1 akun admin di menu Authentication -> Add user (email + password).
   5. Pasang aturan keamanan dari SETUP-FIREBASE.md di Firestore Rules.
   =================================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyCSp8NU2nZtpY3qjTMQyBB_XHu2z6yhQ8c",
  authDomain: "rumah-harmoni.firebaseapp.com",
  projectId: "rumah-harmoni",
  storageBucket: "rumah-harmoni.firebasestorage.app",
  messagingSenderId: "347400691126",
  appId: "1:347400691126:web:4080b781708e5f67ef7517",
};

// Status: true kalau config di atas sudah diisi nilai asli (bukan placeholder)
const FIREBASE_READY = !Object.values(firebaseConfig).some(v => String(v).startsWith("GANTI_"));

let firebaseApp = null;
let db = null;
let auth = null;

if (FIREBASE_READY) {
  try {
    firebaseApp = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    auth = firebase.auth();
  } catch (e) {
    console.error("Gagal inisialisasi Firebase:", e);
  }
} else {
  console.warn(
    "[Rumah Harmoni] Firebase belum dikonfigurasi. " +
    "Testimoni akan memakai penyimpanan sementara di browser (localStorage) " +
    "sampai js/firebase-config.js diisi. Lihat SETUP-FIREBASE.md."
  );
}
