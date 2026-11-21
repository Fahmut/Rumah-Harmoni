/* ===================================================================
   PLACEHOLDER IMAGE — SVG generator bertema warna logo
   Dipakai sementara sampai foto asli di-upload oleh pemilik daycare.
   Ganti src gambar nantinya dengan: images/nama-foto.jpg
   =================================================================== */

const PLACEHOLDER_PALETTES = [
  ["#8B5FBF", "#6B8FD6"],
  ["#2FBFA0", "#5FD6C4"],
  ["#E8A33D", "#F4C988"],
  ["#E8806B", "#F0A893"],
  ["#211541", "#3A2A6B"],
  ["#6B8FD6", "#2FBFA0"],
];

function placeholderImg(label, seed = 0, ratioW = 4, ratioH = 3) {
  const [c1, c2] = PLACEHOLDER_PALETTES[seed % PLACEHOLDER_PALETTES.length];
  const w = 400, h = Math.round((400 * ratioH) / ratioW);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g${seed})"/>
      <circle cx="${w * 0.18}" cy="${h * 0.25}" r="${w * 0.16}" fill="rgba(255,255,255,0.12)"/>
      <circle cx="${w * 0.85}" cy="${h * 0.78}" r="${w * 0.22}" fill="rgba(255,255,255,0.10)"/>
      <text x="50%" y="50%" font-family="Plus Jakarta Sans, sans-serif" font-size="${w * 0.045}" font-weight="700" fill="rgba(255,255,255,0.85)" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
