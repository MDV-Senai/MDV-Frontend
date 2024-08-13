<!-- eslint-disable vue/valid-v-on -->
<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro da Instituição de Ensino</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Instituição"
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
              label="Razão Social"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Diretor"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Professor Responsável"
              :rules="[rules.required, rules.fullname]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="CNPJ"
              :rules="[rules.required]"
              maxlength="18"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'##.###.###/####-##'"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Inscrição Estadual"
              :rules="[rules.required]"
              maxlength="12"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="4">
            <v-text-field
              label="Telefone"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>

          <v-col cols="6" md="4">
            <v-text-field
              label="Celular"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Email"
              :rules="[rules.required, rules.email]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="CEP"
              :rules="[rules.required]"
              maxlength="9"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'#####-###'"
              @input.debounce="preencheCep($event.target.value)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="rua"
              label="Logradouro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-3"
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
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="8">
            <v-text-field
              label="Complemento"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
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
              class="text-grey-darken-3"
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
              class="text-grey-darken-3"
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
              class="text-grey-darken-3"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Usuário"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Senha"
              id="senha"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Confirmação de Senha"
              id="confirmarSenha"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.identic]"
              :type="show2 ? 'text' : 'password'"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              @click:append="show2 = !show2"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10"
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
                class="text-grey-darken-4 my-10"
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
import {
  fullNameValidation,
  emailValidation,
  confirmPasswordValidation,
} from "@/validations/formValidations";
import { buscaCep } from "@/util/buscaCep";

export default {
  data() {
    return {
      uf: null,
      cidade: null,
      bairro: null,
      rua: null,
      ufs: [],
      show1: false,
      show2: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        // min: v => v.length  6 || 'Minimo 6 caracteres',
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
        identic: (value) => confirmPasswordValidation(value),
      },
    };
  },
  methods: {
    async getUfs() {
      try {
        const response = await axios.get("./db/db.json");
        const data = response.data;
        this.ufs = data.items.ufs;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    async preencheCep(cep) {
      let address = await buscaCep(cep);
      this.cidade = address.localidade;
      this.uf = address.uf;
      this.bairro = address.bairro;
      this.rua = address.logradouro;
    },

    reset() {
      this.$refs.form.reset();
    },
  },
  mounted() {
    this.getUfs();
  },
};
</script>

<style lang="scss">
@import '@/styles/shared';
</style>