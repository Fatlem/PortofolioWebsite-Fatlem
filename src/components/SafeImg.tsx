import { useState, type ReactNode } from "react";

interface Props { src: string; alt: string; className?: string; fallback: ReactNode }

/** Gambar lokal; kalau file belum ada, tampilkan fallback tanpa layout bergeser. */
export function SafeImg({ src, alt, className, fallback }: Props) {
  const [failed, setFailed] = useState(false);
  return failed ? <>{fallback}</> : <img src={src} alt={alt} className={className} onError={() => setFailed(true)} loading="lazy" />;
}
