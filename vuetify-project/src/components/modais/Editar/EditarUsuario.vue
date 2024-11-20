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
                v-model="usuario.name"
                placeholder="Nome"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="usuario.role"
                placeholder="Tipo de Usuário"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="usuario.email"
                placeholder="Email"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Salvar" @click="editUsuario">Salvar</v-btn>
          <v-btn text="Fechar" @click="isDialogActive = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import { fetchUsuarioPorId, updateUsuario } from '../../../services/AdminService';
import Swal from "sweetalert2";

export default {
  props: {
    usuarioId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const usuario = ref({});
    const isDialogActive = ref(false);

    const loadUsuario = async () => {
      const response = await fetchUsuarioPorId(props.usuarioId);
      
      if (response) {
        usuario.value = response;
      } else {
        console.error("Erro ao buscar usuário.");
      }
    };

    const editUsuario = async () => {
        console.log(props.usuarioId);
        console.log(usuario.value);
        
      const response = await updateUsuario(props.usuarioId, usuario.value);
      if (response) {
        usuario.value = response;
        isDialogActive.value = false;
        Swal.fire({
          title: "Atualização bem-sucedida!",
          text: "O usuário foi atualizado com sucesso.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      } else {
        console.error("Erro ao atualizar usuário.");
      }
    };

    onMounted(() => {
      loadUsuario();
    });

    return {
      usuario,
      isDialogActive,
      editUsuario
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>