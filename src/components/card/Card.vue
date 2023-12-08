<script lang="ts" setup>
import { FwbCard } from 'flowbite-vue'

interface Props {
  heading: string
  description: string
}

const props: Props = defineProps({
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <fwb-card href="#">
    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ props.heading }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ props.description }}
      </p>
    </div>
  </fwb-card>
</template>
