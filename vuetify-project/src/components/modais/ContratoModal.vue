<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-eye-outline"
        class="my-icon-spacing"
        color="pink-darken-4"
      ></v-icon>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card class="d-flex justify-center text-center">
        <div>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="12">
              <v-text-field
                label="Nome/Nome Social"
                id="nome_prof"
                value="Fulano"
                reandoly
                class="text-pink-darken-1"
                color="pink-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Número de Matrícula"
                id="numero_mat"
                value="00000000"
                reandoly
                class="text-pink-darken-1"
                color="pink-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="CPF"
                id="inscricao"
                value="000.000.000-00"
                reandoly
                class="text-pink-darken-1"
                color="pink-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Instituição de Ensino"
                id="instituicao_ensino"
                value="Instituição de Ensino"
                reandoly
                class="text-pink-darken-1"
                color="pink-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Curso"
                id="curso"
                value="Curso"
                reandoly
                class="text-pink-darken-1"
                color="pink-darken-4"
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
export default {
  name: "ContratoModal",
};
</script>