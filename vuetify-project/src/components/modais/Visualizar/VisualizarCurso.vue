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
            <v-col cols="12" md="12">
              <v-text-field
                v-model="curso.nomeCurso"
                label="Nome do Curso"
                placeholder="nome curso"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                id="numero_mat"
                v-model="curso.id"
                label="Id do curso"
                placeholder="id"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                id="inscricao"
                value="Homologado"
                placeholder="situação curso"
                label="Situação do curso"
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
import { fetchCursoPorId } from "../../../services/CursosService";

export default {
  props: {
    cursoId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const curso = ref({});

    const loadCurso = async () => {
      const response = await fetchCursoPorId(props.cursoId);
      if (response) {
        curso.value = response;
      } else {
        console.error("Erro ao buscar curso.");
      }
    };

    onMounted(() => {
      loadCurso();
    });

    return {
      curso,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
