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
            <v-col cols="12">
              <v-text-field
                v-model="setor.nomeSetor"
                placeholder="Nome do setor"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="setor.nomeCoordenador"
                placeholder="Nome do coordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="setor.nomeSocialCoordenador"
                placeholder="Nome social do coordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="setor.emailCoordenador"
                placeholder="E-mail do coordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="setor.telefoneCoordenador"
                placeholder="Telefone do coordenador"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="setor.vagasTotais"
                placeholder="Quantidade de vagas"
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
import { fetchSetoresPorId } from "../../../services/SetoresService";

export default {
  props: {
    setorId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const setor = ref({});

    const loadSetor = async () => {
      const response = await fetchSetoresPorId(props.setorId);
      if (response) {
        setor.value = response;
      } else {
        console.error("Erro ao buscar setor.");
      }
    };

    onMounted(() => {
      loadSetor();
    });

    return {
      setor,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
