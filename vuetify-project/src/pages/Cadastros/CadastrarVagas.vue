<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Vagas</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto mt-8">
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
             <v-select
              label="Curso do Posto de Trabalho (Vaga)"
              :rules="[rules.required]"
              v-model="idCurso"
              class="text-grey-darken-4"
              variant="outlined"
              :items="cursoVaga"
              item-title="nomeCurso"
              item-value="id"
              multiple
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
           <v-col cols="12" md="12">
            <v-select
              label="Setor Disponível"
              :rules="[rules.required]"
              v-model="setor"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-number-input
              label="Ano"
              v-model="ano"
              :rules="[rules.required]"
              :min="0"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-number-input>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Semestre"
              v-model="semestre"
              :rules="[rules.required]"
              clearable
              :items="[1, 2]"
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="4">
            <v-number-input
              label="Quantidade de Vagas no Setor"
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
import { cadastrarVagas } from '../../services/VagasService';
import { fetchCursosHomologados } from "../../services/CursosService.js";
export default {
  data() {
    return {
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
      idCurso: [],
      cursoVaga: [],
      setor: null,
      ano: null,
      qtdVagas: null,
      semestre: null,
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
            cursosId: idCurso,
            setorId: '92e7a384-9ff3-4621-97ca-e5bd83a5da94',
            ano: this.ano,
            semestre: this.semestre,
            vagasDisponiveis: this.qtdVagas,
          };

          console.log(data);
          const response = await cadastrarVagas(data);

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

    async listarCursosInstituicaoId() {
        const response = await fetchCursosHomologados();
        this.cursoVaga = response;
        console.log(this.cursoVaga);
    },
  },

  mounted(){
    this.listarCursosInstituicaoId();
  }
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>