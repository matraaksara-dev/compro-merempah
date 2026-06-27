# MEREMPAH — Company Profile Website

Website profil perusahaan modern, minimalis, dan profesional bertema terang (light theme) untuk brand **MEREMPAH (Warisan Aksioma Nusantara)**.

## Struktur File Proyek
```
compro-merempah/
│
├── index.html                      # Halaman Utama (One-Page App)
├── comproweb-plan.md               # File Dokumentasi Perencanaan Lengkap
├── sitemap.xml                     # Peta Situs SEO
├── robots.txt                      # Instruksi Crawling Search Engine
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
│   ├── faq.js                      # Logika Buka-Tutup FAQ Accordion (Hide/Unhide)
│   └── scroll-progress.js          # Top Horizontal Scroll Progress Bar
│
└── assets/
    └── images/
        ├── logo-icon.png           # Monogram Logo Icon (Deep Green & Gold)
        └── logo-full.png           # Logo Lengkap (MEREMPAH - Warisan Aksioma Nusantara)
```

## Teknologi & Pustaka CDN yang Digunakan
1. **Tipografi:** Google Fonts - **Cinzel** (Alternatif modern *Copperplate Gothic* untuk Headline) dan **Montserrat** (untuk Body Text).
2. **Animasi Scroll:** **AOS (Animate On Scroll) v2.3.4** untuk visual render transisi dinamis pada elemen.
3. **Diagram/Grafik:** **Chart.js v4** untuk visualisasi riset pasar dan finansial interaktif.
4. **Ikon:** **Lucide Icons** untuk visual ikon berbasis SVG yang bersih dan cepat dimuat.

## Fitur Unggulan UX
- **Scroll Progress Bar:** Indikator progress membaca horizontal di atas halaman.
- **Lazy-Loaded Charts:** Grafik Chart.js hanya dirender saat kontainer masuk viewport guna menghemat memori.
- **Scrollspy Navigation:** Menu navigasi menyala secara otomatis sesuai bagian halaman yang sedang dibaca pelanggan.
- **Animated Number Counter:** Angka operasional dan keuangan bertambah dinamis dari angka 0 ke target saat masuk area pandang.
- **Best Practice FAQ Accordion:** Akordion FAQ responsif yang menyembunyikan/menampilkan jawaban secara mulus dan teratur (hanya 1 FAQ terbuka sekaligus).
- **Color Swatch Copy:** Click-to-copy kode warna hex langsung dari halaman web.

## Cara Menjalankan
Buka file `index.html` secara langsung di browser web apa pun (Chrome, Safari, Firefox, Edge, dll.). Koneksi internet diperlukan saat pertama kali memuat halaman untuk mengunduh library CDN.
