<script setup lang="ts">
import { useRouter } from 'vue-router'
import { formatDate } from '~/logic'

const props = defineProps<{ type?: string }>()

const router = useRouter()
const routes = router.getRoutes()
  .filter(i => i.path.startsWith('/posts/') && i.children.length == 0 && i.meta.frontmatter.date)
  .sort((a, b) => +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date))

const posts = computed(() =>
  routes.filter(i => !i.path.endsWith('.html') && i.meta.frontmatter.type === props.type),
)
</script>

<template>
  <div class="prose m-auto">
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
  </div>
</template>