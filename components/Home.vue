<template>
  <section
    id="home"
    class="h-[100vh] w-full items-start bg-gray-light pt-[15%] md:items-center"
  >
    <div
      class="container mx-auto flex h-full flex-col-reverse items-center justify-end gap-5 p-10 md:h-auto md:flex-row md:justify-center md:gap-10 md:p-0"
    >
      <div
        class="home-left flex max-w-[40rem] flex-col justify-around gap-5 md:gap-5"
      >
        <div class="text-center text-4xl font-bold md:text-left md:text-6xl">
          <h1>Full-stack<br />Web Developer</h1>
        </div>
        <div class="text-gray-dark text-center text-lg md:text-left">
          Hi, I am duongntdev. A passionate Web Developer from Vietnam
        </div>
        <div class="flex items-center justify-center gap-5 md:justify-start">
          <NuxtLink to="#">
            <font-awesome-icon class="text-3xl" :icon="['fab', 'linkedin']" />
          </NuxtLink>
          <NuxtLink to="https://github.com/duongnt34">
            <font-awesome-icon
              class="text-3xl"
              :icon="['fab', 'square-github']"
            />
          </NuxtLink>
        </div>
        <div class="flex flex-col items-center gap-2 md:flex-row md:gap-5">
          <label
            class="border-gray-600 text-gray-dark flex-none border-b pb-2 text-lg md:border-b-0 md:border-r md:pb-0 md:pr-5"
            for=""
            >Tech Stack</label
          >
          <ul class="flex flex-row flex-wrap justify-center gap-2 md:gap-5">
            <li
              class="rounded-full p-2 shadow-2xl md:p-3"
              v-for="(tech, index) in techStack"
              :key="index"
            >
              <img
                class="h-9 w-9 rounded-md"
                :src="tech.logo"
                :title="tech.name"
                :alt="tech.name"
              />
            </li>
          </ul>
        </div>
      </div>
      <div
        class="home-right border-gray-800 h-64 w-64 border-4 bg-cover bg-no-repeat transition-all duration-[4000ms] ease-in-out md:h-96 md:w-96"
        :style="`background-image: url(${HeroImg}); border-radius: ${borderRadius}`"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroImg from "@/assets/images/hero.jpg";
import LaravelLogo from "@/assets/images/laravel_logo.webp";
import MysqlLogo from "@/assets/images/mysql_logo.webp";
import TailwindLogo from "@/assets/images/tailwind_logo.webp";
import TsLogo from "@/assets/images/ts_logo.webp";
import VuejsLogo from "@/assets/images/vuejs_logo.webp";
import { computed } from "vue";

interface BorderRadius {
  radius: string;
  state: boolean;
}

const techStack = [
  {
    name: "Laravel",
    logo: LaravelLogo,
  },
  {
    name: "MySql",
    logo: MysqlLogo,
  },
  {
    name: "Typescript",
    logo: TsLogo,
  },
  {
    name: "Vue Js",
    logo: VuejsLogo,
  },
  {
    name: "Tailwind CSS",
    logo: TailwindLogo,
  },
];

const borderRadiusValues: Record<string, BorderRadius> = {
  default: {
    radius: `67% 33% 42% 58% / 28% 64% 36% 72%`,
    state: true,
  },
  alternate: {
    radius: `37% 63% 59% 41% / 58% 31% 69% 42%`,
    state: false,
  },
};

const borderRadiusValue = ref<BorderRadius>(borderRadiusValues.default);

const borderRadius = computed(() => {
  return borderRadiusValue.value.radius;
});

const toggleBorderRadius = () => {
  borderRadiusValue.value = borderRadiusValue.value.state
    ? borderRadiusValues.alternate
    : borderRadiusValues.default;
};

onMounted(() => {
  toggleBorderRadius();
  setInterval(() => {
    toggleBorderRadius();
  }, 3000);
});
</script>
