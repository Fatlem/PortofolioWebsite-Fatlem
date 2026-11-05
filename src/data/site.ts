export const nav = [
  ["Home", "#home"], ["About", "#about"], ["Experience", "#experience"],
  ["Projects", "#projects"], ["Skills", "#skills"], ["Certificates", "#certificates"], ["Contact", "#contact"],
] as const;

export const socials = [
  { name: "GitHub", href: "https://github.com/Fatlem", label: "github.com/Fatlem" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/faathir-el-tasleem/", label: "linkedin.com/in/faathir-el-tasleem" },
  { name: "Email", href: "mailto:faathireltasleenm321@gmail.com", label: "faathireltasleenm321@gmail.com" },
  { name: "WhatsApp", href: "https://wa.me/6285156504046?text=Halo%20Faathir%2C%20saya%20melihat%20portofolio%20kamu.", label: "+6285156504046" },
] as const;

export const CV = { href: "/CV_Faathir_El_Tasleem.pdf", filename: "CV_Faathir_El_Tasleem.pdf" };

export const skills = ["JavaScript","Lua","HTML & CSS","Node.js","Laravel","UI/UX Design","Git & GitHub","React.js","PHP","MySQL","Tailwind CSS","Next.js","Roblox Studio","Figma"];
export const languages = [["Bahasa Indonesia", "Fasih / Native"], ["English", "Intermediate"]] as const;
export const about = [
  ["Work", "Kemenko Pangan (Bidang Manajemen Kinerja, Data, dan Informasi - MKDI)"],
  ["Education", "S.Kom. Teknik Informatika (S1), Universitas Dian Nuswantoro"],
  ["Based in", "Cikarang Utara, Indonesia"],
  ["Status", "Available for work"],
] as const;
