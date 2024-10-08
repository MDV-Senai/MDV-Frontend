<!-- eslint-disable vue/valid-v-on -->
<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Organização</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome Fantasia"
              :rules="[rules.required]"
              v-model="nomeFantasia"
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
              label="Responsável Legal"
              :rules="[rules.required, rules.fullname]"
              v-model="responsavelLegal"
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
              label="Razão Social"
              :rules="[rules.required]"
              v-model="razaoSocial"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="6" md="4">
            <v-text-field
              label="CNPJ"
              :rules="[rules.required]"
              v-model="cnpj"
              maxlength="18"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'##.###.###/####-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              label="Inscrição Estadual"
              :rules="[rules.required]"
              v-model="inscricaoEstadual"
              maxlength="12"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-file-input
              label="Logo da Empresa"
              :rules="[rules.required]"
              v-model="logoEmpresa"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-file-input>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="3">
            <v-text-field
              label="E-mail"
              :rules="[rules.required, rules.email]"
              v-model="email"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Celular"
              :rules="[rules.required]"
              v-model="celular"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Telefone"
              :rules="[rules.required]"
              v-model="telefone"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Contato do Responsável Legal"
              :rules="[rules.required]"
              v-model="contatoRespLegal"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="CEP"
              :rules="[rules.required]"
              v-model="cep"
              maxlength="9"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'#####-###'"
              @input.debounce="preencheCep($event.target.value)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="logradouro"
              label="Logradouro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="4">
            <v-text-field
              label="Nº"
              :rules="[rules.required]"
              v-model="numero"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="8">
            <v-text-field
              label="Complemento"
              v-model="complemento"
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
              v-model="bairro"
              label="Bairro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="8">
            <v-text-field
              v-model="cidade"
              label="Cidade"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-select
              v-model="uf"
              :items="ufs"
              :item-title="'uf'"
              :item-value="'id'"
              label="UF"
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                color="grey-darken-4"
                append-icon="mdi-chevron-right"
                variant="outlined"
                class="my-10 text-grey-darken-4"
                width="183"
                height="62"
              >
                Limpar
              </v-btn>
            </v-col>

            <v-col cols="6" md="3">
              <v-btn
                append-icon="mdi-chevron-right"
                @click="enviarDados"
                variant="outlined"
                class="my-10 text-grey-darken-4"
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
  emailValidation,
  fullNameValidation,
} from "@/validations/formValidations";
import { buscaCep } from "@/util/buscaCep";

export default {
  data() {
    return {
      nomeFantasia: null,
      razaoSocial: null,
      cnpj: null,
      inscricaoEstadual: null,
      logoEmpresa: null,
      email: null,
      celular: null,
      telefone: null,
      cep: null,
      complemento: null,
      uf: null,
      cidade: null,
      bairro: null,
      logradouro: null,
      numero: null,
      responsavelLegal: null,
      contatoRespLegal: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    async preencheCep(cep) {
      let address = await buscaCep(cep);
      this.cidade = address.localidade;
      this.uf = address.uf;
      this.bairro = address.bairro;
      this.logradouro = address.logradouro;
    },

    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            nomeFantasia: this.nomeFantasia,
            razaoSocial: this.razaoSocial,
            cnpj: this.cnpj,
            inscricaoEstado: this.inscricaoEstadual,
            fone: this.telefone,
            celular: this.celular,
            email: this.email,
            cep: this.cep,
            cidade: this.cidade,
            uf: this.uf,
            bairro: this.bairro,
            numero: this.numero,
            rua: this.logradouro,
            complemento: this.complemento,
            responsavelLegal: this.responsavelLegal,
            responsavelLegalContato: this.contatoRespLegal,
          };

          const response = await cadastrarOrganizacao(data);

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
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>