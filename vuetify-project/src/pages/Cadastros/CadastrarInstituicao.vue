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
              v-model="instituacao"
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
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Diretor"
              :rules="[rules.required, rules.fullname]"
              v-model="diretor"
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
              v-model="cnpj"
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
              v-model="inscricaoEstadual"
              maxlength="12"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="3">
            <v-text-field
              label="Telefone"
              v-model="telefone"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'(##) ####-####'"
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
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Contato Responsável Legal"
              :rules="[rules.required]"
              v-model="contatoRespLegal"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Email"
              :rules="[rules.required, rules.email]"
              v-model="email"
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
              v-model="cep"
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
              v-model="logradouro"
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
              v-model="numero"
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
              v-model="complemento"
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
              :rules="[rules.required]"
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
              v-model="usuario"
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
              v-model="senha"
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
                @click="enviarDados"
                append-icon="mdi-chevron-right"
                variant="outlined"
                class="text-grey-darken-4 my-10"
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
  confirmPasswordValidation,
} from "@/validations/formValidations";
import { buscaCep } from "@/util/buscaCep";
import Swal from "sweetalert2";
import { cadastrarInstituicaoEnsino } from "../../services/InstituicoesService";

export default {
  data() {
    return {
      instituacao: null,
      razaoSocial: null,
      diretor: null,
      cnpj: null,
      inscricaoEstadual: null,
      telefone: null,
      celular: null,
      email: null,
      cep: null,
      logradouro: null,
      numero: null,
      complemento: null,
      bairro: null,
      cidade: null,
      uf: null,
      rua: null,
      usuario: null,
      senha: null,
      contatoRespLegal: null,
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
      this.logradouro = address.logradouro;
    },

    async enviarDados() {
      if (this.$refs.form.validate()) {
        const data = {
          nomeFantasia: this.instituacao,
          userEmail: this.usuario,
          userPassword: this.senha,
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
          responsavelLegal: this.diretor,
          responsavelLegalContato: this.contatoRespLegal,
        };

          console.log(data);
          const url = import.meta.env.VITE_BACKEND_URL + "/instituicaoEnsino";
          console.log(url);

          const token = sessionStorage.getItem('authToken');
          console.log(token);
          

          const req = await axios.post(url, data, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          });

          console.log("Resposta: ", req);
      }
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
@import "@/styles/shared";
</style>