// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  app: {
    head: {
      title: "duongntdev - Web Developer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "duongntdev's portfolio - Hi! I'm Tung Duong Nguyen, a full-stack web developer",
        },
        {
          name: "My personal portfolio",
          content: "Full Stack Web Developer - Tung Duong Nguyen",
        },
        {
          property: "og:title",
          content: "duongntdev - Web Developer",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "duongntdev - Web Developer",
        },
        {
          property: "og:description",
          content:
            "duongntdev's portfolio - Hi! I'm Tung Duong Nguyen, a full-stack web developer",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "duongntdev's portfolio - Hi! I'm Tung Duong Nguyen, a full-stack web developer",
        },
      ],
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  googleFonts: {
    display: "swap",
    families: {
      Poppins: {
        wght: [300, 400, 600, 700],
        ital: [1],
      },
    },
  },
});
