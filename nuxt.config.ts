export default defineNuxtConfig({
  extends: ['docus'],

  colorMode: {
    preference: 'dark',
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
