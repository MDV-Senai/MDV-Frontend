<template>
  <v-dialog v-model="isDialogActive" max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-pencil"
        class="my-icon-spacing light-green-darken-3-var"
      ></v-icon>
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-text style="max-height: 500px; overflow-y: auto; padding: 16px">
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="coordenador.nome"
                placeholder="Nome"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="coordenador.nomeSocial"
                placeholder="Razão social"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="coordenador.email"
                placeholder="complemento"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="coordenador.fone"
                placeholder="responsavelLegal"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="instituicao.nomeFantasia"
                placeholder="nomeFantasia"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Salvar" @click="editConcedente">Salvar</v-btn>
          <v-btn text="Fechar" @click="isDialogActive = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchCoordenadorPorId } from "../../../services/CoordenadorCursoService";
import { fetchInstituicoesPorId } from "../../../services/InstituicoesService";

export default {
  props: {
    coordId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const coordenador = ref({});
    const instituicao = ref({});
    const isDialogActive = ref(false);

    const loadCoordenador = async () => {
      const response = await fetchCoordenadorPorId(props.coordId);
      if (response) {
        coordenador.value = response;
        loadInstituicao(response.instituicaoEnsino);
      } else {
        console.error("Erro ao buscar coordenador.");
      }
    };

    const loadInstituicao = async (instituicaoId) => {
      const response = await fetchInstituicoesPorId(instituicaoId);
      if (response) {
        instituicao.value = response;
      } else {
        console.error("Erro ao buscar instituicao.");
      }
    };

    onMounted(() => {
      loadCoordenador();
    });

    return {
      coordenador,
      instituicao,
      isDialogActive
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>