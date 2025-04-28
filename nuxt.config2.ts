import 'babel-polyfill'
import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({

  head: {
    title: pkg.niceName,
    meta: [
      { hid: 'robots', name: 'robots', content: 'index' },
    ],
  },

  loading: { color: pkg.themeColor },

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],
})
