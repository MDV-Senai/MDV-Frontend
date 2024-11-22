<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Coordenador de Instituição de Ensino</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto mt-12">
        <v-row v-if="roleUsuario == 'ADMIN'" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-autocomplete
              label="Instituição De Ensino"
              :rules="[rules.required]"
              v-model="instituicaoEnsino"
              class="text-grey-darken-4"
              variant="outlined"
              :items="instituicoes"
              item-title="nomeFantasia"
              item-value="id"
              @input="onInstituicaoChange"
            ></v-autocomplete>
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
          <v-col cols="12" md="6">
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
          <v-col cols="12" md="6">
            <v-text-field
              label="Telefone do Coordenador do Curso"
              v-model="telefone"
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

  </v-main>
</template>

<script>
import {
  emailValidation,
  fullNameValidation
} from "@/validations/formValidations";
import { cadastrarCoordenadorCurso } from "../../services/CoordenadorCursoService";
import Swal from 'sweetalert2'
import { fetchInstituicoes } from "@/services/InstituicoesService.js";
export default {
  data() {
    return {
      nomeCoordenadorCurso: null,
      nomeSocialCoordenadorCurso: null,
      email: null,
      telefone: null,

      instituicaoEnsino: null,
      instituicoes: [],

      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
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

      const removeMascara = (valor) => valor ? valor.replace(/\D/g, '') : '';

      if (this.$refs.form.validate()) {
        const data = {
          nome: this.nomeCoordenadorCurso,
          nomeSocial: this.nomeSocialCoordenadorCurso,
          email: this.email,
          fone: removeMascara(this.telefone),
          idInstituicaoEnsino: this.instituicaoEnsino,
        };

        const response = await cadastrarCoordenadorCurso(data);

        if (response) {
          Swal.fire({
            title: "Cadastro Realizado com Sucesso!",
            icon: "success"
          });
          this.$refs.form.reset();
        }
      }
    },

    async getRoleUsuario() {
      const userRole = sessionStorage.getItem("userRole");
      this.roleUsuario = userRole;
    },

    async loadInstituicaoEnsino() {
      const response = await fetchInstituicoes();
      this.instituicoes = response;
    },

    reset() {
      this.$refs.form.reset();
    },
  },

  mounted() {
    this.getRoleUsuario();
    this.loadInstituicaoEnsino();
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
