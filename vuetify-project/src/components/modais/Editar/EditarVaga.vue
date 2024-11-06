<template>
  <v-dialog v-model="isDialogActive" max-width="400">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-pencil"
        class="my-icon-spacing light-green-darken-3-var"
        @click="showAlert"
      ></v-icon>
    </template>

    <template v-slot:default>
      <v-card>
        <v-card-text class="text-center" style="padding: 24px">
          <h3>Operação não permitida</h3>
          <p>Não é possível editar esta vaga.</p>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="isDialogActive = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isDialogActive = ref(false);

    const showAlert = () => {
      isDialogActive.value = true;
    };

    return {
      isDialogActive,
      showAlert,
    };
  },
};
</script>

<style scoped>
.my-icon-spacing {
  cursor: pointer;
}
</style>