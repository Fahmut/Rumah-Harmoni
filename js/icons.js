/* ===================================================================
   ICON LIBRARY — kumpulan SVG inline, dipakai berulang di semua halaman
   =================================================================== */

const ICONS = {
  cctv: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l9-4 9 4-9 4-9-4z"/><path d="M3 8v7l9 4 9-4V8"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>`,
  ac: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="6" rx="2"/><path d="M6 16v2M10 16v3M14 16v2M18 16v3"/></svg>`,
  caregiver: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.2"/><path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M9.5 5.5l1 1 4-3"/></svg>`,
  nutrition: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-3 1-5 4-5 8a5 5 0 0010 0c0-4-2-7-5-8z"/><path d="M12 3v3"/></svg>`,
  report: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l3 3v15H7z"/><path d="M14 3v3h3"/><path d="M9.5 13h5M9.5 16.5h5M9.5 9.5h2"/></svg>`,
  islamic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a8 8 0 109.5 9.7A7 7 0 0112 3z"/><path d="M17 4l.6 1.4L19 6l-1.4.6L17 8l-.6-1.4L15 6l1.4-.6z"/></svg>`,
  growth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2"/><circle cx="8" cy="13" r="1.6" fill="currentColor" stroke="none"/><circle cx="16" cy="13" r="1.6" fill="currentColor" stroke="none"/><path d="M2 10h20"/></svg>`,
  art: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 100 18c1.5 0 2-1 2-2s-.5-1.5-1-2 .2-2 1.5-2H17a4 4 0 004-4c0-4.4-4-8-9-8z"/><circle cx="8" cy="11" r="1" fill="currentColor" stroke="none"/><circle cx="11" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="15" cy="9" r="1" fill="currentColor" stroke="none"/></svg>`,
  run: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="15" cy="5" r="1.6" fill="currentColor" stroke="none"/><path d="M9 9l3 2 2 5 3 2M12 11L9 14l-3 1M11 7L7 9l1 4"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.4 5.4 5.6.6-4.2 3.8 1.2 5.6-4.8-2.9-4.8 2.9 1.2-5.6L4.4 9l5.6-.6z"/></svg>`,
  food: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2v7a3 3 0 003 3v10M6 2v7M9 2v7M3 2v7"/><path d="M18 2c-2 2-2 5-2 8a3 3 0 003 3v9"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>`,
  garden: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V11"/><path d="M12 11c0-3-2-5-5-5 0 3 2 5 5 5z"/><path d="M12 11c0-3 2-5 5-5 0 3-2 5-5 5z"/><path d="M6 21h12"/></svg>`,
  kitchen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v7a3 3 0 003 3v8M4 3v4M7 3v7"/><path d="M14 3c2 0 3 2 3 5s-1 4-3 4v9"/></svg>`,
  bathroom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16M6 11V6a2 2 0 012-2h2a2 2 0 012 2v1"/><path d="M5 11v6a3 3 0 003 3h8a3 3 0 003-3v-6"/></svg>`,
  bed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-7a2 2 0 012-2h14a2 2 0 012 2v7"/><path d="M3 18h18M3 13h18"/><circle cx="7" cy="9" r="1.3" fill="currentColor" stroke="none"/></svg>`,
  fence: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4v17M11 4v17M17 4v17M2 9h20M2 14h20"/></svg>`,
  firstaid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M12 10v6M9 13h6"/></svg>`,
  puzzle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4h4v2.5a1.5 1.5 0 003 0V4h4v4h-2.5a1.5 1.5 0 000 3H20v4h-4v-2.5a1.5 1.5 0 00-3 0V18H9v-4H6.5a1.5 1.5 0 000-3H9V8H6.5a1.5 1.5 0 010-3H9z"/></svg>`,
  book: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5a2 2 0 012-2h6v18H6a2 2 0 01-2-2z"/><path d="M12 3h6a2 2 0 012 2v14a2 2 0 01-2 2h-6"/></svg>`,
  whatsapp: `<svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 2C8.3 2 2 8.3 2 16c0 2.6.7 5.1 2 7.3L2 30l6.9-1.8c2.1 1.2 4.5 1.8 7.1 1.8 7.7 0 14-6.3 14-14S23.7 2 16 2zm0 25.5c-2.3 0-4.5-.6-6.4-1.7l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C4.2 19.9 3.5 18 3.5 16 3.5 9.1 9.1 3.5 16 3.5S28.5 9.1 28.5 16 22.9 27.5 16 27.5zm6.7-8.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.7.1-1.9-.9-3.1-1.6-4.4-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4-.1-.6-.1-.2-.7-1.7-1-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.4 5.4 4.6 2.6 1 3.1.8 3.7.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C9.7 21 3 14.3 3 6a2 2 0 012-2z"/></svg>`,
  location: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l4 4L19 6"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h7l3 3v15H7z"/><path d="M14 3v3h3"/></svg>`,
};

// Helper: bungkus ikon ke dalam lingkaran warna
function iconCircle(iconKey, bg, fg) {
  return `<div class="icon-circle" style="background:${bg};color:${fg}">${ICONS[iconKey] || ""}</div>`;
}

const COLOR_MAP = {
  violet: { bg: "rgba(139,95,191,0.12)", fg: "var(--violet)" },
  teal: { bg: "rgba(47,191,160,0.12)", fg: "var(--teal-deep)" },
  amber: { bg: "rgba(232,163,61,0.15)", fg: "#B97A1E" },
  coral: { bg: "rgba(232,128,107,0.15)", fg: "var(--coral)" },
  navy: { bg: "rgba(27,31,59,0.08)", fg: "var(--navy)" },
};

function iconCircleByColor(iconKey, colorName) {
  const c = COLOR_MAP[colorName] || COLOR_MAP.violet;
  return iconCircle(iconKey, c.bg, c.fg);
}
