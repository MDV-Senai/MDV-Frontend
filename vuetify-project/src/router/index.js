import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import CadastrarInstituicao from '../pages/CadastrarInstituicao.vue';
import CadastrarEstagiario from '../pages/CadastrarEstagiario.vue';
import CadastrarSetor from '../pages/CadastrarSetor.vue';
import CadastrarResponsavel from '../pages/CadastrarResponsavel.vue';
import CadastrarAdmin from '../pages/CadastrarAdmin.vue';
import CadastrarOrganizacao from '../pages/CadastrarOrganizacao.vue';
import CadastrarVagas from '../pages/CadastrarVagas.vue';
import ConsultarInstituicao from '../pages/ConsultarInstituicao.vue';
import AlterarSenha from '../pages/AlterarSenha.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/cadastrarInstituicao',
      name: 'CadastrarInstituicao',
      component: CadastrarInstituicao
    },
    {
      path: '/cadastrarEstagiario',
      name: 'CadastrarEstagiario',
      component: CadastrarEstagiario
    },
    {
      path: '/cadastrarSetor',
      name: 'CadastrarSetor',
      component: CadastrarSetor
    },
    {
      path: '/cadastrarResponsavel',
      name: 'CadastrarResponsavel',
      component: CadastrarResponsavel
    },
    {
      path: '/cadastrarAdmin',
      name: 'CadastrarAdmin',
      component: CadastrarAdmin
    },
    {
      path: '/cadastrarOrganizacao',
      name: 'CadastrarOrganizacao',
      component: CadastrarOrganizacao
    },
    {
      path: '/cadastrarVagas',
      name: 'CadastrarVagas',
      component: CadastrarVagas
    },
    {
      path: '/consultarInstituicao',
      name: 'ConsultarInstituicao',
      component: ConsultarInstituicao
    },
    {
      path: '/alterarSenha/:token',
      name: 'AlterarSenha',
      component: AlterarSenha
    },
  ]
})

export default router