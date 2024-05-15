import { createRouter, createWebHistory } from 'vue-router'

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
    },
    {
      path:"/cadastrarInstituicao",
      name:"CadastrarInstituicao",
      component:()=> import('../pages/CadastrarInstituicao.vue')

    },
    {
      path:"/cadastrarEstagiario",
      name:"CadastrarEstagiario",
      component:()=> import('../pages/CadastrarEstagiario.vue')

    },
    {
      path:"/cadastrarSetor",
      name:"CadastrarSetor",
      component:()=> import('../pages/CadastrarSetor.vue')

    },
    { 
      path:"/CadastrarResponsavel",
      name:"CadastrarResponsavel",
      component:()=>import('../pages/CadastrarResponsavel.vue')
    }


  ]
})

export default router
