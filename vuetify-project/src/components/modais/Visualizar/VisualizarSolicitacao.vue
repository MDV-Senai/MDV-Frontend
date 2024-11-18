<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-eye-outline"
        class="my-icon-spacing light-green-darken-3-var"
      ></v-icon>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="d-flex justify-center text-center">
        <div>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                label="Setor"
                v-model="solicitacao.setor.nomeSetor"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                label="Nome do Coordenador"
                v-model="solicitacao.setor.nomeCoordenador"
                placeholder="Nome do coordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Responsável IS"
                v-model="solicitacao.instituicaoEnsino.responsavelLegal"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Instituição Solicitante"
                v-model="solicitacao.instituicaoEnsino.razaoSocial"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                label="Data Inicio"
                v-model="solicitacao.dataInicio"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Data Fim"
                v-model="solicitacao.dataFim"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Quantidade de vagas"
                v-model="solicitacao.quantidadeVagas"
                placeholder="Quantidade de vagas"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                label="Data Solicitação"
                v-model="solicitacao.dataSolicitacao"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Período"
                v-model="solicitacao.periodo"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                label="Status"
                v-model="solicitacao.status"
                placeholder="Quantidade de vagas"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchSolicitacaoVagaPorId } from "../../../services/SolicitacaoService";
import { formatDate } from "@/util/tools";

export default {
  props: {
    solId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const solicitacao = ref({});

    const loadSolicitacao = async () => {
      const response = await fetchSolicitacaoVagaPorId(props.solId);
      if (response) {
        solicitacao.value = response;
        solicitacao.value.dataSolicitacao = formatDate(solicitacao.value.dataSolicitacao)
        solicitacao.value.dataInicio = formatDate(solicitacao.value.dataInicio)
        solicitacao.value.dataFim = formatDate(solicitacao.value.dataFim)
      } else {
        console.error("Erro ao buscar solicitação.");
      }
    };

    onMounted(() => {
      loadSolicitacao();
    });

    return {
      solicitacao,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
