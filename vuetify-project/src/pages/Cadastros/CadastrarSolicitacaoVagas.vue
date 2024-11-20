<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Solicitação de Vagas</h3></v-card
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
            <v-autocomplete
              v-model="idCurso"
              label="Curso"
              :rules="[rules.verificaCurso]"
              class="text-grey-darken-4"
              variant="outlined"
              :items="cursos"
              :item-title="'cursoHomologado.nomeCurso'"
              :item-value="'id'"
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-select
              label="Setor Disponível"
              :rules="[rules.required]"
              v-model="setorId"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              :items="setores"
              item-title="nomeSetor"
              item-value="id"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Turno"
              v-model="turno"
              :rules="[rules.required]"
              clearable
              :items="['MATUTINO', 'VESPERTINO', 'NOTURNO']"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              label="Quantidade de Vagas"
              v-model="qtdVagas"
              :rules="[rules.required]"
              :min="0"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-number-input>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="Data de Início do Período"
              type="date"
              :rules="[rules.required]"
              v-model="inicioEstagio"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Data Final do Período"
              type="date"
              :rules="[rules.required]"
              v-model="fimEstagio"
              maxlength="10"
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
import Swal from "sweetalert2";
import { cadastrarSolcitacaoVagas } from "../../services/VagasService";
import { fetchSetores } from "../../services/SetoresService";
import { fetchInstituicoes } from "@/services/InstituicoesService.js";
import { fetchCursosPorInstuicaoId } from "../../services/CursosService.js";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Obrigatório.",
        verificaCurso: (value) => {
          if (!this.cursos || this.cursos.length === 0) {
            return "Nenhum curso homologado para essa Instituição de Ensino";
          }
          return true;
        },
      },
      estagiario: null,
      estagiarios: [],
      setores: [],
      setorId: null,
      turno: null,
      qtdVagas: null,
      situacao: null,
      descricaoVaga: null,
      inicioEstagio: null,
      fimEstagio: null,
      roleUsuario: null,
      instituicaoEnsino: null,
      instituicoes: [],
      idCurso: null,
      cursos: [],

      domingo: false,
      segunda: false,
      terca: false,
      quarta: false,
      quinta: false,
      sexta: false,
      sabado: false,
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    async enviarDados() {
      if (this.$refs.form.validate()) {
        try {
          const data = {
            cursoHomologadoId: this.idCurso,
            setorId: this.setorId,
            instEnsinoId: this.instituicaoEnsino,
            quantidadeVagas: this.qtdVagas,
            periodo: this.turno,
            dataInicio: this.inicioEstagio,
            dataFim: this.fimEstagio,
          };

          console.log(data);

          const response = await cadastrarSolcitacaoVagas(data);

          if (response) {
            Swal.fire({
              title: "Cadastro Realizado com Sucesso!",
              icon: "success",
            });
            this.$refs.form.reset();
          }

          console.log("Resposta: ", response);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
      }
    },

    async listarSetores() {
      const response = await fetchSetores();
      this.setores = response;
    },

    async getRoleUsuario() {
      const userRole = sessionStorage.getItem("userRole");
      this.roleUsuario = userRole;
    },

    async listarCursosInstituicaoId(instId) {
      if (instId) {
        const response = await fetchCursosPorInstuicaoId(instId);
        this.cursos = [
          {
            id: null,
            cursoHomologado: { nomeCurso: "Selecione um curso" }
          },
          ...response.cursos
        ];
        console.log(this.cursos);
      }
    },

    async loadInstituicaoEnsino() {
      const response = await fetchInstituicoes();
      this.instituicoes = response;
      console.log(this.instituicoes);
    },

    onInstituicaoChange(selectedItem) {
      console.log("Instituição selecionada (via método):", selectedItem);
    },
  },

  mounted() {
    this.listarSetores();
    this.getRoleUsuario();
    this.loadInstituicaoEnsino();
  },

  watch: {
    instituicaoEnsino(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.listarCursosInstituicaoId(newValue);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
