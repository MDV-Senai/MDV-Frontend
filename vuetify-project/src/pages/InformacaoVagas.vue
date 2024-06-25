<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">Vagas Disponíveis</v-card>
    </div>
    <div id="fundoCards">
        <div class="d-flex flex-row flex-wrap" id="responsive-cards">
                <v-col cols="12" md="6" v-for="vaga in vagas" :key="vaga.id">
                  <v-card>
                    <v-card-title v-model="titulo">
                      {{ vaga.titulo }}
                    </v-card-title>

                    <v-card-subtitle v-model="quantidade">
                      {{ vaga.quantidade }}
                    </v-card-subtitle>

                    <v-card-subtitle v-model="turno">
                      {{ vaga.turno }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn color="pink-darken-4" text="Descrição"></v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        :icon="vaga.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="vaga.show = !vaga.show"
                      ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="vaga.show">
                        <v-divider></v-divider>

                        <v-card-text v-model="descricao">
                          {{ vaga.descricao }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </div>
    </div>
  </v-main>
  <Footer />
</template>

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

<script>
import axios from "axios";

export default {
  data() {
    return {
      vagas: null,
      titulo: null,
      quantidade: null,
      turno: null,
      descricao: null,
      id: null,
      show: false,
    };
  },

  methods: {
    async listarVagas() {
      try {
        const response = await axios.get(
          `https://run.mocky.io/v3/2aa2c1c0-22bf-4614-8cc9-32b3943d6c3b`
        );
        const info = response.data;
        const vagas = info.items.vagas;
        this.vagas = vagas;
      } catch (error) {
        console.error("Erro :", error);
      }
    },
  },
  mounted() {
    this.listarVagas();
  },
};
</script>
