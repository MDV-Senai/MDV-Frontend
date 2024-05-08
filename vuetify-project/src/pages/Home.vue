<template>
  <v-main id="imagem">
    <Header />

    <div id="fundoCards">
      <v-row class="d-flex justify-center">
        <v-col sm="2" id="teste">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                v-bind="props"
                :color="isHovering ? 'pink-darken-4' : 'white'"
                class="py-14 my-15 w-100"
                variant="flat"
                id="testeCard"
              >
                <v-btn icon flat>
                  <v-icon color="pink-darken-4">mdi-store-plus-outline</v-icon>
                </v-btn>
                <v-card-title id="textoCard">Cadastrar Instituição</v-card-title>
              </v-card>
            </template>
          </v-hover>
        </v-col>

        <v-col sm="2" id="teste">
          <v-card
            color="pink-darken-4"
            class="py-14 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-card-title>Cadastrar Estagiário</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2" id="teste">
          <v-card
            color="pink-darken-4"
            class="py-14 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-text-box-plus-outline</v-icon>
            </v-btn>
            <v-card-title>Cadastrar Setor</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2" id="teste">
          <v-card
            color="pink-darken-4"
            class="py-14 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-chart-bar</v-icon>
            </v-btn>
            <v-card-title>Dashboard</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2" id="teste">
          <v-card
            color="pink-darken-4"
            class="py-14 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-magnify</v-icon>
            </v-btn>
            <v-card-title>Consultas</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="w-100 d-flex justify-center">
        <v-col sm="12">
          <div class="d-flex justify-center align-center">
            <v-img
              src="../assets/img/mulher.svg"
              height="500px"
              width="500px"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-main>
  <Footer />
</template>

<script>
</script>

<style scoped>
#fundoCards {
  background-color: #fff;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}

#teste {
  min-width: 230px;
}

@media (max-width: 768px) {
  #fundoCards {
    height: auto;
  }
}

#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

#testeCard {
  border: 1px solid #880e4f;
}

#textoCard {
  color: #880e4f;
}

#textoCard:hover {
  color: #ffff;
}
</style>