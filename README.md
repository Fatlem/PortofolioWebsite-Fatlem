# 🚀 Fatlem Portfolio — React + Vite + Three.js

Portfolio modern futuristik milik Faathir El Tasleem, dibangun dengan React (Vite), Three.js, Framer Motion, dan Tailwind CSS.

## ✨ Fitur
- 🌑 **Dark Futuristic Design** — glassmorphism, neon cyan/purple/emerald
- 🎯 **3D Interactive Scene** — Three.js floating geometry, reacts to mouse/touch
- ⚡ **Framer Motion** — smooth scroll animations, stagger effects, page transitions
- 📱 **Fully Responsive** — mobile hamburger menu, touch gestures, single-column layout
- 🖱️ **Custom Cursor** — neon ring cursor untuk desktop
- 🃏 **3D Tilt Cards** — project cards dengan perspektif 3D saat di-hover
- 📜 **Timeline** — riwayat experience & education bergaya modern
- 🏆 **Certificates Gallery** — modal viewer untuk sertifikat
- 📬 **Contact Form** — form interaktif + social links

## 🛠️ Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Styling | Tailwind CSS 3 |
| 3D Graphics | Three.js + @react-three/fiber + @react-three/drei |
| Animations | Framer Motion 11 |
| Icons | Lucide React |

## 📁 Struktur Folder
```
fatlem-portfolio/
├── public/
│   ├── logo.png
│   ├── images/          ← foto profil
│   ├── project/         ← screenshot proyek
│   └── certificate/     ← foto sertifikat
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← navigasi + hamburger mobile
│   │   ├── Hero.jsx         ← hero section + typewriter
│   │   ├── Canvas3D.jsx     ← Three.js 3D scene
│   │   ├── About.jsx        ← about + skill bars
│   │   ├── Projects.jsx     ← project cards + 3D tilt + filter
│   │   ├── Experience.jsx   ← timeline
│   │   ├── Certificates.jsx ← certificate grid + modal
│   │   ├── Contact.jsx      ← contact form + social links
│   │   ├── Footer.jsx       ← footer
│   │   └── CustomCursor.jsx ← custom neon cursor
│   ├── data/
│   │   └── portfolioData.js ← SEMUA DATA PORTOFOLIO DI SINI
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```
Buka http://localhost:5173 di browser.

### 3. Build untuk production
```bash
npm run build
```

## ✏️ Cara Kustomisasi

### Update data pribadi
Edit file **`src/data/portfolioData.js`** — semua konten (nama, proyek, skill, sertifikat, timeline) ada di sini. Tidak perlu menyentuh komponen lain.

### Ganti foto profil
Ganti file `public/images/El.jpg` dengan foto kamu.

### Update proyek
Di `portfolioData.js`, edit array `projects`. Taruh screenshot proyek di `public/project/`.

### Ganti warna aksen
Edit `tailwind.config.js` dan `src/index.css` untuk mengubah palet warna.

## 🌐 Deploy ke Netlify
```bash
npm run build
# Upload folder 'dist' ke Netlify, atau connect repo GitHub
```

---
Made with ❤️ by Faathir El Tasleem
