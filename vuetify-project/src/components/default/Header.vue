<template>
  <div>
    <v-toolbar extended color="#FFFFFF">
      <RouterLink to="/home" id="logo_url">
        <img src="../../assets/img/Logo.svg" id="logo" />
      </RouterLink>
      <v-spacer></v-spacer>
      <v-toolbar-title class="bold-font">EstágioPRO</v-toolbar-title>
      <v-spacer></v-spacer>
      <RouterLink to="/home" id="logo_url">
        <v-btn icon>
          <v-icon color="red-darken-4" class="custom-icon ">mdi-home-outline</v-icon>
        </v-btn>
      </RouterLink>
      <v-btn icon>
        <v-icon color="red-darken-4">mdi-bell-outline</v-icon>
      </v-btn>
      <p color="red-darken-4">Nome do Usuário</p>
      <v-app-bar-nav-icon @click.stop="toggleDrawer" color="red-darken-4"></v-app-bar-nav-icon>
    </v-toolbar>

    <Drawer v-model="drawer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
  },
};
</script>

<style scoped>
p {
  font-size: 15px;
  color:#B71C1C;
}
#logo {
  width: 50%;
}

.custom-icon {
  color: black;
}

.bold-font {
  font-weight: bold;
}
</style>