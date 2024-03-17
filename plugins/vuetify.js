// plugins/vuetify.js
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, md } from "vuetify/iconsets/md";
import { customSVGs } from "@/customSvgs";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
        custom: customSVGs,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
