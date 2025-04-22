import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from 'vite-plugin-pwa'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/plausible'],
  plausible: {
    domain: 'hetzner.app',
    apiHost: 'https://tracking.jmse.cloud'
  },
  vite: {
    plugins: [
      tailwindcss(),
      VitePWA({ registerType: 'autoUpdate' })
    ],
  },
})