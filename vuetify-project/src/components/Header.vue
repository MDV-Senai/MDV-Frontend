<template>
  <v-toolbar extended color="#FFFFFF">

    <RouterLink to="/home" id="logo_url">
      <img src="../assets/img/Logo.svg" id="logo">
    </RouterLink>

    <v-spacer></v-spacer>

    <v-toolbar-title>Nome do Sistema</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>
    <p>Nome do Usuário</p>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-navigation-drawer v-model="drawer" temporary color="pink-darken-4" location="right" :width="343">
      <v-list-item prepend-icon="mdi-account-circle-outline" title="Nome do Usuário"></v-list-item>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-chart-bar" title="Dashboard" value="dashboard"></v-list-item>
        <v-list-item prepend-icon="mdi-information" title="Informações da Organização" value="informacao"></v-list-item>
        <v-list-item prepend-icon="mdi-dots-horizontal-circle-outline" title="Menu de Vagas" value="vagas" :to="pathInfoVagas"></v-list-item>
        <v-list-item prepend-icon="mdi-account-group" title="Administradores" value="administradores"></v-list-item>
        <v-list-group value="Actions">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-account-file-outline" v-bind="props" title="Cadastrar"></v-list-item>
          </template>

          <v-list-item v-for="([title, icon, route], i) in cruds" :key="i" :prepend-icon="icon" :title="title" :to="route"
            :value="title"></v-list-item>
        </v-list-group>

        <v-list-group value="Action">
          <template v-slot:activator="{ props }">
            <v-list-item prepend-icon="mdi-account-file-outline" v-bind="props" title="Consultas"></v-list-item>
          </template>

          <v-list-item v-for="([title, icon, route], i) in consultas" :key="i" :prepend-icon="icon" :title="title" :to="route"
            :value="title"></v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    pathInfoVagas: "/informacaoVagas",
    cruds: [
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
        "Cadastro de Responsável Pelo Estagiário ",
        "mdi-human-male-board",
        "/cadastrarResponsavel",
      ],
      [
        "Cadastro de Organização ",
        "mdi-domain",
        "/cadastrarOrganizacao",
      ],
      [
        "Cadastro de Vagas ",
        "mdi-handshake-outline",
        "/cadastrarVagas",
      ],
    ],
    consultas: [
      ["Consultar Instituição", "mdi-store-search-outline", "/consultarInstituicao"],
      ["Consultar Estagiário", "mdi-account-search-outline", "/consultarEstagiario"],
      ["Consultar Professor Responsável", "mdi-clipboard-text-search-outline", "/consultarResponsavel"],
      ["Consultar Setor", "mdi-file-search-outline", "/consultarSetor"],
      [
        "Consultar Vagas",
        "mdi-account-supervisor-outline",
        "/consultarVagas"
      ],
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  open: ["Users"],
};
</script>

<style scoped>
p {
  font-size: 15px;
}

#logo {
  width: 50%;
}
</style>

