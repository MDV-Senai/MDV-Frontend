<template>
  <v-main id="imagem">
    <Header />

    <div id="fundoCards" class="text-center">
      <v-row>
        <v-col>
          <v-card
            color="pink-darken-4"
            class="py-14 ma-10 my-15"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-bell-outline</v-icon>
            </v-btn>
            <v-card-title>Teste</v-card-title>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            color="pink-darken-4"
            class="py-14 ma-10 my-15"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-bell-outline</v-icon>
            </v-btn>
            <v-card-title>Teste</v-card-title>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            color="pink-darken-4"
            class="py-14 ma-10 my-15"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-bell-outline</v-icon>
            </v-btn>
            <v-card-title>Teste</v-card-title>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            color="pink-darken-4"
            class="py-14 ma-10 my-15"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-bell-outline</v-icon>
            </v-btn>
            <v-card-title>Teste</v-card-title>
          </v-card>
        </v-col>

        <v-col>
          <v-card
            color="pink-darken-4"
            class="py-14 ma-10 my-15"
            variant="outlined"
          >
            <v-btn icon flat>
              <v-icon color="pink-darken-4">mdi-bell-outline</v-icon>
            </v-btn>
            <v-card-title>Teste</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <Footer />
  </v-main>
</template>

<script>
</script>

<style scoped>
#fundoCards {
  background-color: #fff;
  width: 90%;
  height: 75%;
  margin: 2% auto;
  display: flex;
  /* justify-content: center;
    align-items: center; */
}

#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: cover;
  height: 100%;
}
</style>