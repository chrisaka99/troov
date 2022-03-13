module.exports = {
    modules: ['@nuxtjs/axios'],
    plugins: [
        '@/plugins/bootstrap-vue',
    ],

    css: [
        '@/assets/css/bootstrap.css'
    ],

    js: [
        '@/assets/js/bootstrap.min.js'
    ],
    axios: {
        // proxy: true
    }
}