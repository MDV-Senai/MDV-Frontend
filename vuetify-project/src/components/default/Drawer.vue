<template>
  <v-navigation-drawer
    v-model="localValue"
    temporary
    color="grey-lighten-5"
    location="right"
    :width="343"
  >
    <v-list-item
      prepend-icon="mdi-account-circle-outline"
      title="Nome do Usuário"
    ></v-list-item>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-chart-bar"
        title="Dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-information"
        title="Gerar Contrato"
        value="contrato"
        :to="rotaGerarContrato"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-book-arrow-right"
        title="Solicitar Vaga"
        value="solicitarVaga"
        :to="rotaSolicitarVaga"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-dots-horizontal-circle-outline"
        title="Menu de Vagas"
        value="vagas"
        :to="rotaInfoVagas"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-group"
        title="Administradores"
        value="administradores"
      ></v-list-item>
      <v-list-group value="Actions">
        <template v-slot:activator="{ props }">
          <v-list-item
            prepend-icon="mdi-account-file-outline"
            v-bind="props"
            title="Cadastrar"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, route], i) in rotasCrud"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :to="route"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Action">
        <template v-slot:activator="{ props }">
          <v-list-item
            prepend-icon="mdi-account-file-outline"
            v-bind="props"
            title="Consultar"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, route], i) in rotasConsulta"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :to="route"
          :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localValue = ref(props.value);

    watch(
      () => props.value,
      (newValue) => {
        localValue.value = newValue;
      }
    );

    watch(localValue, (newValue) => {
      emit("update:value", newValue);
    });

    const rotaInfoVagas = "/informacaoVagas";

    const rotaGerarContrato = "/gerarContrato";

    const rotaSolicitarVaga = "/cadastrarSolicitacaoVagas";

    const rotasCrud = [
      [
        "Cadastrar Instituição",
        "mdi-store-plus-outline",
        "/cadastrarInstituicao",
      ],
      [
        "Cadastrar Estagiário",
        "mdi-account-plus-outline",
        "/cadastrarEstagiario",
      ],
      ["Cadastrar Setor", "mdi-text-box-plus-outline", "/cadastrarSetor"],
      ["Cadastrar Admin", "mdi-file-account-outline", "/cadastrarAdmin"],
      [
        "Cadastro de Responsável Pelo Estagiário",
        "mdi-human-male-board",
        "/cadastrarResponsavel",
      ],
      ["Cadastro de Organização", "mdi-domain", "/cadastrarOrganizacao"],
      ["Cadastro de Vagas", "mdi-handshake-outline", "/cadastrarVagas"],
      ["Cadastro de Curso", "mdi-book-plus-outline", "/cadastrarCurso"],
      ["Cadastro de Coordenador de Curso", "mdi-account-tie", "/cadastrarCoordenadorCurso"],
    ];

    const rotasConsulta = [
      [
        "Consultar Instituição",
        "mdi-store-search-outline",
        "/consultarInstituicao",
      ],
      [
        "Consultar Estagiário",
        "mdi-account-search-outline",
        "/consultarEstagiario",
      ],
      [
        "Consultar Professor Responsável",
        "mdi-clipboard-text-search-outline",
        "/consultarResponsavel",
      ],
      ["Consultar Setor", "mdi-file-search-outline", "/consultarSetor"],
      ["Consultar Vagas", "mdi-account-supervisor-outline", "/consultarVagas"],
      ["Consultar Curso", "mdi-bookshelf", "/consultarCurso"],
      [
        "Consultar Contrato",
        "mdi-text-box-search-outline",
        "/consultarContrato",
      ],
      [
        "Consultar Concedente",
        "mdi-text-box-search-outline",
        "/consultarConcedente",
      ],
    ];

    return {
      localValue,
      rotaInfoVagas,
      rotasCrud,
      rotasConsulta,
      rotaGerarContrato,
      rotaSolicitarVaga
    };
  },
};
</script>
