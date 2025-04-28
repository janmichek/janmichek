// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image'],
  ssr: false,
  css: ['~/assets/styles/main.css'],
  // app: {
  //   head: {
  //     meta: [
  //       { hid: 'robots', name: 'robots', content: 'index' },
  //       // { hid: 'description', name: 'description', content: 'Jan Michek personal page' },
  //       { hid: 'description', name: 'title', content: 'Jan Michek personal page' },
  //       // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  //     ],
  //   },
  // },

  devServer: {
    port: 8080,
  },
  compatibilityDate: '2024-11-01',
  postcss: {
    plugins: {
      'autoprefixer': {},
      '@csstools/postcss-global-data': {
        files: ['assets/styles/settings/_variables.css'],
      },
      'postcss-custom-media': {},
      'postcss-import': {},
      'postcss-nested': {},
      'lost': {},
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
        commaDangle: 'always-multiline',
        braceStyle: '1tbs',
        // arrowParens: 'as-needed',
        // operatorLinebreak: 'after',
        // objectCurlySpacing: 'never',
        // arrowParens: 'as-needed',
      },
    },
  },
  image: {
    format: ['webp'],
  },
})
