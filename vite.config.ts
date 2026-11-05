import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.png'],
      manifest: {
        name: 'Faathir El Tasleem',
        short_name: 'Fatlem',
        description: 'Portfolio Faathir El Tasleem',
        start_url: '/',
        display: 'standalone',
        background_color: '#F5F4EF',
        theme_color: '#F5F4EF',
        icons: [
          {
            src: '/logo.png',
            sizes: '192x192 512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ]
});