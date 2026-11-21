/* ===================================================================
   HALAMAN: TENTANG KAMI (/tentang-kami)
   =================================================================== */

   const VALUES = [
    { icon: "islamic", color: "navy", title: "Amanah & Integritas", desc: "Pondasi sejak Rumah Harmoni pertama dibangun memegang teguh kejujuran dan tanggung jawab dalam mengemban titipan Allah berupa anak-anak yang dipercayakan kepada kami." },
    { icon: "caregiver", color: "violet", title: "Inklusivitas & Rahmah", desc: "Menerima setiap anak dengan keunikannya masing-masing, mencerminkan sikap kasih sayang (rahmah) kepada sesama makhluk ciptaan Allah tanpa membeda-bedakan." },
    { icon: "growth", color: "teal", title: "Kebermanfaatan & Ihsan", desc: "Berpegang pada semangat menjadi sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain, dengan berupaya berbuat ihsan dalam setiap layanan pendidikan yang diberikan." },
    // { icon: "shield", color: "amber", title: "Aman & Terpercaya", desc: "Keamanan dan kenyamanan anak adalah prioritas tertinggi kami." },
  ];
  
  function renderTentangKami() {
    const aboutImg = "images/tentang-kami/sejarah-kami.jpg";
  
    return `
    <main>
      <section class="page-hero">
        <div class="hero-glow"></div>
        <div class="container page-hero-content">
          <div class="eyebrow">Mengenal Kami Lebih Dekat</div>
          <h1>Tentang Daycare Rumah Harmoni</h1>
          <p>Perjalanan kami menjaga dan menumbuhkan generasi yang berakhlak, sejak tahun pertama berdiri di ${SITE.kota}.</p>
        </div>
      </section>
  
      <section class="section">
        <div class="container about-split">
          <img src="${aboutImg}" alt="Sejarah berdirinya Rumah Harmoni Daycare" class="fade-up" />
          <div class="fade-up">
            <div class="eyebrow">Sejarah Kami</div>
    
            <p>Rumah Harmoni lahir dari pertemuan dua orang yang memiliki keresahan dan tujuan yang sama: membantu orang tua dengan anak berkebutuhan khusus agar anaknya mendapat perlakuan yang tepat. Kepercayaan penuh dari orang tua murid pertama, ujian berupa masa stagnansi, keputusan membuka layanan daycare, hingga bergabungnya orang tua murid sebagai rekan pendiri, membentuk Rumah Harmoni menjadi lembaga yang digerakkan oleh tiga perempuan dengan satu niat: menjadi manusia yang bermanfaat bagi sesama, di jalan yang diridai Allah Subhanahu wa Ta'ala.</p>
          </div>
        </div>
      </section>
  
      <section class="section section-alt">
        <div class="container">
          <div class="section-head center fade-up">
            <div class="eyebrow" style="justify-content:center">Visi & Misi</div>
            <h2>Nilai yang kami pegang dalam setiap pengasuhan</h2>
          </div>
          <div class="card fade-up" style="max-width:760px;margin:0 auto 48px">
            <h4 style="margin-bottom:10px;text-align:center">Visi</h4>
            <p style="margin-bottom:24px;text-align:justify">Menjadi rumah pendidikan yang inklusif, amanah, dan berlandaskan nilai-nilai keislaman, tempat setiap anak dengan keunikan yang telah Allah anugerahkan tumbuh dan berkembang sesuai fitrah dan kebutuhannya, guna mencetak generasi yang berakhlak mulia dan bermanfaat bagi sesama.</p>
            <h4 style="margin-bottom:10px;text-align:center">Misi</h4>
            <ol style="text-align:justify;padding-left:22px;margin:0;list-style:decimal outside">
              <li style="margin-bottom:10px">Memberikan layanan pendidikan dan penanganan yang sesuai kebutuhan setiap anak, sebagai wujud amanah kepada Allah dan kepercayaan orang tua yang menitipkan anaknya.</li>
              <li style="margin-bottom:10px">Membangun kepercayaan melalui pendampingan yang jujur (shidiq), konsisten, transparan, dan berintegritas dalam setiap tindakan.</li>
              <li style="margin-bottom:10px">Memperluas akses pendidikan inklusif, formal maupun non-formal, sebagai bentuk kebermanfaatan (ihsan) bagi masyarakat sekitar.</li>
              <li style="margin-bottom:10px">Menumbuhkan lingkungan belajar yang menerima setiap anak apa adanya, sebagai pengejawantahan nilai bahwa manusia diciptakan dalam sebaik-baik bentuk (QS. At-Tin: 4) dan memiliki kemuliaan yang setara di hadapan Allah.</li>
              <li style="margin-bottom:10px">Menanamkan nilai-nilai akhlak dan spiritual sejak usia dini, untuk membentuk pribadi yang bertakwa, mandiri, dan berakhlakul karimah.</li>
              <li>Menjadi ruang kolaborasi antara pendidik, keluarga, dan masyarakat, dilandasi semangat ta'awun (tolong-menolong dalam kebaikan) untuk mewujudkan tumbuh kembang anak yang optimal.</li>
            </ol>
          </div>
          <div class="feature-grid">
            ${VALUES.map((v, i) => `
              <div class="feature-card fade-up" style="transition-delay:${i * 60}ms">
                ${iconCircleByColor(v.icon, v.color)}
                <h4>${v.title}</h4>
                <p>${v.desc}</p>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
  
      <section class="section">
        <div class="container">
          <div class="section-head center fade-up">
            <div class="eyebrow" style="justify-content:center">Tim Kami</div>
            <h2>Pengasuh berpengalaman & bersertifikat</h2>
          </div>
          <div class="caregiver-grid">
            ${CAREGIVERS.map((c, i) => `
              <div class="caregiver-card fade-up" style="transition-delay:${i * 80}ms">
                <div class="caregiver-photo"><img src="${c.foto}" onerror="this.onerror=null;this.src='${placeholderImg(c.nama.split(',')[0], i + 1, 1, 1)}'" alt="${c.nama}" loading="lazy" /></div>
                <div class="caregiver-body">
                  <h4>${c.nama}</h4>
                  <div class="caregiver-role">${c.peran}</div>
                  <p style="text-align:left">${c.deskripsi}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
  
      
    </main>`;
  }
  