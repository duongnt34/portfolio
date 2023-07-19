<template>
  <div class="container justify-between mx-auto px-2 flex">
    <NuxtLink to="/">duongntdev</NuxtLink>
    <nav id="desktop-nav" class="hidden md:block">
      <ul class="flex gap-5">
        <li v-for="(menu, index) in menus" :key="index">
          <NuxtLink :to="menu.link">{{ menu.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="absolute md:hidden top-3 right-3">
        <font-awesome-icon class="text-xl" icon="fa-solid fa-bars" />
    </div>
    <nav
      id="mobile-nav"
      class="absolute top-0 left-0 w-full h-full md:hidden flex items-center justify-center z-10 bg-white"
    >
        <ul class="flex flex-col justify-center items-center gap-5 text-xl">
          <li v-for="(menu, index) in menus" :key="index">
            <NuxtLink :to="menu.link">{{ menu.text }}</NuxtLink>
          </li>
        </ul>
        <div class="absolute top-3 right-3">
            <font-awesome-icon class="text-xl" icon="fa-solid fa-close" />
        </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const menus = ref([
  { text: "Home", link: "/" },
  { text: "About", link: "/#about" },
  { text: "Projects", link: "/#projects" },
  { text: "Contact", link: "/#contact" },
]);

const toggleMenu = () => {
    
}
</script>

<style scoped></style>
