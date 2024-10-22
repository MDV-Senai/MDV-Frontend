<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-delete"
        class="my-icon-spacing light-red-darken-3-var"
      ></v-icon>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="d-flex justify-center text-center">
        <div>
          <v-card-title class="headline">Confirmar Deleção</v-card-title>
          <v-card-subtitle>
            Você tem certeza de que deseja deletar este item?
          </v-card-subtitle>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text="Confirmar" @click="deletarItem(isActive)"></v-btn>
          <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import axios from "axios"; // Adicionando a importação do Axios
import Swal from "sweetalert2";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    itemKey: {
      type: String,
      required: true,
    },
  },
  methods: {
    async deletarItem(isActive) {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/${this.itemKey}/${this.id}`;
        const response = await axios.delete(url);

        if (response.status === 200) {
          Swal.fire({
            title: "Item deletado com sucesso!",
            icon: "success",
          });
        }
        location.reload();
      } catch (error) {
        Swal.fire({
          title: "Erro ao deletar item!",
          icon: "error",
        });
      }
      isActive.value = false;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
