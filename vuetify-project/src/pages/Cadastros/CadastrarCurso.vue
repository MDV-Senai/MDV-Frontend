<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Cadastro de Cursos</v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-select
              :items="listaInstituicao"
              item-title="nome"
              label="Instituição para cadastro de curso"
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Curso"
              v-model="curso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-3"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10"
                color="pink-darken-4"
                append-icon="mdi-chevron-right"
                variant="outlined"
                width="183"
                height="62"
              >
                Limpar
              </v-btn>
            </v-col>

            <v-col cols="6" md="3">
              <v-btn
                append-icon="mdi-chevron-right"
                variant="outlined"
                color="pink-darken-4"
                class="my-10"
                width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon color="pink-darken-4"></v-icon>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>
    <Footer />
  </v-main>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
      curso: "",
      listaInstituicao: [],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async getInstituicao() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/cdca6f61-b8c2-41f6-b255-4db2e83b5bec"
        );
        this.listaInstituicao = response.data.instituicoes;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.getInstituicao();
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/shared";
</style>