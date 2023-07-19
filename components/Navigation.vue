<template>
  <div class="container justify-between items-center mx-auto md:px-2 px-5 flex">
    <NuxtLink to="/"><span class="text-2xl">duongntdev</span></NuxtLink>
    <nav id="desktop-nav" class="hidden md:block text-xl">
      <ul class="flex gap-5">
        <li v-for="(menu, index) in menus" :key="index">
          <NuxtLink :to="menu.link">{{ menu.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="md:hidden" @click="toggleMenu">
      <font-awesome-icon class="text-2xl" icon="fa-solid fa-bars-staggered" />
    </div>
    <Transition
      enter-from-class="-translate-x-full"
      enter-to-class="translate-x-0"
      enter-active-class="transition-all duration-500 ease-in-out"
      leave-to-class="-translate-x-full"
      leave-from-class="translate-x-0"
      leave-active-class="transition-all duration-500 ease-in-out"
    >
      <nav
        v-if="isMenuOpen"
        id="mobile-nav"
        class="absolute top-0 left-0 w-full h-full md:hidden items-center justify-center z-10 bg-white flex"
      >
        <ul class="flex flex-col justify-center items-center gap-5 text-3xl">
          <li v-for="(menu, index) in menus" :key="index">
            <NuxtLink :to="menu.link" @click="toggleMenu">{{
              menu.text
            }}</NuxtLink>
          </li>
        </ul>
        <div class="absolute top-5 right-5" @click="toggleMenu">
          <font-awesome-icon class="text-2xl" icon="fa-solid fa-close" />
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menus = ref([
  { text: "Home", link: "#home" },
  { text: "About", link: "#about" },
  { text: "Projects", link: "#projects" },
  { text: "Contact", link: "#contact" },
]);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped></style>
