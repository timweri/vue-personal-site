export default {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
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
        script: [
            { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
        ],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        { src: '~/plugins/fullpage', mode: 'client', ssr: false},
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
    // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources',
    ],
    /*
     ** Build configuration
     */
    build: {
    /*
     ** You can extend webpack config here
     */
        extend(config, ctx) {},
    },
    /*
     ** Style Resources
     */
    styleResources: {
        scss: [
            'assets/scss/main.scss',
        ],
    },
    router: {
        base: '/',
    },
};
