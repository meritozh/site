// register vue composition api globally
import 'vue-global-api'

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
import './styles/markdown.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'

// windicss devtools support (dev only)
import 'virtual:windi-devtools'
import { RouterScrollBehavior } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: {
      date: string
      type: string
      title: string
      duration: string
    }
  }
}

const routes = setupLayouts(generatedRoutes)

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  return { top: 0 }
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
