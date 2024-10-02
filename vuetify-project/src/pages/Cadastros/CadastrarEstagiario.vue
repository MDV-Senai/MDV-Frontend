<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Estagiário</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome"
              :rules="[rules.required, rules.fullname]"
              v-model="nome"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="8" md="12">
            <v-text-field
              label="Nome social"
              v-model="nomeSocial"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-show="isVisible"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <v-switch
              v-model="isVisible"
              class="text-grey-darken-4"
              label="Exibir Nome Social"
              variant="outlined"
              id="toggleSwitch"
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Nº Matrícula do Estudante"
              :rules="[rules.required]"
              v-model="numeroMatriEstu"
              maxlength="25"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="CPF"
              :rules="[rules.required]"
              v-model="cpf"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'###.###.###-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Data De Nasc."
              type="date"
              :rules="[rules.required]"
              v-model="dataNasc"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="3">
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
              v-model="telefone"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Número do Contato Emergencial"
              :rules="[rules.required]"
              v-model="numeroContatoEmerg"
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
              label="Nome do Contato Emergencial"
              :rules="[rules.required, rules.fullname]"
              v-model="nomeContatoEmerg"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Instituição De Ensino"
              :rules="[rules.required]"
              v-model="instituicaoEnsino"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-autocomplete
              v-model="idCurso"
              label="Curso"
              class="text-grey-darken-4"
              variant="outlined"
              :items="cursos"
              :item-title="'nomeCurso'"
              :item-value="'idCurso'"
            ></v-autocomplete>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              label="Período"
              :rules="[rules.required]"
              v-model="periodo"
              maxlength="2"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome do Professor Responsável"
              :rules="[rules.required, rules.fullname]"
              v-model="nomeProfessorResp"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
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
              :rules="[rules.required]"
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
                class="my-10"
                width="183"
                height="62"
                id="botaoEntrar"
                @click="enviarDados"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon class="text-grey-darken-4"></v-icon>
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
import { fetchCursos } from "../../services/CursosService.js";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      idCurso: null,
      nome: null,
      nomeSocial: null,
      numeroMatriEstu: null,
      cpf: null,
      dataNasc: null,
      email: null,
      celular: null,
      telefone: null,
      numeroContatoEmerg: null,
      nomeContatoEmerg: null,
      instituicaoEnsino: null,
      cursos: [],
      periodo: null,
      nomeProfessorResp: null,
      cep: null,
      numero: null,
      uf: null,
      complemento: null,
      isVisible: false,
      cidade: null,
      bairro: null,
      logradouro: null,
      enableSocialName: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        hidden: (value) => hiddenSocialName(value),
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
    };
  },
  methods: {
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
            nome: this.nome,
            nomeSocial: this.nomeSocial,
            documento: this.string,
            dataNascimento: new Date(this.dataNasc).toISOString(),
            fone: this.telefone,
            celular: this.celular,
            email: this.email,
            matricula: this.numeroMatriEstu,
            contatoEmergencia: this.numeroContatoEmerg,
            nomeContatoEmergencia: this.nomeContatoEmerg,
            cep: this.cep,
            cidade: this.cidade,
            uf: this.uf,
            numeroResidencia: this.numero,
            rua: this.logradouro,
            bairro: this.bairro,
            complemento: this.complemento,
            cursoId: this.idCurso,
            documento: this.cpf,
          };

          const url = import.meta.env.VITE_BACKEND_URL + "/aluno";
          console.log(url);

          let token = sessionStorage.getItem("authToken");

          const req = await axios.post(url, data, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          Swal.fire({
            title: "Cadastro Realizado com Sucesso!",
            icon: "success",
          });
          this.$refs.form.reset();

          console.log("Resposta: ", req);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },

    async loadCursos() {
      const response = await fetchCursos();
      console.log(response);
      this.cursos = response;
    },

    reset() {
      this.$refs.form.reset();
    },
  },
  mounted() {
    this.loadCursos();
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
