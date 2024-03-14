// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  build: {
    transpile: ["vuetify"],
  },
  prismic: {
    endpoint: "uoi-travel-prismic",
    clientConfig: {
      routes: [
        // Resolves the Homepage document to "/"
        {
          type: "page",
          path: "/",
        },
        // Resolves the About Page document to "/about"
        {
          type: "page",
          path: "/workflows/:uid",
        },
      ],
    },
  },
  googleFonts: {
    // Options
  },
});
