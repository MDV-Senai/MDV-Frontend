<template>
  <v-dialog max-width="800">
    <template v-slot:activator="{ props: activatorProps }">
      <v-icon v-bind="activatorProps" density="compact" icon="mdi-pencil" class="my-icon-spacing light-green-darken-3-var"></v-icon>
    </template>

    <template v-slot:default="{ isActive }">
      <v-form>
        <v-card class="d-flex justify-center text-center">
          <div>
            <v-row class="mx-5 my-5">
              <v-col cols="12">
                <v-text-field v-model="setor.nomeSetor" placeholder="Nome do setor" class="text-grey-darken-1"
                  color="grey-darken-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-5 my-5">
              <v-col cols="12">
                <v-text-field v-model="setor.nomeCoordenador" placeholder="Nome do coordenador"
                  class="text-grey-darken-1" color="grey-darken-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-5 my-5">
              <v-col cols="12">
                <v-text-field v-model="setor.nomeSocialCoordenador" placeholder="Nome social do coordenador"
                  class="text-grey-darken-1" color="grey-darken-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-5 my-5">
              <v-col cols="12">
                <v-text-field v-model="setor.emailCoordenador" placeholder="E-mail do coordenador"
                  class="text-grey-darken-1" color="grey-darken-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mx-5 my-5">
              <v-col cols="12" md="6">
                <v-text-field v-model="setor.telefoneCoordenador" placeholder="Telefone do coordenador"
                  class="text-grey-darken-1" color="grey-darken-4"></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="setor.vagasTotais" placeholder="Quantidade de vagas" class="text-grey-darken-1"
                  color="grey-darken-4"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-alert v-if="errorMessage" type="error">{{ errorMessage }}</v-alert>
              </v-col>
            </v-row>
          </div>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text="Salvar" @click="handleUpdateSetor(isActive)">Salvar</v-btn>
            <v-btn text="Fechar" @click="isActive.value = false">Fechar</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { fetchSetoresPorId, updateSetor } from "../../../services/SetoresService";

export default {
  props: {
    setorId: {
      type: String,
    },
  },
  setup(props) {
    const setor = ref({});
    const errorMessage = ref("");

    const loadSetor = async () => {
      const response = await fetchSetoresPorId(props.setorId);
      if (response) {
        setor.value = response;
      } else {
        console.error("Erro ao buscar setor.");
      }
    };

    const handleUpdateSetor = async (isActive) => {
      errorMessage.value = "";
      try {
        const response = await updateSetor(props.setorId, setor.value);
        if (response) {
          isActive.value = false;
          Swal.fire({
            title: "Cadastro atualizado com Sucesso!",
            icon: "success",
          });
        } else {
          errorMessage.value = "Erro ao atualizar setor!";
        }
      } catch (error) {
        console.error("Erro na atualização:", error);
        errorMessage.value = "Ocorreu um erro ao tentar atualizar o setor.";
      }
    };

    onMounted(() => {
      loadSetor();
    });

    return {
      setor,
      handleUpdateSetor,
      errorMessage,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
