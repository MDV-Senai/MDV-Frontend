<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-delete"
        class="my-icon-spacing light-green-darken-3-var"
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
          <v-btn color="red" text="Confirmar" @click="isActive.value = false"></v-btn>
          <v-btn text="Fechar" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {
  name: "DeletarItem",
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>