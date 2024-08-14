<template>
  <v-main id="imagem">
    <Header />

    <div id="fundoCards">
      <v-row class="d-flex justify-center">
        <v-col sm="2" id="card">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
            <RouterLink to="/CadastrarInstituicao">
              <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                v-bind="props"
                class="py-14 my-15 w-100 light-green-darken-3-var"
                variant="plain"
              >
                <v-btn icon flat>
                  <v-icon class="light-green-darken-3-var"
                    >mdi-store-plus-outline</v-icon
                  >
                </v-btn>
                <div class= "d-flex flex-column">
                <v-card-title>Cadastrar<br>Instituição</v-card-title> 
                </div>
              </v-card>
            </RouterLink>
          </v-hover>
        </v-col>

        <v-col sm="2" id="card">
           <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <RouterLink to="/CadastrarEstagiario">
           <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                v-bind="props"
                class="py-14 my-15 w-100 light-green-darken-3-var"
                variant="plain"
              >
              <v-btn icon flat>
                <v-icon class="light-green-darken-3-var"
                  >mdi-account-plus-outline</v-icon
                >
              </v-btn>
             <v-card-title>Cadastrar<br>Estagiário</v-card-title> 
            </v-card>
          </RouterLink>
           </v-hover>
        </v-col>

        <v-col sm="2" id="card">
          <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <RouterLink to="/CadastrarSetor">
            <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                v-bind="props"
                class="py-14 my-15 w-100 light-green-darken-3-var"
                variant="plain"
              >
              <v-btn icon flat>
                <v-icon class="light-green-darken-3-var"
                  >mdi-text-box-plus-outline</v-icon
                >
              </v-btn>
              <v-card-title>Cadastrar<br>Setor</v-card-title> 
            </v-card>
          </RouterLink>
          </v-hover>
        </v-col>

        <v-col sm="2" id="card">
           <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <RouterLink to="/cadastrarVagas">
            <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                v-bind="props"
                class="py-14 my-15 w-100 light-green-darken-3-var"
                variant="plain"
              >
              <v-btn icon flat>
                <v-icon class="light-green-darken-3-var"
                  >mdi-handshake-outline</v-icon
                >
              </v-btn>
             <v-card-title>Cadastro de<br>Vagas</v-card-title> 
            </v-card>
          </RouterLink>
           </v-hover>
        </v-col>

        <v-col sm="2" id="card">
           <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <RouterLink to="/cadastrarAdmin">
            <v-card
                :class="{ 'on-hover': isHovering }"
                :elevation="isHovering ? 16 : 2"
                v-bind="props"
                class="py-14 my-15 w-100 light-green-darken-3-var"
                variant="plain"
              >
              <v-btn icon flat>
                <v-icon class="light-green-darken-3-var"
                  >mdi-file-account-outline</v-icon
                >
              </v-btn>
             <v-card-title>Cadastro de<br>Admin</v-card-title> 
            </v-card>
          </RouterLink>
           </v-hover>
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
    <Footer />
  </v-main>
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
}

#card {
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
</style>