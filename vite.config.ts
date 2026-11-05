import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icon.svg"],
      manifest: {
        name: "Faathir El Tasleem",
        short_name: "Fatlem",
        description: "Portfolio Faathir El Tasleem",
        start_url: "/",
        display: "standalone",
        background_color: "#F5F4EF",
        theme_color: "#F5F4EF",
        icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any maskable" }],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,jpg,png}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/(s0\.wp\.com|api\.microlink\.io|iad\.microlink\.io)\//,
            handler: "CacheFirst",
            options: { cacheName: "previews", expiration: { maxEntries: 60, maxAgeSeconds: 604800 }, cacheableResponse: { statuses: [200] } },
          },
        ],
      },
    }),
  ],
});
