<script lang="ts" setup>
import Faqs_accordion from '@/components/faqs/faqs_accordion.vue'
</script>

<template>
  <div>
    <section class="background-image-section">
      <header></header>
    </section>

    <section class="bg-pink-100">
      <main class="flex items-center justify-center min-h-screen">
        <div class="wrapper">
          <Faqs_accordion />
        </div>
      </main>
    </section>
  </div>
</template>

<style scoped>
.background-image-section {
  background-image: url('src/assets/images/background-pattern-desktop.svg');
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 1024px) {
  .background-image-section {
    height: 25vh; /* Adjust the height as needed */
  }
}
</style>
