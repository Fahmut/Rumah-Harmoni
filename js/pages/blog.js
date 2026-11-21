/* ===================================================================
   HALAMAN: BLOG PARENTING (/blog)
   Tombol "Baca selengkapnya" membuka popup/modal berisi artikel
   lengkap, tanpa pindah halaman dan tanpa membuka WhatsApp.
   =================================================================== */

function renderBlog() {
  const cards = BLOG_POSTS.map((post, i) => `
    <article class="blog-card fade-up" style="transition-delay:${(i % 3) * 70}ms">
      <div class="blog-card-image"><img src="${placeholderImg(post.kategori, i, 16, 10)}" alt="${post.judul}" /></div>
      <div class="blog-card-body">
        <div class="blog-meta">${post.kategori} · ${post.tanggal}</div>
        <h4>${post.judul}</h4>
        <p>${post.ringkas}</p>
        <button type="button" class="blog-read-more" data-blog-id="${post.id}">Baca selengkapnya ${ICONS.arrowRight}</button>
      </div>
    </article>
  `).join("");

  return `
  <main>
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container page-hero-content">
        <div class="eyebrow">Tips & Wawasan</div>
        <h1>Blog Parenting</h1>
        <p>Tips pola asuh, tumbuh kembang anak, resep MPASI, dan jawaban pertanyaan seputar penitipan anak.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="blog-grid">${cards}</div>
      </div>
    </section>

    <!-- MODAL ARTIKEL LENGKAP -->
    <div class="blog-modal-overlay" id="blog-modal-overlay">
      <div class="blog-modal" role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
        <button type="button" class="blog-modal-close" id="blog-modal-close" aria-label="Tutup">&times;</button>
        <div id="blog-modal-body"></div>
      </div>
    </div>
  </main>`;
}

function openBlogModal(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  if (!post) return;

  const overlay = document.getElementById("blog-modal-overlay");
  const body = document.getElementById("blog-modal-body");
  if (!overlay || !body) return;

  const konten = post.konten && post.konten.length
    ? post.konten.map(par => `<p>${par}</p>`).join("")
    : `<p>${post.ringkas}</p>`;

  body.innerHTML = `
    <div class="blog-meta">${post.kategori} · ${post.tanggal}</div>
    <h2 id="blog-modal-title">${post.judul}</h2>
    <div class="blog-modal-content">${konten}</div>
    <div class="blog-modal-footer">
      <a href="${waLink(`Assalamu'alaikum, saya ingin bertanya lebih lanjut soal artikel "${post.judul}"`)}" target="_blank" rel="noopener" class="btn btn-whatsapp btn-sm">${ICONS.whatsapp}<span>Tanya Lebih Lanjut</span></a>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeBlogModal() {
  const overlay = document.getElementById("blog-modal-overlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}

function initBlog() {
  document.querySelectorAll("[data-blog-id]").forEach(btn => {
    btn.addEventListener("click", () => openBlogModal(btn.dataset.blogId));
  });

  const overlay = document.getElementById("blog-modal-overlay");
  const closeBtn = document.getElementById("blog-modal-close");

  if (closeBtn) closeBtn.addEventListener("click", closeBlogModal);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeBlogModal();
    });
  }

  document.addEventListener("keydown", function escListener(e) {
    if (e.key === "Escape") closeBlogModal();
  });
}
