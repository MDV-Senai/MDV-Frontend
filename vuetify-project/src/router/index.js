import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import CadastrarInstituicao from '../pages/Cadastros/CadastrarInstituicao.vue';
import CadastrarEstagiario from '../pages/Cadastros/CadastrarEstagiario.vue';
import CadastrarSetor from '../pages/Cadastros/CadastrarSetor.vue';
import CadastrarResponsavel from '../pages/Cadastros/CadastrarResponsavel.vue';
import CadastrarAdmin from '../pages/Cadastros/CadastrarAdmin.vue';
import CadastrarOrganizacao from '../pages/Cadastros/CadastrarOrganizacao.vue';
import CadastrarVagas from '../pages/Cadastros/CadastrarVagas.vue';
import ConsultarInstituicao from '../pages/Consultas/ConsultarInstituicao.vue';
import ConsultarEstagiario from '../pages/Consultas/ConsultarEstagiario.vue';
import ConsultarResponsavel from '../pages/Consultas/ConsultarResponsavel.vue';
import ConsultarSetor from '../pages/Consultas/ConsultarSetor.vue';
import ConsultarVagas from '../pages/Consultas/ConsultarVagas.vue';

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
      path: '/consultarEstagiario',
      name: 'ConsultarEstagiario',
      component: ConsultarEstagiario
    },
    {
      path: '/consultarResponsavel',
      name: 'ConsultarResponsavel',
      component: ConsultarResponsavel
    },
    {
      path: '/consultarSetor',
      name: 'ConsultarSetor',
      component: ConsultarSetor
    },
    {
      path: '/consultarVagas',
      name: 'ConsultarVagas',
      component: ConsultarVagas
    }
  ]
})

export default router