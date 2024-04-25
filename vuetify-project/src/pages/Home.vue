<template>
  <v-main>
    <v-img src="../assets/img/fundoDesenhos.svg">
      <Header />

      <div id="fundoCards">
          <v-row>
            <v-col>
              <v-card color="pink-darken-4">
                  <v-card-title>Teste</v-card-title>
              </v-card>
            </v-col>

            <v-col>
              <v-card color="pink-darken-4">
                  
              </v-card>
            </v-col>
          </v-row>
      </div>
      
    <Footer />
    </v-img>
  </v-main>
</template>

<script>
</script>

<style scoped>
  #fundoCards {
    background-color: #FFF;
    width: 80%;
    height: 70%;
    margin: 2% auto;
    display: flex;
    /* justify-content: center;
    align-items: center; */
  }
</style>