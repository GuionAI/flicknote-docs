export default defineNuxtConfig({
  extends: ['docus'],

  colorMode: {
    preference: 'dark',
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'local',
        src: [
          '/fonts/Inter/Inter-VariableFont_opsz,wght.ttf',
          '/fonts/Inter/Inter-Italic-VariableFont_opsz,wght.ttf',
        ],
      },
    ],
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ['normal', 'italic'],
    },
  },

  ui: {
    fonts: false,
  },

  app: {
    head: {
      style: [
        {
          children: 'body { font-family: "Inter", ui-sans-serif, system-ui, sans-serif; }',
        },
      ],
    },
  },

  nitro: {
    preset: 'cloudflare-pages-static',
    prerender: {
      crawlLinks: true,
      routes: ['/getting-started/introduction'],
      ignore: ['/issues', '/api']
    }
  },

  routeRules: {
    '/': { redirect: '/getting-started/introduction' }
  }
})
