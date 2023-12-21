<script lang="ts" setup>
import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel
} from 'flowbite-vue'

const installationDocumentation = {
  introduction: [
    'First, install Flowbite from npm:',
    'Then, add the Flowbite plugin to your tailwind.config.js file:',
    'Finally, add Flowbite to your CSS:'
  ]
}

const accordionValues = [
  {
    heading: 'What is Flowbite?',
    description:
      'Flowbite is an open-source library of interactive components built on top of Tailwind CSS, including buttons, dropdowns, modals, navbars, and more.'
  },
  {
    heading: 'How do I use Flowbite?',
    description:
      'Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS.'
  },
  {
    heading: 'How do I contribute?',
    description:
      'Flowbite is first conceptualized and designed using the Figma software, so everything you see is designed from scratch.'
  },
  {
    heading: 'How do I install Flowbite?',
    description:
      'In order to install Flowbite, you need to have Node.js and npm installed on your machine. After that, follow these steps:'
  }
]
</script>

<template>
  <fwb-accordion>
    <fwb-accordion-panel v-for="(item, index) in accordionValues" :key="index">
      <fwb-accordion-header class="text-xl font-semibold text-slate-900 dark:text-gray-100">
        {{ item.heading }}
      </fwb-accordion-header>
      <fwb-accordion-content>
        <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
          {{ item.description }}
        </p>
        <!-- Installation Documentation -->
        <div v-if="index === 3">
          <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
            {{ installationDocumentation.introduction[0] }}
          </p>
          <div class="bg-gray-800 p-4 rounded-md">
            <pre v-pre><code class="text-green-400">
npm install flowbite
            </code></pre>
          </div>
          <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
            {{ installationDocumentation.introduction[1] }}
          </p>
          <div class="bg-gray-800 p-4 rounded-md">
            <pre v-pre><code class="text-green-400">
// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('flowbite')
  ]
}
            </code></pre>
          </div>
          <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
            {{ installationDocumentation.introduction[2] }}
          </p>
          <div class="bg-gray-800 p-4 rounded-md">
            <pre v-pre><code class="text-green-400">
@tailwind base;
@tailwind components;
@tailwind utilities;
@layer components {
  @import 'flowbite';
}
            </code></pre>
          </div>
          <p class="px-5 pb-5 text-gray-500 dark:text-gray-400">
            {{ installationDocumentation.introduction[3] }}
          </p>
        </div>
      </fwb-accordion-content>
    </fwb-accordion-panel>
  </fwb-accordion>
</template>
