<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Vagas</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-select
              v-model="estagiario"
              :items="estagiarios"
              :item-title="'titulo'"
              :item-value="'id'"
              label="Curso"
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="6" md="6">
            <v-text-field
              label="Setor"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6">
            <v-select
              label="Turno"
              :rules="[rules.required]"
              clearable
              :items="['Matutino', 'Vespertino', 'Noturno', 'Integral']"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="6">
            <v-text-field
              label="Quantidade de Vagas"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="6">
            <v-select
              label="Situação"
              :rules="[rules.required]"
              clearable
              :items="['Programada', 'Aberta', 'Encerrada']"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-textarea
              label="Descrição Da Vaga"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-textarea>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10 text-grey-darken-4"
                variant="outlined"
                append-icon="mdi-chevron-right"
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
                class="my-10 text-grey-darken-4"
                width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon
                    class="text-grey-darken-4"
                    variant="outlined"
                  ></v-icon>
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
      estagiario: null,
      estagiarios: [],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async getUfs() {
      try {
        const response = await axios.get(
          "https://run.mocky.io/v3/e1351e5c-3a81-4b3c-8dd3-31f6811e3539"
        );
        const data = response.data;
        const estagiarios = data.items.estagiarios;
        this.estagiarios = estagiarios;
        console.log(this.estagiarios);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.getUfs();
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/shared';
</style>