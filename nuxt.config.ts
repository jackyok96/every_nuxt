// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'assets/css/style.css',
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/js/bootstrap.bundle.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/Draggable.min.js',
          type: 'text/javascript'
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/flv.js@1.6.2/dist/flv.min.js',
          type: 'text/javascript'
        },
        {
          src: 'js/my_fun.js',
          type: 'text/javascript'
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.0.1/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
        }
      ]
    }
  }  
})
