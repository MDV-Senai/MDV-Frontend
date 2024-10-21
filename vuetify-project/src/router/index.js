import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import AlterarSenha from '../pages/AlterarSenha.vue';
import InformacaoVagas from '../pages/InformacaoVagas.vue';
import CadastrarInstituicao from '../pages/Cadastros/CadastrarInstituicao.vue';
import CadastrarEstagiario from '../pages/Cadastros/CadastrarEstagiario.vue';
import CadastrarSetor from '../pages/Cadastros/CadastrarSetor.vue';
import CadastrarResponsavel from '../pages/Cadastros/CadastrarResponsavel.vue';
import CadastrarAdmin from '../pages/Cadastros/CadastrarAdmin.vue';
import CadastrarOrganizacao from '../pages/Cadastros/CadastrarOrganizacao.vue';
import CadastrarVagas from '../pages/Cadastros/CadastrarVagas.vue';
import CadastrarCurso from '../pages/Cadastros/CadastrarCurso';
import CadastrarSolicitacaoVagas from '../pages/Cadastros/CadastrarSolicitacaoVagas';
import ConsultarInstituicao from '../pages/Consultas/ConsultarInstituicao.vue';
import ConsultarEstagiario from '../pages/Consultas/ConsultarEstagiario.vue';
import ConsultarResponsavel from '../pages/Consultas/ConsultarResponsavel.vue';
import ConsultarSetor from '../pages/Consultas/ConsultarSetor.vue';
import ConsultarVagas from '../pages/Consultas/ConsultarVagas.vue';
import ConsultarCurso from '../pages/Consultas/ConsultarCurso.vue';
import ConsultarConcedente from '../pages/Consultas/ConsultarConcedente.vue';
import ConsultarContrato from '../pages/Consultas/ConsultarContrato.vue';
import GerarContrato from '../pages/Contrato/GerarContrato.vue'

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
      path: '/cadastrarCurso',
      name: 'CadastrarCurso',
      component: CadastrarCurso
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
    },
    {
      path: '/informacaoVagas',
      name: 'InformacaoVagas',
      component: InformacaoVagas
    },
    {
      path: '/consultarCurso',
      name: 'ConsultarCurso',
      component: ConsultarCurso
    },
    {
      path: '/consultarContrato',
      name: 'ConsultarContrato',
      component: ConsultarContrato
    },
    {
      path: '/gerarContrato',
      name: 'GerarContrato',
      component: GerarContrato
    },
    {
      path: '/cadastrarSolicitacaoVagas',
      name: 'CadastrarSolicitacaoVagas',
      component: CadastrarSolicitacaoVagas
    },
    {
      path: '/consultarConcedente',
      name: 'ConsultarConcedente',
      component: ConsultarConcedente
    },
  ]
})

export default router