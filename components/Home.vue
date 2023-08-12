<template>
  <section id="home" class="h-[100vh] container mx-auto md:items-center md:justify-center items-start pt-[15%]">
    <div
        class="h-full md:h-auto flex md:flex-row p-10 md:p-0 flex-col-reverse justify-end md:justify-center items-center gap-5 md:gap-10"
    >
      <div class="home-left flex flex-col max-w-[40rem] justify-around md:gap-5 gap-5">
        <div class="text-4xl md:text-6xl font-bold text-center md:text-left">
          <h1>Full-stack<br>Web Developer</h1>
        </div>
        <div class="text-lg text-gray-600 text-center md:text-left">
          Hi, I am duongntdev. A passionate Web Developer from Vietnam
        </div>
        <div class="flex gap-5 items-center justify-center md:justify-start">
          <NuxtLink to="#">
            <font-awesome-icon class="text-3xl" :icon="['fab', 'linkedin']"/>
          </NuxtLink>
          <NuxtLink to="https://github.com/duongnt34">
            <font-awesome-icon
                class="text-3xl"
                :icon="['fab', 'square-github']"
            />
          </NuxtLink>
        </div>
        <div class="flex flex-col md:flex-row items-center gap-2 md:gap-5">
          <label class=" flex-none md:border-r border-b md:border-b-0 border-gray-600 pb-2 md:pb-0 md:pr-5 text-lg text-gray-600" for="">Tech Stack</label>
          <ul class="flex flex-row flex-wrap gap-2 md:gap-5 justify-center">
            <li class="shadow-2xl rounded-full p-2 md:p-3" v-for="(tech, index) in techStack" :key="index">
              <img class="w-9 h-9 rounded-md" :src="tech.logo" :title="tech.name" :alt="tech.name">
            </li>
          </ul>
        </div>
      </div>
      <div
          class="home-right w-64 h-64 md:w-96 md:h-96 bg-no-repeat bg-cover border-4 border-gray-800 ease-in-out transition-all duration-[3000ms]"
          :style="`background-image: url(${HeroImg}); border-radius: ${borderRadius}`">
      </div>
    </div>
    <div class="skills container w-2/3 flex">
      <div class="font-bold border-r border-gray-500 pr-5">Tech Stack</div>
      <ul>
        <li>
          <img src="" alt="">
        </li>
      </ul>
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
import {computed} from 'vue';

interface BorderRadius {
  radius: string;
  state: boolean;
}

const techStack = [
  {
    name: "Laravel",
    logo: LaravelLogo
  },{
    name: "MySql",
    logo: MysqlLogo
  },{
    name: "Typescript",
    logo: TsLogo
  },{
    name: "Vue Js",
    logo: VuejsLogo
  },{
    name: "Tailwind CSS",
    logo: TailwindLogo
  }

]

const borderRadiusValues: Record<string, BorderRadius> = {
  default: {
    radius: `67% 33% 42% 58% / 28% 64% 36% 72%`,
    state: true
  },
  alternate: {
    radius: `37% 63% 59% 41% / 58% 31% 69% 42%`,
    state: false
  }
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
    toggleBorderRadius()
  }, 3000)
})

</script>
