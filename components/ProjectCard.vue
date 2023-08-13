<template>
  <div
    class="flex flex-col gap-5 rounded-2xl bg-white p-5 md:h-96 md:flex-row"
    :class="{ 'md:flex-row-reverse': !isEven(index) }"
  >
    <a
      :href="link"
      ref="projectImageContainer"
      class="h-80 flex-none overflow-hidden rounded-2xl shadow-all-side md:h-auto md:w-[35rem]"
    >
      <img
        loading="lazy"
        ref="projectImage"
        class="h-auto w-full cursor-pointer transition-transform duration-[10000ms] ease-in-out"
        :src="imageUrl"
        alt=""
        @mouseenter="activeTranslate()"
        @mouseleave="deactiveTranslate()"
      />
    </a>
    <div
      class="flex h-full flex-1 flex-col items-center gap-5 md:justify-between md:gap-0"
    >
      <h3 class="text-xl font-semibold uppercase">{{ title }}</h3>
      <p class="px-5 text-gray-dark md:px-10">
        {{ description }}
      </p>
      <ul class="flex flex-row flex-wrap justify-center gap-5 md:px-10">
        <li v-for="(tech, index) in techs" :key="index">
          <button type="button" class="px-3 py-1 font-semibold shadow-all-side">
            {{ tech }}
          </button>
        </li>
      </ul>
      <div>
        <a :href="link" :title="link">
          <button type="button" class="px-3 py-1">
            View Project
            <font-awesome-icon :icon="['fas', 'up-right-from-square']" />
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { arch } from "os";

interface Props {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  techs: Array<string>;
  link: string;
}

const props = defineProps<Props>();

const projectImage = ref();
const projectImageContainer = ref();

const activeTranslate = () => {
  if (projectImage.value && projectImageContainer.value) {
    const imageHeight = projectImage.value.clientHeight;
    const imageContainerHeight = projectImageContainer.value.clientHeight;
    const translatePercent =
      100 - Math.ceil((imageContainerHeight / imageHeight) * 100);

    projectImage.value.style.transform = `translateY(-${translatePercent}%)`;
  }
};

const deactiveTranslate = () => {
  if (projectImage.value) {
    projectImage.value.style.transform = "translateY(0)";
  }
};

const isEven = (number: number) => {
  return number % 2 === 0;
};
</script>

<style scoped></style>
