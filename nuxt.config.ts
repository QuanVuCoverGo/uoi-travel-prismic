// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  css: ["vuetify/lib/styles/main.sass", "~/layouts/global.css"],
  build: {
    transpile: ["vuetify"],
  },
  prismic: {
    endpoint: "uoi-travel-prismic",
    clientConfig: {
      routes: [
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
  routeRules: {
    "/": { redirect: "/workflows/trip-information" },
  },
});
