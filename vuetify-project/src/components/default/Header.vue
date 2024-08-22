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
  <v-title class="nome_usuario" id="nome_usuario" v-model="nome_usuario"></v-title>

      <v-app-bar-nav-icon @click.stop="toggleDrawer" color="red-darken-4"></v-app-bar-nav-icon>
    </v-toolbar>

    <Drawer v-model="drawer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome_usuario: "João da Silva",
      drawer: false, 
      
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    ajustarNome() {
      const elementoNome = document.getElementById("nome_usuario");

      if (window.innerWidth <= 500) {
       
        const primeiroNome = this.nome_usuario.split(' ')[0];
        elementoNome.textContent = primeiroNome;
      } else {
      
        elementoNome.textContent = this.nome_usuario;
      }
    },
  },
  mounted() {
    this.ajustarNome(); // Executa a função no carregamento inicial da página

    // Reexecuta a função sempre que o tamanho da tela mudar
    window.addEventListener('resize', this.ajustarNome);
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

/* Cor padrão */
.nome_usuario {
  color: #b71c1c; /* Cor correspondente ao red-darken-4 */
}

/* Exibir "Nome do Usuário" em telas maiores que 500px (desktop) */
@media (min-width: 501px) {
  .nome_usuario::before {
     display: inline; 
  }
}

/* Exibir "Nome" em telas menores que 500px (mobile) */
@media (max-width: 500px) {
  .nome_usuario::before {
     display: inline; 
  }
}


</style>


