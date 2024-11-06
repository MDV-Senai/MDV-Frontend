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
                v-model="vaga.setor.nomeSetor"
                placeholder="nomeSetor"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="vaga.setor.nomeCoordenador"
                placeholder="nomeCoordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="vaga.ano"
                placeholder="ano"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="vaga.semestre"
                placeholder="semestre"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="vaga.vagasDisponiveis"
                placeholder="vagasDisponiveis"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="vaga.statusVaga"
                placeholder="statusVaga"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Salvar" @click="editVaga">Salvar</v-btn>
          <v-btn text="Fechar" @click="isDialogActive = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchVagaPorId, updateVaga } from "../../../services/VagasService";
import Swal from "sweetalert2";

export default {
  props: {
    vagaId: {
      type: String,
      required: true,
    },
    vagaData: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const vaga = ref({});
    const isDialogActive = ref(false);

    const loadVaga = async () => {
      const response = await fetchVagaPorId(props.vagaId);
      if (response) {
        vaga.value = response;
      } else {
        console.error("Erro ao buscar vaga.");
      }
    };

    const editVaga = async () => {
      const response = await updateVaga(props.vagaId, vaga.value);
      if (response) {
        vaga.value = response;
        isDialogActive.value = false;
        Swal.fire({
          title: "Atualização bem-sucedida!",
          text: "A vaga foi atualizada com sucesso.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      } else {
        console.error("Erro ao atualizar vaga.");
      }
    };

    onMounted(() => {
      loadVaga();
    });

    return {
      vaga,
      isDialogActive,
      editVaga,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>