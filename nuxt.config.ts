// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
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
      ],
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,300;1,600;1,700&display=swap",
        },
      ],
    },
  },
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
});
