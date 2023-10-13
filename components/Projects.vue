<template>
  <section
    id="projects"
    class="w-full bg-gray-light pt-10 font-poppins md:pt-0"
  >
    <div class="container mx-auto px-5 py-10 md:px-auto md:py-20">
      <h2 class="text-lg font-semibold uppercase text-primary">Portfolio</h2>
      <h3 class="mt-3 text-2xl font-semibold">
        Each project is a unique piece of development 🧩
      </h3>
      <ul class="mt-10 flex flex-col gap-12">
        <li v-for="(project, index) in projects" :key="index">
          <ProjectCard
            :index="index"
            :title="project.title"
            :description="project.description"
            :image-url="project.imageUrl"
            :techs="project.techs"
            :link="project.link"
          ></ProjectCard>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import VulcanoImage from "@/assets/images/project_vulcano.webp";
import VueMoonlightImage from "@/assets/images/project_moonlight.webp";
import BarcodeImage from "@/assets/images/project_barcode.webp";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  techs: Array<string>;
  link: string;
}

const projects = ref<Project[]>([
  {
    title: "Vulcano.vn",
    description: `Vulcano.vn is a fashion website for the Vietnamese fashion brand Vulcano. The website features a wide selection of men's and women's clothing, accessories, and footwear. The website also offers a variety of services, such as online shopping, in-store pickup, and free shipping on orders over a certain amount.`,
    imageUrl: VulcanoImage,
    techs: ["Laravel", "MySql", "Jquery"],
    link: "http://vulcano.vn",
  },
  {
    title: "Vue MoonLight",
    description:
      "A movie and TV database website which is using on TMDB API. The website offers a wealth of information about films and television shows, including cast and crew, plot summaries, ratings, and fan and critical reviews.",
    imageUrl: VueMoonlightImage,
    techs: ["Vue 3", "Tailwind", "TMDB API"],
    link: "https://vue-moonlight.vercel.app/",
  },
  {
    title: "Barcodelive.org",
    description:
      "Barcodelive is a free barcode tool online that allows buyers to barcode search for products and sellers to add/ edit barcode numbers. Barcodelive gives superpowers to consumers and businesses.",
    imageUrl: BarcodeImage,
    techs: ["Laravel", "MySql", "Jquery"],
    link: "https://barcodelive.org/",
  },
]);
</script>

<style lang="scss" scoped></style>
