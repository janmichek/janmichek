import dotenv from 'dotenv'
import 'babel-polyfill'
import webpack from 'webpack'
import path from 'path'
import pkg from './package.json'

dotenv.config()

export default {
  mode: 'universal',

  head: {
    title: pkg.niceName,
    meta: [
      { hid: 'robots', name: 'robots', content: process.env.ALLOW_INDEXING ? 'index' : 'noindex' },
    ],
  },

  loading: { color: pkg.themeColor },

  css: ['~/assets/styles/main.css'],

  plugins: [
    '~/plugins/vue-moment',
    '~/plugins/listify',
    '~/plugins/vue-filters',
  ],

  modules: [
    '@nuxtjs/dotenv',

    ['@nuxtjs/pwa', {
      meta: {
        name: pkg.niceName,
        theme_color: pkg.themeColor,
        lang: pkg.lang,
        icon: true,
        ogImage: false,
        ogTitle: false,
        ogUrl: 'janmichek.com',
      },
      manifest: {
        name: pkg.niceName,
        short_name: pkg.niceName,
        theme_color: pkg.themeColor,
        lang: pkg.lang,
      },
    }],

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
    transpile: ['vue-clamp', 'resize-detector'],
    plugins: [
      new webpack.ContextReplacementPlugin(
        /moment[/\\]locale$/,
        /en|cs/,
      ),
    ],

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

      const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i')
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        exclude: path.resolve(__dirname, 'assets/images/icons'),
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]',
        },
      })
    },
  },

  generate: {
    dir: 'public',
  },
}
