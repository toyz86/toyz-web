export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */  
  /*
  ** Headers of the page
  */
  head: {
    title: 'toyz-web',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.0.0-alpha1/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Poppins'},      
    ],
  },
  /*
  ** Customize the progress bar color
  */
  css: [
    { src: '~/assets/scss/main.scss', lang: 'scss'},
    { src: 'vue-slick-carousel/dist/vue-slick-carousel.css'},
  ],

  plugins: [
    { 
      src: '~/plugins/fullpage', 
      mode: 'client',
    },
    {
      src: '~plugins/bootstrap.js',
      ssr: true,
    },
    {
      src: '~plugins/vueSpinner.js',
      ssr: 'client',
    },
    {
      src: '~plugins/nuxt-gsap.js',
      ssr: 'client',
    },
    {
      src: '~plugins/vue-slick-carousel.js',
      ssr: false
    },    
    {
      src: '~plugins/isotope.js',
      ssr: false
    },
    {
      src: '~plugins/cool-lightbox.js',
      ssr: false
    },        
  ],

  loading: '~/components/loading.vue',
  // loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    ssr: true,
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
        const vueLoader = config.module.rules.find(({ loader }) => loader === 'vue-loader');
        const {
          options: { loaders },
        } = vueLoader || {
          options: {},
        };
        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader]);
          }
        }
        config.module.rules.forEach(rule => changeLoaderOptions(rule.use));
      }

      function changeLoaderOptions(loaders) {
        if (loaders) {
          for (const loader of loaders) {
            if (loader.loader === 'sass-loader') {
              Object.assign(loader.options, {
                includePaths: ['./assets'],
                // data: '@import "_imports";'
              });
            }
          }
        }
      }
    },

  },
  generate: {
    dir: 'public'
  },

  modules: [
    // 'nuxt-fullpage.js',
    'nuxt-gsap',
  ]
}
