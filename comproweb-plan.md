# RENCANA PENGEMBANGAN WEBSITE COMPANY PROFILE
## MEREMPAH — WARISAN AKSIOMA NUSANTARA
**Lokasi File Plan:** `D:\1.1.1.1 PT SEDUHLUR INDO GROUP\PRESENTASI-BRANDSTRATEGY\compro-merempah\comproweb-plan.md`
**Status:** Approved & In Execution

---

## 1. PENDAHULUAN & KONSEP UTAMA
Website Company Profile MEREMPAH dirancang untuk menampilkan seluruh informasi secara transparan, eksplisit, dan mendalam dari dokumen strategi brand Merempah. Mengikuti tren desain web modern tahun 2026, website ini menggunakan pendekatan **"Terang" (Light Mode)** yang clean, dengan visual minimalis dan profesional.

### A. Pilar Desain & UI/UX Best Practice
1. **Aset Warna & Identitas Visual (Sesuai Brand Strategy):**
   * **Deep Mineral Green (#2b3d29)** sebagai warna utama untuk memberikan kesan herbal alami, ketenangan, dan keseriusan (Sage archetype).
   * **Muted Nusantara Gold (#c9a96e)** sebagai warna aksen emas elegan untuk menonjolkan kesan premium (Affordable Luxury).
   * **Industrial Black (#000000)** sebagai warna struktur, garis pembatas, dan teks utama untuk ketegasan modern.
   * **Pure White (#FFFFFF)** dan **Soft Warm Gray (#F9F9FB)** sebagai latar belakang yang clean dan lapang.
2. **Tipografi & Font Pairing:**
   * **Cinzel / Playfair Display** (sebagai alternatif web-safe dari *Copperplate Gothic*) untuk Headline guna memancarkan wibawa dan sejarah warisan nusantara.
   * **Montserrat / Inter** untuk Body Text demi tingkat keterbacaan (readability) yang maksimal pada semua resolusi layar.
3. **Efek Interaktif & Animasi Smooth:**
   * **AOS (Animate On Scroll):** Animasi scroll yang lembut pada tiap kontainer informasi untuk kesan premium yang hidup.
   * **Custom JS Counter:** Angka proyeksi keuangan dan kapasitas gerai akan menghitung naik secara dinamis saat masuk viewport.
   * **Custom Interactive Charts:** Visualisasi data menggunakan **Chart.js v4** dengan animasi rendering bertahap (easing).
   * **FAQ Accordion:** Interaksi expand/collapse yang mulus dengan rotasi ikon indikator dan transisi tinggi berbasis CSS.

---

## 2. STRUKTUR BOILERPLATE DAN FILE PROYEK
Proyek ini dikembangkan menggunakan kerangka kerja web statis terstruktur agar mudah di-maintenance, super cepat dimuat, dan SEO-friendly.

```
compro-merempah/
│
├── index.html                      # Halaman Utama (One-Page App)
├── comproweb-plan.md               # File Dokumentasi Perencanaan (File Ini)
│
├── css/
│   ├── variables.css               # Token Desain (Warna, Spacing, Font)
│   ├── reset.css                   # Normalisasi Browser CSS
│   ├── layout.css                  # Struktur Grid, Flexbox, & Section Container
│   ├── components.css              # Styling Tombol, Kartu, Tabel, & Akordion FAQ
│   ├── animations.css              # Keyframes dan Efek Hover/Transisi
│   ├── charts.css                  # Area Khusus Kanvas Chart & Legend
│   └── responsive.css              # Media Queries Mobile-First
│
├── js/
│   ├── app.js                      # Inisialisasi Utama (AOS, Lucide, Smooth Scroll)
│   ├── navbar.js                   # Navigasi Sticky, Hamburger, & Scrollspy Active Class
│   ├── charts.js                   # Logika & Data Render 6 Grafik Chart.js
│   ├── counter.js                  # Efek Animasi Angka Berjalan (Statistik Finansial)
│   └── faq.js                      # Logika Buka-Tutup FAQ Accordion (Hide/Unhide)
│
└── assets/
    └── images/
        ├── logo-icon.png           # Monogram Logo Icon (Deep Green & Gold)
        ├── logo-full.png           # Logo Lengkap (MEREMPAH - Warisan Aksioma Nusantara)
        ├── hero-bg.jpg             # Background Estetik Hero
        └── products/
            ├── rempah-wangi.png    # Placeholder Visual Rempah Wangi
            └── telang-langit.png   # Placeholder Visual Telang Langit
```

---

## 3. DETAIL KONTEN & STRUKTUR HALAMAN (INDEX.HTML)

Halaman `index.html` dibagi menjadi **15 Bagian Utama** untuk memastikan tidak ada satupun informasi dari dokumen strategi brand yang terlewatkan.

### Bagian 1: Header & Navigation (Sticky Navbar)
* **Konten:** Logo Merempah (Full), Menu Navigasi (Tentang, USP, Menu, Target Market, Finansial, FAQ), tombol CTA "Hubungi Kemitraan".
* **Interaksi:** Navbar menjadi solid putih dengan shadow tipis saat scroll ke bawah. Efek *Active Link* otomatis (Scrollspy) mendeteksi section yang sedang dibaca.

### Bagian 2: Hero Section (The Awakening)
* **Visual:** Latar belakang terang minimalis, tipografi raksasa dengan teks **"MEREMPAH"** dan sub-line **"Warisan Aksioma Nusantara"**.
* **Konten:** Kalimat Inti Brand (Brand Origin Statement): *"Merempah ada karena leluhur kita sudah meninggalkan jawaban. Kami hanya menyajikannya dalam gelas yang lebih indah."*
* **CTA:** Tombol utama "Jelajahi Warisan" dan tombol sekunder "Tonton Video Kampanye".

### Bagian 3: Brand Identity Overview & Color Palette
* **Visual:** Grid interaktif yang menampilkan *The Modern Sage Archetype (70%)* dan *The Everyman Archetype (30%)*.
* **Interaktif:** Swatch warna yang memuat kode HEX (#2b3d29, #c9a96e, #000000, #FFFFFF) dengan fungsi "click-to-copy" dan visualisasi tipografi brand (Cinzel & Montserrat).

### Bagian 4: The Origin Story (Kenapa Cafe Ini Didirikan?)
* **Konten:** Narasi lengkap sejarah transisi dari *Seduhlur* menjadi *Merempah*. Mengungkap celah nyata di Kota Malang: kebutuhan tempat nongkrong produktif (WFC) yang menawarkan menu wellness autentik tanpa membebani tubuh.
* **Elemen:** Kutipan puitis bernada *Blended Sage* dengan efek animasi fade-in.

### Bagian 5: Unique Selling Proposition (The Double Engine)
* **Konten:** Penjelasan mendalam dua keunggulan yang tidak dimiliki kompetitor lain di Malang:
  1. **Mesin 1 — Serious Roastery:** Penyangraian kopi mandiri in-house untuk memastikan kesegaran biji kopi.
  2. **Mesin 2 — Artisan Apothecary:** Sistem Base Rempah segar yang direbus langsung setiap pagi dari Pasar Blimbing (berjarak 1,5 km dari gerai).
* **Tabel Perbandingan Kompetitor:** Tabel responsif modern membandingkan Merempah secara transparan dengan Ramu Space, Warung STMJ Tradisional, dan Chain Coffee (Fore/Kenangan).

### Bagian 6: Pricing & AOV Strategy
* **Konten:** Penjelasan penyesuaian harga rasional dengan rata-rata harga Rp 15.000 per item.
* **Tabel Skenario Pemesanan:** Kalkulasi AOV realistis Rp 23.000 – Rp 27.000 per transaksi (1 minuman utama + 1 pendamping makanan).
* **Visualisasi 3-Tier Pricing:**
  * **Tier 1 (Traffic Magnet):** Rp 5.000 - Rp 7.000 (Es Teh, Kopi Tubruk Seduhlur).
  * **Tier 2 (Sweet Spot):** Rp 12.000 - Rp 18.000 (Bandrek Butter Scotch, Cafe Latte Verde, Rempah Wangi, Telang Langit).
  * **Tier 3 (Value Builder):** Rp 18.000 - Rp 30.000 (STMJ Raja Malam, Wellness Series).

### Bagian 7: Core Products & Supporting Heroes
* **Konten:** Wajah utama brand yang merevolusi persepsi minuman tradisional:
  1. **Core Product 1: Rempah Wangi** (Rasa & Aroma - mengubah persepsi jamu yang pahit menjadi menyenangkan).
  2. **Core Product 2: Rempah Telang Langit** (Visual Aksioma - perubahan warna biru ke ungu secara alami menggunakan reaksi kimia natural jeruk nipis).
  3. **Supporting Products:** Bandrek Butter Scotch & Cafe Latte Verde.
* **Visual:** Galeri kartu modern dengan efek *hover lift* dan badge penunjuk keunikan.

### Bagian 8: Target Audience Persona
* **Konten:** Dua kartu profil interaktif:
  * **Persona A: "The Urban Ritualist" (Usia 20–28 tahun)** — Mahasiswa tingkat akhir/freelancer, mencari WFC tenang, internet cepat, colokan di tiap meja, menu non-bersalah.
  * **Persona B: "The Settled Professional" (Usia 30–45 tahun)** — Pebisnis/eksekutif muda, mencari tempat meeting representatif dan konsistensi rasa premium.

### Bagian 9: Customer Emotional Journey
* **Konten:** Timeline horizontal interaktif yang memetakan emosi pelanggan mulai dari:
  * **Saat Masuk** (Aroma kopi roastery & rempah segar) → **Saat Memesan** (Staf ramah, informatif, "casual & bestie") → **Saat Menikmati** (Kejutan rasa & visual) → **Saat Pulang** (Merasa lebih segar/fokus, dorongan membagikan cerita).

### Bagian 10: Hasil Riset Pasar & Statistik (Mini Research Charts)
Menampilkan 6 grafik Chart.js interaktif dengan data riset pasar:
1. **Chart 1 (Pie): Distribusi Volume Penjualan Harian** (Menunjukkan Tier 2 mendominasi 65% volume penjualan).
2. **Chart 2 (Bar): Proyeksi Omzet Target** (Harian Rp 1.500.000, Bulanan Rp 45.000.000, Tahunan Rp 540.000.000).
3. **Chart 3 (Doughnut): Breakdown Struktur Biaya & HPP** (Menampilkan efisiensi HPP Rempah Dasar & In-house Roasting di kisaran 30%).
4. **Chart 4 (Bar Horizontal): Pertumbuhan Kafe Terdaftar di Malang (2022-2025)** (Riset peningkatan dari 2.200 kafe menjadi 3.500 kafe).
5. **Chart 5 (Line): Proyeksi Pasar Herbal & Tradisional Indonesia (2025-2032)** (Riset data pertumbuhan dari $935 Juta menuju $1.22 Miliar).
6. **Chart 6 (Radar): Merempah vs Kompetitor** (Evaluasi Rasa, Harga, Suasana, Kesehatan, Instagramability, dan Keunikan).

### Bagian 11: Kampanye & Strategi Konten
* **Konten:** Struktur naratif video promosi 60-90 detik (Hook, Tension, Resolve, Proof, CTA).
* **3 Pilar Konten:** Visual Artisan, Customer Lifestyle, dan Aksioma Education.
* **Aturan Komunikasi:** Do's & Don'ts (Misalnya: dilarang menyebut jamu sebagai obat/klaim medis klinis, melainkan bahasa pengalaman hangat/segar/fokus).

### Bagian 12: Proyeksi Keuangan & Parameter Operasional
* **Konten:** Kapasitas duduk 25-45 kursi, target okupasi 60 transaksi per hari, target AOV Rp 25.000.
* **Elemen Animasi:** Counter angka berjalan yang menghitung otomatis dari 0 hingga target operasional saat elemen terdeteksi di layar.

### Bagian 13: Brand Strategy Quick Reference Matrix
* **Konten:** Rangkuman matriks brand dari Bagian 3 dokumen strategi, mencakup tagline, sub-line, archetype, warna, font, core products, target pasar, dan nada bicara (digital vs in-store).

### Bagian 14: FAQ Section (Accordion dengan Fitur Hide/Unhide)
* **Konten:** 6 pertanyaan strategis dari kampanye brief dengan format best-practice akordion. Jawaban tersembunyi secara default dan akan terbuka dengan transisi tinggi serta rotasi ikon chevron ketika diklik.
* **Pertanyaan FAQ:**
  1. Kenapa cafe ini didirikan?
  2. Apa yang membuat cafe ini berbeda?
  3. Siapa pelanggan ideal cafe ini?
  4. Pengalaman seperti apa yang ingin dirasakan pelanggan?
  5. Menu apa yang paling mewakili identitas cafe?
  6. Setelah menonton video ini, apa yang ingin orang lakukan?

### Bagian 15: Footer
* **Konten:** Informasi legalitas (PT Seduhlur Indo Group), peta lokasi Malang (2026), hak cipta, link media sosial, dan hashtag utama (#WarisanAksioma, #MerempahMalang).

---

## 4. KODE BOILERPLATE PENDUKUNG (READY TO WRITE)

### A. Template Inisialisasi HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Company Profile Resmi Merempah - Warisan Aksioma Nusantara. Kafe modern berbasis kopi sangrai sendiri dan biang rempah segar premium di Malang.">
  <meta name="keywords" content="Merempah, Kafe Malang, Kopi Roastery Malang, Jamu Modern, STMJ Premium, WFC Malang, Kuliner Malang">
  <title>MEREMPAH — Warisan Aksioma Nusantara</title>
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="assets/images/logo-icon.png">
  <link rel="canonical" href="http://www.merempah.com/">

  <!-- Google Fonts: Cinzel & Montserrat -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- AOS (Animate On Scroll) CSS -->
  <link href="https://unpkg.com/aos@2.3.4/dist/aos.css" rel="stylesheet">
  
  <!-- CSS Stylesheets -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/layout.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/animations.css">
  <link rel="stylesheet" href="css/charts.css">
  <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
  
  <!-- Dynamic Scroll Progress Indicator -->
  <div id="scroll-progress"></div>

  <!-- Content Containers and Sections here -->

  <!-- CDN Script Dependencies -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>
  
  <!-- Custom JS Modules -->
  <script src="js/app.js"></script>
  <script src="js/navbar.js"></script>
  <script src="js/charts.js"></script>
  <script src="js/counter.js"></script>
  <script src="js/faq.js"></script>
</body>
</html>
```

### B. Konfigurasi Token Desain Utama (`css/variables.css`)
```css
:root {
  /* Brand Color Palette */
  --color-primary: #2b3d29;       /* Deep Mineral Green */
  --color-accent: #c9a96e;        /* Muted Nusantara Gold */
  --color-text-dark: #121212;     /* Industrial Dark Gray/Black */
  --color-text-light: #666666;    /* Soft Muted Gray */
  --color-bg-light: #ffffff;      /* Clean White */
  --color-bg-soft: #fcfbfa;       /* Warm Creamy White */
  --color-border: #e2e8f0;        /* Cool Gray Border */
  --color-success: #10b981;
  
  /* Font Pairings */
  --font-headline: 'Cinzel', Georgia, serif;
  --font-body: 'Montserrat', sans-serif;
  
  /* Spacing Grid (8px based) */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-xxl: 48px;
  --space-section: 80px;

  /* Card and Button Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);
  --shadow-lg: 0 10px 15px -3px rgba(43,61,41,0.08), 0 4px 6px -2px rgba(43,61,41,0.04);
}
```

### C. Logika Inisialisasi Accordion FAQ (`js/faq.js`)
```javascript
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerContainer = item.querySelector('.faq-answer');
    
    questionButton.addEventListener('click', () => {
      const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';
      
      // Close all other open FAQ items (accordion behavior)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          otherItem.querySelector('.faq-answer').style.maxHeight = null;
          otherItem.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      if (isExpanded) {
        questionButton.setAttribute('aria-expanded', 'false');
        answerContainer.style.maxHeight = null;
        item.classList.remove('active');
      } else {
        questionButton.setAttribute('aria-expanded', 'true');
        // Calculate content height for smooth transition
        answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
        item.classList.add('active');
      }
    });
  });
});
```

---

## 5. LANGKAH-LANGKAH EKSEKUSI PENGEMBANGAN
1. **Langkah 1:** Membuat direktori proyek dan folder pendukung (`css/`, `js/`, `assets/images/`, `assets/images/products/`).
2. **Langkah 2:** Menulis file `css/variables.css`, `css/reset.css`, `css/layout.css`, `css/components.css`, `css/animations.css`, `css/charts.css`, dan `css/responsive.css`.
3. **Langkah 3:** Menulis file `js/app.js`, `js/navbar.js`, `js/charts.js`, `js/counter.js`, dan `js/faq.js`.
4. **Langkah 4:** Menyalin file logo placeholder (`logo-icon.png` dan `logo-full.png`) yang telah di-generate sebelumnya ke dalam folder `assets/images/`.
5. **Langkah 5:** Menyusun file `index.html` dengan seluruh 15 bagian konten dan mengintegrasikan file styling serta script logic.
6. **Langkah 6:** Melakukan verifikasi rendering lokal dan memastikan SEO Metadata serta UX best practices terpenuhi secara maksimal.
