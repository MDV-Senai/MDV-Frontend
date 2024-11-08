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
                v-model="coordenador.nome"
                placeholder="Nome"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                readonly
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
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="coordenador.fone"
                placeholder="responsavelLegal"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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

          <!-- Adicionando a lista de cursos -->
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-subheader>Cursos</v-subheader>
              <v-list>
                <v-list-item-group v-if="coordenador.cursos && coordenador.cursos.length > 0">
                  <v-list-item v-for="(curso, index) in coordenador.cursos" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>{{ curso }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
                <v-list-item v-else>
                  <v-list-item-content>
                    <v-list-item-title>Nenhum curso disponível.</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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

    const loadCoordenador = async () => {
      const response = await fetchCoordenadorPorId(props.coordId);
      if (response) {
        coordenador.value = response;
      } else {
        console.error("Erro ao buscar coordenador.");
      }
    };

    const loadInstituicao = async () => {
      const response = await fetchInstituicoesPorId(coordenador.instituicaoEnsino);
      if (response) {
        instituicao.value = response;
      } else {
        console.error("Erro ao buscar instituicao.");
      }
    };

    onMounted(() => {
      loadCoordenador();
      loadInstituicao();
    });

    return {
      coordenador,
      instituicao
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>