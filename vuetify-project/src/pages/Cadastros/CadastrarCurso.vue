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
              v-model="nomeCurso"
              :rules="[rules.required]"
              maxlength="150"
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
import { cadastrarCurso } from "../../services/CursosService.js";
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      nomeCurso: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
    };
  },

  methods: {
    exibirMensagemSucesso() {
      Swal.fire({
        title: "Cadastro Realizado com Sucesso!",
        icon: "success",
      });
    },

    exibirErroGenerico() {
      Swal.fire({
        title: "Ocorreu um erro ao realizar o cadastro.",
        icon: "error",
      });
    },

    exibirErros(response) {
      let errors = "";
      if (Array.isArray(response.message)) {
        response.message.forEach((item, index) => {
          errors += `<li class="text-left">${index + 1}. ${item}</li>`;
        });
      } else {
        errors = `<li class="text-left">${response.message}</li>`;
      }

      Swal.fire({
        title: "Ocorreu os seguintes erros ao realizar o cadastro:",
        html: `<ul>${errors}</ul>`,
        icon: "error",
      });
    },

    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const dadosCadastro = {
            nomeCurso: this.nomeCurso
          };

          const response = await cadastrarCurso(dadosCadastro);

          if (!response.error) {
            this.exibirMensagemSucesso();
            this.reset();
          } else {
            if (response.statusCode >= 500) {
              this.exibirErroGenerico();
            } else {
              this.exibirErros(response);
            }
          }
        } catch (error) {
          this.exibirErroGenerico();
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
