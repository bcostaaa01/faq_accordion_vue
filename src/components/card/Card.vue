<script lang="ts" setup>
import { FwbCard } from 'flowbite-vue'
import Accordion from '@/components/Accordion.vue'

interface Props {
  heading: string
  description: string
  icon: string
}

const props: Props = defineProps({
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span>
    <fwb-card>
      <div class="p-5 flex items-center">
        <img :src="props.icon" alt="icon" class="m-4" />
        <h5 class="text-4xl font-semibold text-gray-800 dark:text-gray-100">
          {{ props.heading }}
        </h5>
      </div>
      <div>
        <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
          {{ props.description }}
        </p>
      </div>
      <div>
        <Accordion />
      </div>
    </fwb-card>
  </span>
</template>
