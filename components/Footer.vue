<template>
  <section id="footer" class="w-full bg-[#2d2e32] font-poppins">
    <div
      class="container mx-auto flex flex-col items-center gap-3 py-10 md:flex-row md:justify-between md:px-64 md:py-10"
    >
      <p class="font-bold text-white">
        Copyright © 2023. All rights are reserved
      </p>
      <div
        class="flex items-center justify-center gap-5 text-white md:justify-start"
      >
        <NuxtLink to="https://www.linkedin.com/in/tung-duong-nguyen-627a9b189/">
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
  </section>
</template>
