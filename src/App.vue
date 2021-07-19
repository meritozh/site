<script setup lang="ts">
import { useHead } from '@vueuse/head'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '溥心',
  meta: [
    { name: 'description', content: '生活 开发 绘画' },
  ],
})
</script>

<template>
  <div p="7" text="gray-700 dark:gray-200">
    <nav-bar />
    <main>
      <router-view />
    </main>
  </div>
</template>
