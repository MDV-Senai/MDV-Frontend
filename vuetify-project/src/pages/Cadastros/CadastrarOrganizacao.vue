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
          <v-col cols="6" md="6">
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
          <v-col cols="6" md="6">
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

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Logradouro"
              v-model="rua"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
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
import {
  emailValidation,
  fullNameValidation,
} from "@/validations/formValidations";
import { buscaCep } from "@/util/buscaCep";
import { cadastrarOrganizacao } from "../../services/OrganizacaoService";
import Swal from "sweetalert2";

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
      rua: null,
      complemento: null,
      uf: null,
      ufs: [],
      cidade: null,
      bairro: null,
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
      this.rua = address.logradouro;
    },

    removeMascara(valor) {
      return valor ? valor.replace(/\D/g, "") : "";
    },

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
          const data = {
            nomeFantasia: this.nomeFantasia,
            razaoSocial: this.razaoSocial,
            cnpj: this.removeMascara(this.cnpj),
            inscricaoEstado: this.inscricaoEstadual,
            fone: this.removeMascara(this.telefone),
            celular: this.removeMascara(this.celular),
            email: this.email,
            cep: this.removeMascara(this.cep),
            cidade: this.cidade,
            uf: this.uf,
            bairro: this.bairro,
            numero: this.numero,
            rua: this.rua,
            complemento: this.complemento,
            responsavelLegal: this.responsavelLegal,
            responsavelLegalContato: this.removeMascara(this.contatoRespLegal),
          };

          const response = await cadastrarOrganizacao(data);

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
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
