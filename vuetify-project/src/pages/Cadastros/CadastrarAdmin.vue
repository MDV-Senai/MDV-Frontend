<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastrar Usuário</h3></v-card
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
            >
            </v-text-field>
          </v-col>
        </v-row>

        <!-- <v-row class="d-flex justify-center">
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
        </v-row> -->

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-select
              label="Tipo de Usuário"
              v-model="tipoUsuario"
              :rules="[rules.required]"
              clearable
              :items="items"
              item-title="tipos"
              item-value="id"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>

        <v-row
          v-if="tipoUsuario == 'INST_ENSINO'"
          class="d-flex justify-center"
        >
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
            ></v-autocomplete>
          </v-col>
        </v-row>

        <!-- <v-row class="d-flex justify-center">
          <v-col cols="6" md="6">
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
          <v-col cols="6" md="6">
            <v-text-field
              label="Nº de Matrícula de Trabalho"
              :rules="[rules.required]"
              v-model="numeroMatriculaTrabalho"
              maxlength="20"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row> -->

        <!-- <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="4">
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
          <v-col cols="6" md="4">
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
          <v-col cols="12" md="4">
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
        </v-row> -->

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
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

    <v-container>
      <v-card flat>
        <v-card-title class="d-flex align-center pe-2">
          Consulta de Usuários

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            density="compact"
            label="Consultar"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-card-title>

        <v-divider></v-divider>
        <v-data-table height="400" item-value="name">
          <thead>
            <tr>
              <th class="text-left">Nome</th>
              <th class="text-left">Tipo de Usuário</th>
              <th class="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in usuarios" :key="item.id">
              <td class="text-left">{{ item.name }}</td>
              <td class="text-left">{{ item.role }}</td>
              <td class="text-center">
                <VisualizarUsuario :usuarioId="item.id" />
                <EditarUsuario :usuarioId="item.id" />
                <DeletarItem :itemKey="'user'" :id="item.id" />
              </td>
            </tr>
          </tbody>
        </v-data-table>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
import {
  fullNameValidation,
  confirmPasswordValidation,
  emailValidation,
} from "@/validations/formValidations";
import { fetchInstituicoes } from "@/services/InstituicoesService.js";
import { cadastrarAdmin, fetchUsuarios } from "../../services/AdminService";
import Swal from "sweetalert2";

export default {
  data() {
    return {
      instituicaoEnsino: null,
      instituicoes: [],
      usuarios: [],
      tipoUsuario: null,
      senha: null,
      nome: null,
      nomeSocial: null,
      cpf: null,
      numeroMatriculaTrabalho: null,
      telefone: null,
      celular: null,
      email: null,
      show1: false,
      show2: false,
      enableSocialName: false,
      isVisible: false,
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        identic: (value) => confirmPasswordValidation(value),
        email: (value) => emailValidation(value),
        fullname: (value) => fullNameValidation(value),
      },
      items: [
        { tipos: "Admin", id: "ADMIN" },
        { tipos: "Organização Concedente", id: "ORG_CONCEDENTE_ADMIN" },
        { tipos: "Instituição De Ensino", id: "INST_ENSINO" },
      ],
      search: "",
      headers: [
        { title: "Nome", align: "start", key: "name" },
        { title: "Tipo do Usuário", align: "start", key: "speed" },
        { title: "Ações", align: "start", sortable: false },
      ],
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    async loadUsuarios() {
      const response = await fetchUsuarios();
      this.usuarios = response;
    },

    async enviarDados() {
      if (this.$refs.form.validate()) {
        const data = {
          name: this.nome,
          email: this.email,
          password: this.senha,
          role: this.tipoUsuario,
          instituicaoEnsinoId: this.instituicaoEnsino,
        };

        console.log(data);

        const response = await cadastrarAdmin(data);

        if (response) {
          Swal.fire({
            title: "Cadastro Realizado com Sucesso!",
            icon: "success",
          }).then(() => {
            window.location.reload();
          });
          this.$refs.form.reset();
        }
      }
    },

    async loadInstituicaoEnsino() {
      const response = await fetchInstituicoes();
      this.instituicoes = response;
    },

    handleButtonClick(item) {
      alert("Button clicked for:" + item);
    },
  },

  mounted() {
    this.loadInstituicaoEnsino();
    this.loadUsuarios();
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>