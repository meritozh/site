<script setup lang="ts">
import { useRouter } from "vue-router";
import { formatDate } from "~/logic";

const props = defineProps<{ type?: string }>()

const router = useRouter()
const routes = router.getRoutes()
  .filter(r => r.path.startsWith('posts') && r.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(b.meta.frontmatter.date))

const posts = computed(() =>
  routes.filter(r => !r.path.endsWith('.html') && r.meta.frontmatter.type === props.type)
)
</script>

<template>
  <ul>
    <router-link
      v-for="route in posts"
      :key="route.path"
      class="item block font-normal mb-6 mt-2 no-underline"
      :to="route.path"
    >
      <li class="no-underline">
        <div class="title text-lg">{{ route.meta.frontmatter.title }}</div>
        <div class="time opacity-50 text-sm -mt-1">
          {{ formatDate(route.meta.frontmatter.date) }}
          <span
            v-if="route.meta.frontmatter.duration"
            class="opacity-50"
          >· {{ route.meta.frontmatter.duration }}</span>
        </div>
      </li>
    </router-link>
  </ul>
</template>