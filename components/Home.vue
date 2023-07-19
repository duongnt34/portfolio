<template>
    <section id="home">
        <div class="container mx-auto flex md:flex-row flex-col-reverse justify-center items-center">
            <div class="home-left flex flex-col">
                <div>Full-stack Web Developer</div>
                <div>Hi, I am duongntdev. A passionate Web Developer from Vietnam</div>
                <div class="flex gap-5 items-center">
                    <NuxtLink to="#">
                        <font-awesome-icon class="text-3xl" :icon="['fab', 'linkedin']" />
                    </NuxtLink>
                    <NuxtLink to="https://github.com/duongnt34">
                        <font-awesome-icon class="text-3xl" :icon="['fab', 'square-github']" />
                    </NuxtLink>
                </div>
            </div>
            <div class="home-right">
                <img src="" alt="">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>