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
              label="Solicitação de Vaga"
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-select
              v-model="estagiario"
              :items="estagiarios"
              :item-title="'titulo'"
              :item-value="'id'"
              label="Curso do Posto de Trabalho (Vaga)"
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Setor Disponível"
              :rules="[rules.required]"
              v-model="setor"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Turno Disponível"
              v-model="turno"
              :rules="[rules.required]"
              clearable
              :items="['Matutino', 'Vespertino', 'Noturno', 'Integral']"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              label="Quantidade de Vagas"
              v-model="qtdVagas"
              :rules="[rules.required]"
              :min="0"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-number-input>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="Início do Estágio"
              type="date"
              :rules="[rules.required]"
              v-model="inicioEstagio"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Fim do Estágio"
              type="date"
              :rules="[rules.required]"
              v-model="fimEstagio"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-card class="pt-8">
          <v-container fluid>
          <v-row id="inputResponsivo" class="d-flex justify-center ml-12">
            <v-col class="d-flex align-center">Domingo</v-col>
            <v-col class="d-flex align-center">Segunda</v-col>
            <v-col class="d-flex align-center">Terça</v-col>
            <v-col class="d-flex align-center">Quarta</v-col>
            <v-col class="d-flex align-center">Quinta</v-col>
            <v-col class="d-flex align-center">Sexta</v-col>
            <v-col class="d-flex align-center">Sábado</v-col>
          </v-row>

          <v-row id="inputResponsivo" class="d-flex justify-center ml-12">
            <v-col class="d-flex align-center">
              <v-checkbox v-model="domingo"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="segunda"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="terca"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="quarta"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="quinta"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="sexta"></v-checkbox>
            </v-col>
            <v-col class="d-flex align-center">
              <v-checkbox v-model="sabado"></v-checkbox>
            </v-col>
          </v-row>
          </v-container>
        </v-card>

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
      setor: null,
      turno: null,
      qtdVagas: null,
      situacao: null,
      descricaoVaga: null,
      inicioEstagio: null,
      fimEstagio: null,

      domingo: false,
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
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
    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            estagiario: this.estagiario,
            setor: this.setor,
            turno: this.turno,
            qtdVagas: this.qtdVagas,
            situacao: this.situacao,
            descricaoVaga: this.descricaoVaga,
          };

          const url = import.meta.env.VITE_BACKEND_URL + "/instituicaoEnsino";
          console.log(url);

          const req = await axios.post(url, data);

          console.log("Resposta: ", req);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },
  },
  mounted() {
    this.getUfs();
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>