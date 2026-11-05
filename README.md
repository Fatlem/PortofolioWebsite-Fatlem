# Fatlem Portfolio (Vite + React + TS + Tailwind + PWA)

    npm install
    npm run dev      # development
    npm run build    # production (dist/)

- Gambar: taruh di `public/images/` (profile.jpg, workspace.jpg, projects/<slug>.jpg, certificates/<slug>.jpg). Slug dibuat otomatis dari judul (lihat `src/lib/slug.ts`) atau isi field `image`/`image` manual di `src/data/`.
- CV: taruh `public/cv.pdf`.
- Link sosial: edit `src/data/site.ts`.
- Deploy: Netlify (build `npm run build`, publish `dist`).
