<script lang="ts" setup>
import Card from '@/components/card/Card.vue'
</script>

<template>
  <header class="wrapper">
    <div></div>
  </header>

  <main></main>
  <Card heading="FAQs" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
