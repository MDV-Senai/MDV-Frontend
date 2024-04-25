<template>
  <v-main id="imagem">
    <Header />

    <div id="fundoCards">
      <v-row class="d-flex justify-center">
        <v-col sm="2" class="d-flex justify-center">
          <v-card
            color="pink-darken-4"
            class="py-14 ma-5 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-store-plus-outline</v-icon>
            </v-btn>
            <v-card-title>Cadastrar Instituição</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2">
          <v-card
            color="pink-darken-4"
            class="py-14 ma-5 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-account-plus-outline</v-icon>
            </v-btn>
            <v-card-title>Cadastrar Estagiário</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2">
          <v-card
            color="pink-darken-4"
            class="py-14 ma-5 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-text-box-plus-outline</v-icon>
            </v-btn>
            <v-card-title>Cadastrar Setor</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2">
          <v-card
            color="pink-darken-4"
            class="py-14 ma-5 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-chart-bar</v-icon>
            </v-btn>
            <v-card-title>Dashboard</v-card-title>
          </v-card>
        </v-col>

        <v-col sm="2">
          <v-card
            color="pink-darken-4"
            class="py-14 ma-5 my-15 w-100"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-magnify</v-icon>
            </v-btn>
            <v-card-title>Consultas</v-card-title>
          </v-card>
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
  background-color: red;
  width: 90%;
  height: 75%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  /* justify-content: center;
    align-items: center; */
}

#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}
</style>