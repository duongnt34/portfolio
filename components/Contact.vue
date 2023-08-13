<template>
  <section id="contact" class="w-full py-5 font-poppins md:pt-0">
    <div
      class="container mx-auto flex flex-col items-start px-5 py-5 md:px-64 md:py-20"
    >
      <h2 class="w-full text-lg font-semibold uppercase text-primary">
        Contact
      </h2>
      <h3 class="mt-3 w-full text-2xl font-semibold">
        Don't be shy! Hit me up! 👇
      </h3>
      <div class="mt-10 flex flex-col gap-10 md:flex-row md:gap-20">
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full p-5 shadow-all-side"
          >
            <font-awesome-icon
              class="text-2xl text-primary"
              :icon="['fas', 'map-location-dot']"
            />
          </div>
          <div class="flex flex-col justify-around">
            <h3 class="text-lg font-semibold">Location</h3>
            <h4 class="text-gray-dark">Hanoi, Vietnam</h4>
          </div>
        </div>
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full p-5 shadow-all-side"
          >
            <font-awesome-icon
              class="text-2xl text-primary"
              :icon="['fas', 'at']"
            />
          </div>
          <div class="flex flex-col justify-around">
            <h3 class="text-lg font-semibold">Mail</h3>
            <h4 class="text-gray-dark">duongntdev@outlook.com.vn</h4>
          </div>
        </div>
        <div class="flex gap-5">
          <div
            class="flex h-16 w-16 items-center justify-center rounded-full p-5 shadow-all-side"
          >
            <font-awesome-icon
              class="text-2xl text-primary"
              :icon="['fas', 'phone']"
            />
          </div>
          <div class="flex flex-col justify-around">
            <h3 class="text-lg font-semibold">Mobile Phone</h3>
            <h4 class="text-gray-dark">(+84) 816 077 616</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
