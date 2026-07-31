export const personalInfo = {
  name: "Faathir El Tasleem",
  nickname: "Fatlem",
  role: "Full Stack Web Developer",
  tagline: "Building digital experiences that matter",
  bio: "Mahasiswa Teknik Informatika di Universitas Dian Nuswantoro, Semarang. Passionate tentang menciptakan website dan aplikasi yang indah, fungsional, dan user-friendly. Saya mengkhususkan diri dalam teknologi web modern dan suka mengubah masalah kompleks menjadi desain yang intuitif dan elegan.",
  bio2: "Ketika tidak coding, saya explore teknologi baru, berkontribusi ke proyek open-source, dan berbagi ilmu melalui blog dan komunitas teknologi.",
  email: "faathireltasleem224@gmail.com",
  phone: "+6285156504046",
  location: "Cikarang Utara, Indonesia",
  github: "https://github.com/Fatlem",
  linkedin: "https://www.linkedin.com/in/faathir-el-tasleem",
  instagram: "https://www.instagram.com/fatelm_",
  university: "Universitas Dian Nuswantoro",
  major: "Teknik Informatika (S1)",
};

export const skills = [
  {
    category: "Frontend",
    color: "cyan",
    items: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 82 },
      { name: "Vite.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "purple",
    items: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "REST API", level: 78 },
      { name: "IndexedDB", level: 72 },
    ],
  },
  {
    category: "Tools & Others",
    color: "emerald",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Netlify", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Wekidiくん",
    description:
      "Platform restoran yang menawarkan pengalaman makan yang menyenangkan. Menampilkan menu makanan lezat dan informasi tentang tempat makan terbaik. Desain playful dengan karakter kartun memberikan sentuhan modern dan engaging.",
    image: "/project/wekidi2.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    live: "https://wekidikun.netlify.app/",
    github: "#",
    color: "cyan",
  },
  {
    id: 2,
    title: "DicoStory",
    description:
      "Platform berbagi cerita di mana pengguna dapat mengunggah dan berbagi pengalaman pribadi. Dengan antarmuka sederhana namun interaktif, fitur 'View Details' dan 'Add Story' memudahkan pengguna berpartisipasi dalam komunitas.",
    image: "/project/dicostory2.png",
    tech: ["HTML5", "JavaScript", "Node.js", "Vite.js", "IndexedDB API"],
    category: "Fullstack",
    live: "https://dicostoryv2.netlify.app/",
    github: "#",
    color: "purple",
  },
  {
    id: 3,
    title: "Peduli Sehat",
    description:
      "Platform kesehatan yang mengintegrasikan teknologi AI untuk mendeteksi gejala penyakit lebih awal. Pengguna mendapat rekomendasi pengobatan berdasarkan deteksi AI. Fitur utama: deteksi penyakit, validasi gejala, dan edukasi kesehatan.",
    image: "/project/pedulisehat2.png",
    tech: ["HTML5", "JavaScript", "Node.js", "Vite.js", "AI Integration"],
    category: "Fullstack",
    live: "https://peduli-sehat-capstone.netlify.app/",
    github: "#",
    color: "emerald",
  },
  {
    id: 4,
    title: "Elcode",
    description:
      "Layanan bantuan coding yang dibangun oleh alumni IT dan developer senior dari universitas terkemuka. Dengan 10+ proyek selesai, Elcode membantu mahasiswa informatika menavigasi tantangan tugas dengan solusi bersih dan terstruktur.",
    image: "/project/elcode.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    live: "https://elcode.netlify.app/",
    github: "#",
    color: "cyan",
  },
  {
    id: 5,
    title: "SIRKULOPI",
    description:
      "Proyek bisnis hijau dari Pontianak yang mengubah limbah ampas kopi menjadi briket biomassa berkualitas tinggi sebagai bahan bakar ramah lingkungan. Mengusung misi sosial dengan melibatkan penyandang disabilitas sebagai mitra produksi setara.",
    image: "/project/SIRKULOPI.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Frontend",
    live: "https://sirkulopi.netlify.app/",
    github: "#",
    color: "emerald",
  },
  {
    id: 6,
    title: "El - FunBooth",
    description:
      "Aplikasi web photobooth interaktif untuk mengambil foto dengan berbagai filter warna, bingkai (frame) estetik, dan kustomisasi teks banner. Dilengkapi dengan kontrol privasi kamera serta galeri foto yang dapat diunduh secara instan.",
    image: "/project/el-funbooth.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    category: "Frontend",
    live: "https://el-funbooth.netlify.app/",
    github: "#",
    color: "purple",
  },
  {
    id: 7,
    title: "ElSplitStruk",
    description:
      "Aplikasi manajemen keuangan dan rekap pengeluaran pintar. Dilengkapi fitur scan struk otomatis, pemisahan tagihan (split bill), rekap pengeluaran per kategori, serta analisis laporan & statistik untuk mempermudah pencatatan transaksi harian secara praktis.",
    image: "/project/elsplitstruk.png",
    tech: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"], 
    category: "Fullstack",
    live: "https://elsplit.netlify.app/",
    github: "#",
    color: "emerald",
  },
];

export const certificates = [
  {
    title: "Starting with Programming to Become a Software Developer",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Memulai Dasar Pemrograman untuk Menjadi Pengembang.jpg",
    description:
      "Pendekatan terstruktur untuk pemula yang ingin memulai perjalanan menjadi software developer. Mencakup dasar-dasar pemrograman, struktur data, algoritma, dan prinsip coding.",
  },
  {
    title: "Introduction to Programming Logic (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg",
    description:
      "Konsep inti logika pemrograman: algoritma, flowchart, dan pemikiran logis. Belajar mendekati pemecahan masalah secara metodis dan mendesain program yang efisien.",
  },
  {
    title: "Basic Git with GitHub",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Dasar Git dengan GitHub.jpg",
    description:
      "Kursus fundamental untuk version control menggunakan Git dan GitHub untuk mengelola dan berkolaborasi pada proyek. Melacak perubahan kode, bekerja dengan branch, dan berkontribusi ke open-source.",
  },
  {
    title: "Introduction to Web Programming Basics",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Dasar Pemrograman Web.jpg",
    description:
      "Pengenalan pemrograman web mencakup HTML, CSS, dan JavaScript. Belajar cara kerja website, struktur halaman web, dan cara membuat halaman web interaktif.",
  },
  {
    title: "Basic JavaScript Programming",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Dasar Pemrograman JavaScript.jpg",
    description:
      "Kursus tingkat pemula memperkenalkan konsep pemrograman menggunakan JavaScript. Mencakup variabel, tipe data, control flow, fungsi, dan loop untuk membangun elemen web interaktif.",
  },
  {
    title: "Building Front-End Web for Beginners",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Membuat Front-End Web untuk Pemula.jpg",
    description:
      "Panduan membuat proyek web front-end pertama. Pembelajaran hands-on tentang desain dan pengembangan website menggunakan HTML, CSS, dan JavaScript beserta praktik terbaik aksesibilitas.",
  },
  {
    title: "Fundamentals of Front-End Web Development",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Fundamental Front-End Web Development.jpg",
    description:
      "Dasar-dasar pengembangan web front-end termasuk HTML, CSS, dan JavaScript. Membangun website interaktif dengan desain yang bersih, fungsional, dan menarik secara visual.",
  },
  {
    title: "Intermediate Web Development",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Pengembangan Web Intermediate.jpg",
    description:
      "Teknik dan konsep lanjutan dalam pengembangan web: front-end dan back-end, framework, integrasi API, dan strategi optimasi untuk platform web yang responsif dan user-friendly.",
  },
  {
    title: "Beginner Back-End Development with JavaScript",
    issuer: "Dicoding Indonesia",
    image: "/certificate/Belajar Back-End Pemula dengan JavaScript.jpg",
    description:
      "Esensial pengembangan back-end menggunakan JavaScript dan Node.js. Pemrograman sisi server, penanganan database, bekerja dengan API, dan membangun aplikasi server-side yang skalabel.",
  },
];

export const timeline = [
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Freelance / ElCode",
    description:
      "Membangun platform Elcode sebagai layanan bantuan coding untuk mahasiswa informatika. Menyelesaikan 10+ proyek dengan solusi yang clean dan terstruktur.",
    type: "work",
    color: "cyan",
  },
  {
    year: "2025",
    title: "Capstone Project: Peduli Sehat",
    company: "Dicoding Indonesia",
    description:
      "Mengembangkan platform kesehatan berbasis AI untuk deteksi gejala penyakit, sebagai proyek akhir program Bangkit/Dicoding.",
    type: "project",
    color: "purple",
  },
  {
    year: "2024",
    title: "Intermediate Web Development Certified",
    company: "Dicoding Indonesia",
    description:
      "Menyelesaikan pembelajaran pengembangan web intermediate, mencakup teknik front-end dan back-end lanjutan.",
    type: "education",
    color: "emerald",
  },
  {
    year: "2023",
    title: "Mahasiswa Aktif - Teknik Informatika",
    company: "Universitas Dian Nuswantoro, Semarang",
    description:
      "Mulai perjalanan akademik di bidang Teknik Informatika. Fokus pada pengembangan web, algoritma, dan pemrograman berorientasi objek.",
    type: "education",
    color: "cyan",
  },
  {
    year: "2023",
    title: "Front-End Developer Journey",
    company: "Self-Learning & Dicoding",
    description:
      "Memulai perjalanan menjadi front-end developer. Mempelajari HTML, CSS, JavaScript, dan React. Menyelesaikan berbagai sertifikasi Dicoding.",
    type: "education",
    color: "purple",
  },
];
