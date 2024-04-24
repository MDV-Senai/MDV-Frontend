<template>
  <v-main>
    <v-img src="../assets/img/fundo.svg">
      <v-row>
        <v-col>
          <div></div>
        </v-col>
        <v-col>
          <v-container class="my-9">
            <v-container>
              <v-img src="../assets/img/retangulo.svg" width="780" height="800">
                <v-container class="my-16">
                  <h1 align="center">Nome do Sistema</h1>
                  <v-card
                    align="center"
                    class="mx-auto my-16"
                    width="500"
                    height="469"
                    id="transparente"
                  >
                    <v-form class="my-12">
                      <v-col cols="12" sm="10">
                        <v-text-field
                          label="Usuário"
                          variant="outlined"
                          color="pink-darken-4"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" sm="10">
                        <v-text-field
                          label="Senha"
                          variant="outlined"
                          color="pink-darken-4"
                        ></v-text-field>
                      </v-col>

                      <v-card-text 
                        ><a href="#" id="textoSenha">Esqueci a Senha</a></v-card-text
                      >

                      <RouterLink to="/home">
                        <v-btn
                          append-icon="mdi-chevron-right"
                          variant="outlined"
                          color="pink-darken-4"
                          class="my-10"
                          width="183"
                          height="62"
                          id="botaoEntrar"
                        >
                          Entrar

                          <template v-slot:append>
                            <v-icon color="pink-darken-4"></v-icon>
                          </template>
                        </v-btn>
                      </RouterLink>
                    </v-form>
                  </v-card>
                </v-container>
              </v-img>
            </v-container>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
  </v-main>
</template>

<script>
</script>

<style scoped>
#transparente {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.8);
}

#transparente2 {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0);
}

#textoSenha {
  color: #F178AC;
  text-decoration: none;
}

#botaoEntrar {
  border-radius: 10px;
}

#posicao {
  position: relative;
  left: 57%;
}
</style>