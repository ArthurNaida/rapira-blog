import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import StubView from '@/views/StubView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: StubView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    }
  ]
})

export default router
