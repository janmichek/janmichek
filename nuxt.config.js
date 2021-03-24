import 'babel-polyfill'
import pkg from './package.json'

export default {
  mode: 'spa',

  head: {
    title: pkg.niceName,
    meta: [
      { hid: 'robots', name: 'robots', content: 'index' },
    ],
  },

  loading: { color: pkg.themeColor },

  css: ['~/assets/styles/main.css'],

  plugins: [
    '~/plugins/vue-awesome-swiper',
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
  modules: [
    ['@bazzite/nuxt-optimized-images',
      {
        optimizeImages: true,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
      },
    ],
  ],

  buildModules: [
    '@nuxtjs/stylelint-module',
  ],

  build: {
    extractCSS: true,

    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-short': {},
        'postcss-nested': {},
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

    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
}
