<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Setor</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="6">
            <v-text-field
              label="Nome do Setor"
              :rules="[rules.required]"
              v-model="nomeSetor"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nome do Coordenador"
              :rules="[rules.required]"
              v-model="nomeCoordenador"
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
              label="Nome Social do Coordenador"
              v-model="nomeSocialCoordenador"
              :rules="[rules.required, rules.fullname]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Email do Coordenador"
              v-model="emailCoordenador"
              :rules="[rules.required, rules.email]"
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
              label="Telefone do Coordenador"
              v-model="telefoneCoordenador"
              :rules="[rules.required, rules.fullname]"
              maxlength="255"
              counter
              clearable
              v-mask="'(##) #####-####'"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nº de Vagas"
              v-model="numeroVagas"
              :rules="[rules.required]"
              type="number"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" md="12">
            <v-container>
              <v-btn
                text="Cadastrar setor"
                @click="enviarDados()"
                class="text-grey-darken-4"
                v-model="atividade"
                variant="outlined"
              ></v-btn>
            </v-container>
          </v-col>
        </v-row>
      </v-form>
      <v-form ref="formAtividade" id="formAtividade">
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" md="12">
            <v-container>
              <v-btn
                text="Adicionar Atividades"
                @click="adicionarTeste()"
                class="text-grey-darken-4"
                v-model="atividade"
                variant="outlined"
              ></v-btn>
            </v-container>
          </v-col>
        </v-row>

        <v-row>
          <v-col
            cols="12"
            lg="12"
            v-for="(campo, index) in campos"
            :key="campo.id"
          >
            <v-text-field
              v-model="atividade[index]"
              :label="'Atividade ' + (index + 1)"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            >
              <template v-slot:append>
                <v-btn
                  text
                  id="apagar"
                  @click="removerAtividade(index)"
                  class="text-grey-darken-4"
                  variant="outlined"
                  icon="mdi-alpha-x-circle-outline"
                >
                </v-btn>
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10 text-grey-darken-4"
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
                @click="enviarAtividades()"
                class="my-10"
                width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon color="grey-darken-4"></v-icon>
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
  fullNameValidation,
  emailValidation,
} from "@/validations/formValidations";
import Swal from "sweetalert2";
import { cadastrarAtividade, cadastrarSetor } from "../../services/SetoresService";

export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
      campos: [{ id: 1 }],
      nextId: 2,
      setorId: null,
      nomeSetor: null,
      nomeCoordenador: null,
      nomeSocialCoordenador: null,
      telefoneCoordenador: null,
      emailCoordenador: null,
      numeroVagas: null,
      atividade: [],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    adicionarTeste() {
      this.campos.push({ id: this.nextId++ });
    },
    removerAtividade(index) {
      if (index >= 0 && index < this.campos.length) {
        this.campos.splice(index, 1);
      }
    },
    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            nomeSetor: this.nomeSetor,
            nomeCoordenador: this.nomeCoordenador,
            nomeSocialCoordenador: this.nomeSocialCoordenador,
            telefoneCoordenador: this.telefoneCoordenador,
            emailCoordenador: this.emailCoordenador,
            vagasTotais: this.numeroVagas,
          };

          const response = await cadastrarSetor(data);

          this.setorId = response.data.id;
          console.log(this.setorId);

          if (response) {
            Swal.fire({
              title: "Cadastro Realizado com Sucesso!",
              icon: "success",
            });
            this.$refs.form.reset();
          }
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },

    async enviarAtividades() {
      if (this.$refs.formAtividade.validate()) {
        try {
          console.log(this.atividade);
          const data = {
            nomeAtividade: this.atividade,
            setorId: this.setorId
          };

          const response = await cadastrarAtividade(data);

          if (response) {
            Swal.fire({
              title: "Cadastro Realizado com Sucesso!",
              icon: "success",
            });
            this.$refs.formAtividade.reset();
          }
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
