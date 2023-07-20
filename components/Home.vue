<template>
  <section id="home" class="bg-[#f9f9f9] h-[100vh] flex flex-col md:items-center md:justify-center items-start pt-20">
    <div
      class="container w-2/3 flex md:flex-row p-10 md:p-0 flex-col-reverse justify-center items-center gap-10 md-gap-0"
    >
      <div class="home-left flex flex-col max-w-[40rem]">
        <div class="text-2xl md:text-6xl font-bold text-center md:text-left">
          <h1>Full-stack Web Developer</h1>
        </div>
        <div class="text-lg my-5 text-[#555] text-center md:text-left">
          Hi, I am duongntdev. A passionate Web Developer from Vietnam
        </div>
        <div class="flex gap-5 items-center justify-center md:justify-start">
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
import heroImg from "@/assets/images/hero.jpg";
import wavingHandImg from "@/assets/images/waving_hand.png";
</script>

<style scoped></style>
