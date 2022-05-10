import 'babel-polyfill'
import pkg from './package.json'

import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({

  components: {
    global: true,
    dirs: ['~/components'],
  },

  // https://github.com/nuxt/bridge/issues/27
  // bridge: {
  //   nitro: false,
  // },

  // bind click through for autoimported components
  bridge: {
    nitro: process.env.NODE_ENV !== 'production',
    autoImports: true,
  },
  // Your existing configuration
  // ssr: false,
  //
  static: {
    prefix: false,
  },

  target: 'static',

  head: {
    title: pkg.niceName,
    meta: [
      { hid: 'robots', name: 'robots', content: 'index' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },

  loading: { color: pkg.themeColor },

  css: ['~/assets/styles/main.css'],

  plugins: [
    '~/plugins/vue-awesome-swiper',
  ],
  modules: [
    'nuxt-rfg-icon',
    ['@aceforth/nuxt-optimized-images',
      {
        optimizeImages: true,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
      },
    ],
  ],

  // buildModules: [
  //   '@nuxtjs/stylelint-module',
  // ],


  buildModules: [
    // Simple usage
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-short': {},
        'postcss-nested': {},
        'postcss-custom-media': {
          importFrom: [
            'assets/styles/settings/_variables.css',
          ],
        },
        'postcss-color-mod-function': {
          importFrom: [
            'assets/styles/settings/_variables.css',
            'assets/styles/settings/_mapping.css',
          ],
        },
        lost: {},
      },
      preset: {
        stage: 0,
        importFrom: [
          'assets/styles/settings/_variables.css',
          'assets/styles/settings/_mapping.css',
        ],
      },
    },

    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/,
    //     })
    //   }
    // },
  },
})
