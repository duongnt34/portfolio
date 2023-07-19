<template>
  <section id="home" class="h-[60rem] flex items-center justify-center z-0">
    <div
      class="container mx-auto flex md:flex-row flex-col-reverse justify-center items-center"
    >
      <div class="home-left flex flex-col max-w-[40rem]">
        <div class="text-6xl font-bold">
          <h1>Full-stack Web Developer</h1>
        </div>
        <div class="text-lg my-5 text-[#555]">
          Hi, I am duongntdev. A passionate Web Developer from Vietnam
        </div>
        <div class="flex gap-5 items-center">
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
      </div>
      <div class="home-right">
        <img
          class="shadow-md rounded-full"
          :src="heroImg"
          width="400"
          height="400"
          alt=""
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import heroImg from "@/assets/images/hero.jpg";
import wavingHandImg from "@/assets/images/waving_hand.png";
</script>

<style scoped></style>
