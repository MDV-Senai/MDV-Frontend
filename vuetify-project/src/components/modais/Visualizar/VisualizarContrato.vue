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
      <v-card>
        <v-card-text style="max-height: 500px; overflow-y: auto; padding: 16px">
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="contrato.nomeEstagiario"
                label="Nome Estágiario"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="contrato.razaoSocialInstituicaoEnsino"
                label="Instituição Ensino"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="contrato.nomeSetor"
                label="Setor"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="contrato.dataInicioVigenciaSeguro"
                label="Data Inicio Seguro"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="contrato.dataFimVigenciaSeguro"
                label="Data Fim Seguro"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <a
                @click.prevent="downloadContrato"
                class="text-grey-darken-1"
                color="grey-darken-4"
                href="#"
              >
                Baixar contrato
              </a>
            </v-col>
          </v-row>
        </v-card-text>
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
import { fetchContratoPorId } from "../../../services/ContratosService.js";
import { formatDate } from "@/util/tools";

export default {
  props: {
    contratoId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const contrato = ref({});
    const urlContratoLink =
      import.meta.env.VITE_BACKEND_URL +
      "/contrato/" +
      props.contratoId +
      "/arquivo";

    const loadContrato = async () => {
      const response = await fetchContratoPorId(props.contratoId);
      if (response) {
        contrato.value = response;
        contrato.value.dataInicioVigenciaSeguro = formatDate(
          contrato.value.dataInicioVigenciaSeguro
        );
        contrato.value.dataFimVigenciaSeguro = formatDate(
          contrato.value.dataFimVigenciaSeguro
        );
      } else {
        console.error("Erro ao buscar contrato.");
      }
    };

    const downloadContrato = async () => {
      try {
        const response = await fetch(urlContratoLink);
        if (!response.ok) {
          throw new Error("Erro ao buscar o contrato PDF.");
        }

        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = "contrato.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error("Erro ao processar o contrato PDF:", error);
      }
    };

    onMounted(() => {
      loadContrato();
    });

    return {
      contrato,
      downloadContrato,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>