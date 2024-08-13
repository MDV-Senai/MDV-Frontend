<template>
  <v-toolbar extended color="#FFFFFF">
    <RouterLink to="/home" id="logo_url">
      <img src="../../assets/img/Logo.svg" id="logo" />
    </RouterLink>

    <v-spacer></v-spacer>

    <v-toolbar-title>Nome do Sistema</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      color="pink-darken-4"
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
          title="Informações da Organização"
          value="informacao"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-dots-horizontal-circle-outline"
          title="Menu de Vagas"
          value="vagas"
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
            v-for="([title, icon, route], i) in cruds"
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
              title="Consultas"
            ></v-list-item>
          </template>

          <v-list-item
            v-for="([title, icon], i) in consultas"
            :key="i"
            :prepend-icon="icon"
            :title="title"
            :value="title"
          ></v-list-item>
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
      ["Cadastro de Organização ", "mdi-domain", "/cadastrarOrganizacao"],
      ["Cadastro de Vagas ", "mdi-handshake-outline", "/cadastrarVagas"],
    ],
    consultas: [
      ["Consulta de Instituição", "mdi-store-search-outline"],
      ["Consulta de Estagiário", "mdi-account-search-outline"],
      ["Consulta de Setor", "mdi-clipboard-text-search-outline"],
      ["Consulta de Contrato", "mdi-file-search-outline"],
      [
        "Informações do Professor Responsável",
        "mdi-account-supervisor-outline",
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
  
  