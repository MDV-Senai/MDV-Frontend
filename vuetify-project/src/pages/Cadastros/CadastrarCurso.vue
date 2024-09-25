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
              :rules="[rules.required, rules.fullname]"
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

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              label="Carga Horária do Estagiário"
              v-model="cargaHorariaEstagio"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Carga Horária do Curso"
              v-model="cargaHorariaCurso"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
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
    
  </v-main>
</template>

<script>
import axios from "axios";
import {
  emailValidation,
  fullNameValidation
} from "@/validations/formValidations";
import { cadastrarCurso } from "../../services/CursosService.js";
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      curso: null,
      nomeCoordenadorCurso: null,
      nomeSocialCoordenadorCurso: null,
      email: null,
      telefone: null,
      celular: null,
      selectedInstituicao: null,
      cargaHorariaEstagio: null,
      cargaHorariaCurso: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
      listaInstituicao: [],
    };
  },
  watch: {
    cargaHorariaEstagio(newVal) {
      // Converte a string para inteiro
      this.cargaHorariaEstagio = parseInt(newVal, 10);
    },
    cargaHorariaCurso(newVal) {
      // Converte a string para inteiro
      this.cargaHorariaCurso = parseInt(newVal, 10);
    },
  },
  methods: {
    async enviarDados() {
      if (this.$refs.form.validate()) {
        const data = {
          nomeCurso: this.curso,
          nomeCoordenadorCurso: this.nomeCoordenadorCurso,
          nomeSocialCoordenadorCurso: this.nomeSocialCoordenadorCurso,
          emailCoordenadorCurso: this.email,
          foneCoordenadorCurso: this.telefone,
          celularCoordenadorCurso: this.celular,
          cargaHorariaEstagio: this.cargaHorariaEstagio,
          cargaHorariaCurso: this.cargaHorariaCurso,
        };

        const response = await cadastrarCurso(data);
        console.log(response);

        if (response) {
          Swal.fire({
            title: "Cadastro Realizado com Sucesso!",
            icon: "success"
          });
          this.$refs.form.reset();
        }
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>