<template>
    <section id="about" class="w-full font-poppins">
        <div class="container mx-auto px-10 py-10 md:px-64 md:py-40 flex gap-10 items-center flex-col md:flex-row">
            <div class="md:w-2/5">
                <img class="rounded-2xl" :src="AboutMeImage" alt="about me image">
            </div>
            <div class="md:w-3/5 flex flex-col gap-3">
                <h2 class="text-primary text-lg font-semibold uppercase">About Me</h2>
                <h3 class="font-semibold text-xl">A dedicated Full-stack Developer <br>based in Hanoi, Vietnam </h3>
                <p class="text-gray-dark">As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import AboutMeImage from "@/assets/images/about_me.webp";
</script>

<style scoped>

</style>