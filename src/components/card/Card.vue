<script lang="ts" setup>
import { FwbCard } from 'flowbite-vue'

interface Props {
  heading: string
}

const props: Props = defineProps({
  heading: {
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
        Frontend Mentor challenges allow you to improve your skills in a real-life workflow.
      </p>
    </div>
  </fwb-card>
</template>
