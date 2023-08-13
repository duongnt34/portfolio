<template>
  <section id="about" class="w-full pt-10 font-poppins md:pt-0">
    <div
      class="container mx-auto flex flex-col items-center gap-10 px-5 py-10 md:flex-row md:px-64 md:py-20"
    >
      <div class="md:w-2/5">
        <img class="rounded-2xl" :src="AboutMeImage" alt="about me image" />
      </div>
      <div class="flex flex-col gap-3 md:w-3/5">
        <h2 class="text-lg font-semibold uppercase text-primary">About Me</h2>
        <h3 class="text-xl font-semibold">
          A dedicated Full-stack Developer <br />based in Hanoi, Vietnam
        </h3>
        <p class="text-gray-dark">
          I am an experienced web developer with a Bachelor's degree in Computer
          Science and 3 years of experience developing engaging, user-friendly
          websites. Able to work collaboratively with teams or independently to
          meet project goals and timelines. Strong problem-solving skills and
          attention to detail.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AboutMeImage from "@/assets/images/about_me.webp";
</script>
