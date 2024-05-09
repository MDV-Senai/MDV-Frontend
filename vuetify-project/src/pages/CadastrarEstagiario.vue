<template>
    <v-main>

        <Header />
        <div class="d-flex justify-center align-center">
        <v-card class= "d-flex justify-center align-center" id= "card_titulo">Cadastro da Instituição de Ensino</v-card>
        </div>
     <div id="fundoCards">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" sm="10">
                                <v-text-field
                                  label="Instituição"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>
        </v-row>
        
        <v-row class="d-flex justify-center">
          <v-col cols="12" sm="10">
                                <v-text-field
                                  label="Razão Social"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>
        </v-row>
         <v-row class="d-flex justify-center">
          <v-col cols="12" sm="10">
                                <v-text-field
                                  label="Diretor"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>
        </v-row>
         <v-row class="d-flex justify-center">
          <v-col cols="12" sm="10">
                                <v-text-field
                                  label="Professor Responsável"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>
        </v-row>
          <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="5">
                                <v-text-field
                                  label="CNPJ"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>

                               <v-col cols="6" md="5">
                                <v-text-field
                                  label="Inscrição Estadual"
                                  variant="outlined"
                                  color="pink-darken-4"
                                ></v-text-field>
                              </v-col>

        </v-row>
     </div>
    </v-main>

      <Footer />
</template>

<style scoped>

#card_titulo{ 
font-size: 30px; 
width: 90%;
height: 100px;
color: gray;
}

@media (max-width: 768px) { 
    #inputResponsivo { 
        flex-direction: column;
    }
}


#fundoCards {
  background-color: red;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}
</style>