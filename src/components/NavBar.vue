<script setup lang="ts">
import { isDark } from "~/logic";
</script>

<template>
  <header class="flex justify-between align-middle">
    <router-link class="w-8 h-8 select-none outline-none" to="/" focusable="false">
      <img src="/favicon.svg" alt="logo" />
      <!-- <img v-show="!isDark" src="/logo-dark.svg" alt="logo" /> -->
    </router-link>
    <nav class="nav flex space-x-5 align-middle">
      <router-link to="/posts">
        <span class="<md:hidden">Blog</span>
        <ri-article-line class="md:hidden" />
      </router-link>
      <router-link to="/talks" class="<md:hidden">Talks</router-link>
      <router-link to="/projects" class>
        <span class="<md:hidden">Projects</span>
        <ri-lightbulb-line class="md:hidden" />
      </router-link>
      <router-link to="/bookmarks" title="Bookmarks" class="<md:hidden">
        <ri-bookmark-line />
      </router-link>
      <router-link to="/notes" title="Notes">
        <ri-sticky-note-line />
      </router-link>
      <a href="https://github.com/meritozh" target="_blank" title="GitHub">
        <uil-github-alt />
      </a>
      <toggle-theme />
    </nav>
  </header>
</template>

<style scoped>
.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
</style>