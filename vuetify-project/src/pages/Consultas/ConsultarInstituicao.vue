<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">Consultar Instituição de Ensino</v-card>
    </div>
    <div id="fundoCards">
      <v-card flat>
        <template v-slot:text>
          <v-text-field v-model="search" label="Pesquise" prepend-inner-icon="mdi-magnify" variant="outlined"
            color="pink-darken-4" hide-details single-line></v-text-field>
        </template>

        <v-data-table :headers="headers" :items="desserts" :search="search"></v-data-table>
      </v-card>
    </div>
  </v-main>

  <Footer />
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          align: "left",
          key: "name",
          sortable: false,
          title: "Instituição",
        },
       
      ],
      desserts: [
         {
          
          icon: "mdi-cursor-default-click-outline",
          key: "name",
          sortable: false,
          name: "Instituição",
        },
       
      ],
    };
  },
};
</script>

<style scoped>
#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

#card_titulo {
  font-size: 30px;
  width: 90%;
  height: 100px;
  color: gray;
}

#form {
  width: 90%;
}

@media (max-width: 768px) {
  #inputResponsivo {
    /* flex-direction: column; */
  }
}

#fundoCards {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}
</style>