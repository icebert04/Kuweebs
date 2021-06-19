export default {
    rootUrl: process.env.NODE_ENV === 'production' ? 'https://kuweebs.vercel.app/' : 'http://localhost:3000',
    components: true,
    head: {
        titleTemplate: "Mastering Nuxt: %s",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: ["my-style"]
        },
        meta: [{
            charset: "utf-8",
        }]
    },
    router: {
        prefetchLinks:false,
        // ^ edit prefetch on a link to add or remove fast preloading

        
    },
    plugins: [ 
        '~/plugin/maps.client',
        '~/plugin/dataApi',
        '~/plugin/auth.client',
        '~/plugin/vCalendar.client'],
    modules:['~/modules/auth', '~/modules/algolia', '~/modules/cloudinary', '@nuxtjs/cloudinary'],
    buildModules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    cloudinary: {
        cloudName: 'hz959dpfa',
    },
    image: {
        cloudinary: {
            baseURL: 'https://res.cloudinary.com/hz959dpfa/image/upload/'
        }
    },
    css: ['~/assets/sass/app.scss'],
    build: {
        extractCSS: true,
        Loaders: {
            Limit: 0,
            
        }
    },
    publicRuntimeConfig:{
        auth:{
            cookieName: "idToken",
            clientId: '537712074419-0pao3sshf84cqqtaie3aumvmobmlseji.apps.googleusercontent.com'
        },
        algolia:{
        appId: '8Q707VSJ2H',
        Key: '30a9a88787e544ce0d6e06edaca621ca',
        },
        cloudinary:{
            apiKey: '523549259598461',
        }
    },
    privateRuntimeConfig:{
        algolia:{
            appId: '8Q707VSJ2H',
            key: 'd7f6a5b421dad7fe362fdfdda40d8fc8',
        },
        cloudinary:{
            apiSecret: 'oDMxZEZKW5_a_huGHPlT1fvnV3A',
        },
    },
}
