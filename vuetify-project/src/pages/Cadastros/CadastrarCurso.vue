<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Cursos</h3></v-card
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
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome do Curso"
              v-model="curso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome do Coordenador do Curso"
              v-model="nomeCoordenadorCurso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome Social do Coordenador do Curso"
              v-model="nomeSocialCoordenadorCurso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="E-mail do Coordenador do Curso"
              :rules="[rules.required, rules.email]"
              v-model="email"
              type="email"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Telefone do Coordenador do Curso"
              v-model="telefone"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Celular do Coordenador do Curso"
              v-model="celular"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
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
                @click="enviarDados"
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
import {
  emailValidation,
} from "@/validations/formValidations";
export default {
  data() {
    return {
      curso: null,
      nomeCoordenadorCurso: null,
      nomeSocialCoordenadorCurso: null,
      email: null,
      telefone: null,
      celular: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
      },
      curso: "",
      listaInstituicao: [],
    };
  },
  methods: {
    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            nomeCurso: this.curso,
            nomeCoordenadorCurso: this.nomeCoordenadorCurso,
            nomeSocialCoordenadorCurso: this.nomeSocialCoordenadorCurso,
            emailCoordenadorCurso: this.email,
            foneCoordenadorCurso: this.telefone,
            celularCoordenadorCurso: this.celular,
          };

          const url = import.meta.env.VITE_BACKEND_URL + "/cadastrarCurso";
          console.log(url);

          const req = await axios.post(url, data);

          console.log("Resposta: ", req);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },

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
@import "@/styles/shared";
</style>