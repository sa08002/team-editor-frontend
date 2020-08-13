import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  srcDir: 'app',
  env: {
    baseUrl: 'http://localhost:3000',
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  plugins: ['~/plugins/cookie-storage.js', '~/plugins/axios.js'],
  components: true,
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxt/content'],
  axios: {
    baseURL: 'http://localhost:3000',
  },
  content: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    },
  },
  build: {},
}

export default config
