<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-pencil"
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
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Atualizar" @click="atualizarCurso(isActive)">Salvar</v-btn>
          <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { fetchCursoPorId, atualizarCursoPorId } from "../../../services/CursosService";

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

    const atualizarCurso = async (isActive) => {
      try {
        const data = {
          nomeCurso: curso.value.nomeCurso,
        };

        const response = await atualizarCursoPorId(props.cursoId, data);
        if (response) {
          isActive.value = false;
          Swal.fire({
            title: "Curso atualizado com Sucesso!",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Ocorreu um problema ao atualizar o curso.",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Erro ao atualizar curso:", error);
      }
    };

    onMounted(() => {
      loadCurso();
    });

    return {
      curso,
      atualizarCurso,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
