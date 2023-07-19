<template>
    <div>
      <header class="shadow-md py-5 fixed">
        <Navigation />
      </header>
      <main>
        <slot></slot>
      </main>
      <footer></footer>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
