<template>
    <v-toolbar extended color="#FFFFFF">
      <v-img src="../assets/img/Logo.svg"></v-img>

      <v-spacer></v-spacer>

      <v-toolbar-title>Nome do Sistema</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
      <p>Nome do Usuário</p>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer
        v-model="drawer"
        temporary
        color="pink-darken-4"
        location="right"
      >
        <v-list-item
          prepend-icon="mdi-account-circle-outline"
          title="Nome do Usuário"
        ></v-list-item>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-chart-bar" title="Dashboard" value="dashboard"></v-list-item>
          <v-list-item prepend-icon="mdi-information" title="Informações da Organização" value="informacao"></v-list-item>
          <v-list-item prepend-icon="mdi-information" title="Menu de Vagas" value="vagas"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group" title="Administradores" value="administradores"></v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-toolbar>
</template>

<script>
export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>

<style scoped>
  p {
    font-size: 15px;
  }
</style>