<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Cadastro de Estagiário</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <!-- Campos do formulário -->
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
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome social"
              v-model="nomeSocial"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-show="isVisible"
            ></v-text-field>
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
          <v-col cols="6" md="4">
            <v-autocomplete
              v-model="idCurso"
              label="Curso"
              :rules="[rules.required]"
              class="text-grey-darken-4"
              variant="outlined"
              :items="cursos"
              :item-title="'cursoHomologado.nomeCurso'"
              :item-value="'id'"
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
          <v-col cols="12" md="4">
            <v-file-input
              label="Apólice"
              :rules="[rules.fileSize]"
              v-model="apoliceFile"
              ref="apolice"
              accept=".pdf"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-file-input>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Número da apólice"
              :rules="[rules.fileSize]"
              v-model="numeroApolice"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Data Fim da Apólice"
              type="date"
              :rules="[rules.required]"
              v-model="dataFimApolice"
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
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>
  </v-main>
</template>

<script>
import { emailValidation, fullNameValidation, fileSizeValidation } from "@/validations/formValidations";
import { buscaCep } from "@/util/buscaCep";
import { fetchCursos } from "../../services/CursosService.js";
import Swal from "sweetalert2";
import { cadastrarEstagiario } from "../../services/EstagiariosService.js";
import { fetchInstituicoes } from "@/services/InstituicoesService.js";

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
      numeroApolice: null,
      apoliceFile: null,
      dataFimApolice: null,
      instituicaoEnsino: null,
      cursos: [],
      instituicoes: [],
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
      instEnsinoId: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
        fileSize: () => fileSizeValidation(this.$refs.apolice.files[0]),
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
      const removeMascara = (valor) => (valor ? valor.replace(/\D/g, "") : "");

      if (this.$refs.form.validate()) {
        const data = {
          nome: this.nome,
          nomeSocial: this.nomeSocial,
          documento: removeMascara(this.cpf),
          dataNascimento: new Date(this.dataNasc).toISOString(),
          fone: removeMascara(this.telefone),
          celular: removeMascara(this.celular),
          email: this.email,
          matricula: this.numeroMatriEstu,
          contatoEmergencia: removeMascara(this.numeroContatoEmerg),
          nomeContatoEmergencia: this.nomeContatoEmerg,
          cep: removeMascara(this.cep),
          cidade: this.cidade,
          uf: this.uf,
          numeroResidencia: this.numero,
          rua: this.logradouro,
          bairro: this.bairro,
          complemento: this.complemento,
          cursoId: this.idCurso,
          instEnsinoId: this.instituicaoEnsino,
          numeroApolice: this.numeroApolice,
          dataFimApolice: new Date(this.dataFimApolice).toISOString(),
          file: this.$refs.apolice.files[0]
        };

        console.log(data);

        const response = await cadastrarEstagiario(data);

        if (response) {
          Swal.fire({
            title: "Cadastro Realizado com Sucesso!",
            icon: "success",
          });
          this.$refs.form.reset();
        }
      }
    },

    async listarCursosInstituicaoId(instId) {
      if (instId) {
        const response = await fetchCursos(instId);
        this.cursos = response.cursos;
        console.log(this.cursos);
      }
    },

    async loadInstituicaoEnsino() {
      const response = await fetchInstituicoes();
      this.instituicoes = response;
      console.log(this.instituicoes);
    },

    onInstituicaoChange(selectedItem) {

      console.log('Instituição selecionada (via método):', selectedItem);
    },

    reset() {
      this.$refs.form.reset();
    },
  },

  mounted() {
    this.loadInstituicaoEnsino();
  },

  watch: {
    instituicaoEnsino(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.listarCursosInstituicaoId(newValue)
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
