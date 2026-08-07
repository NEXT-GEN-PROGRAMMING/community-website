// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  // Register the Nuxt modules we just installed
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint'
  ],

  // Optional: Set default color mode
  colorMode: {
    preference: 'dark'
  },

  // Bundle every icon used in the app locally so icons render offline
  // and in production (no runtime dependency on the Iconify CDN).
  // `scan` covers icons in .vue files; icons referenced from data modules
  // are listed explicitly.
  icon: {
    clientBundle: {
      scan: true,
      icons: [
        'heroicons:chat-bubble-left-right',
        'heroicons:fire',
        'heroicons:map',
        'heroicons:squares-2x2',
        'heroicons:document-text',
      ]
    }
  }
})
