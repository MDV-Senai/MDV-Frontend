import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../pages/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      
      component: () => import('../pages/Home.vue')
    }
  ]
})

export default router
