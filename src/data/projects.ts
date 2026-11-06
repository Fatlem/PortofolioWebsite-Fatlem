export type Category = "Web App" | "PWA" | "AI/ML" | "Game" | "F&B / Landing";
export interface Project { title: string; description: string; tech: string[]; category: Category; link?: string; image?: string }

export const categories: ("All" | Category)[] = ["All", "Web App", "PWA", "AI/ML", "Game", "F&B / Landing"];
const n = (s: string) => `https://${s}.netlify.app/`;

export const projects: Project[] = [
  { title: "Peduli Sehat", image: "/images/cards/pedulisehat.webp", category: "AI/ML", link: n("peduli-sehat-capstone"), tech: ["React.js", "AI (LSTM)", "Tailwind CSS"], description: "Platform kesehatan terintegrasi AI (LSTM) untuk mendeteksi gejala penyakit lebih awal dan memberikan rekomendasi pengobatan." },
  { title: "Mount Yukihana", category: "Game", tech: ["Roblox Studio", "Lua"], description: "Obby game di Roblox dengan sistem anti-cheat presisi dan pengalaman gameplay interaktif." },
  { title: "Science Quest", category: "Game", tech: ["Unity / Web", "C#"], description: "Gim edukasi interaktif untuk belajar sains (P2MW 2025 Kemendikbudristek RI)." },
  { title: "Wekidiくん", image: "/images/cards/wekidi.webp", category: "Web App", link: n("wekidiv2"), tech: ["React.js", "Tailwind CSS", "PWA"], description: "Platform restoran interaktif dengan desain playful dan karakter kartun untuk menjelajah tempat makan terbaik." },
  { title: "DicoStory", image: "/images/cards/dicostory.webp", category: "PWA", link: n("dicostoryv2"), tech: ["JavaScript", "REST API", "PWA"], description: "Platform berbagi cerita komunitas interaktif dengan fitur unggah pengalaman pribadi, View Details, dan Add Story." },
  { title: "Elcode", image: "/images/cards/elcode.webp", category: "Web App", link: n("elcode"), tech: ["React.js", "Tailwind CSS"], description: "Platform layanan bantuan coding profesional oleh developer senior untuk membantu mahasiswa informatika." },
  { title: "SIRKULOPI", image: "/images/cards/sirkulopi.webp", category: "Web App", link: n("sirkulopi"), tech: ["Web Design", "Green Tech"], description: "Proyek bisnis hijau pengolah limbah ampas kopi menjadi briket biomassa ramah lingkungan dengan misi inklusi sosial." },
  { title: "ElSplitStruk", image: "/images/cards/elsplitstruk.webp", category: "Web App", link: n("elsplit"), tech: ["React.js", "OCR API", "Tailwind CSS"], description: "Aplikasi manajemen keuangan pintar dengan fitur scan struk otomatis, split bill, dan analisis statistik pengeluaran." },
  { title: "El - FunBooth", image: "/images/cards/el-funbooth.webp", category: "Web App", link: n("el-funbooth"), tech: ["JavaScript", "WebRTC", "Canvas API"], description: "Aplikasi web photobooth interaktif dengan filter warna, frame estetik, kustomisasi banner, dan unduh instant." },
  { title: "Tabunganku", image: "/images/cards/tabunganku.webp", category: "PWA", link: n("tabnganku"), tech: ["React.js", "PWA", "LocalStorage"], description: "Progressive Web App (PWA) pencatat keuangan pribadi, alokasi gaji bulanan, target tabungan, dan grafik transaksi." },
  { title: "AetherChat", image: "/images/cards/aetherchat.webp", category: "PWA", link: n("pawaetherchat"), tech: ["React.js", "Firebase Auth", "Firestore"], description: "Aplikasi chat realtime multiplatform dengan akun pengguna, daftar teman, saluran publik/pribadi via Firebase." },
  { title: "Tangi Coffee Kuningan", image: "/images/cards/tangicoffee.webp", category: "F&B / Landing", link: n("tangi-coffe-kuningan"), tech: ["React.js", "Tailwind CSS", "WhatsApp API"], description: "Website kedai kopi di Kuningan, Jakarta Selatan. Terintegrasi menu, ulasan, Google Maps, dan pesan WhatsApp." },
  { title: "Okky Bakery", image: "/images/cards/okky-bakery.webp", category: "F&B / Landing", link: n("okky-bakery"), tech: ["React.js", "Tailwind CSS", "WhatsApp API"], description: "Website profil toko roti di Guntur, Jakarta Selatan. Menampilkan menu favorit, cerita toko, lokasi peta, dan order WhatsApp." },
  { title: "Arah Coffee Setiabudi", image: "/images/cards/arah-coffee-setiabudi.webp", category: "F&B / Landing", link: n("arah-coffe-setiabudi"), tech: ["React.js", "Tailwind CSS", "WhatsApp API"], description: "Website profil kedai kopi di Setiabudi, Jakarta Selatan. Memuat layanan dine-in/takeaway, lokasi peta, dan jam buka." },
];
