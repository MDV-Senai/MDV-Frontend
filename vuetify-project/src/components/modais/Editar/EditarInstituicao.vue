<template>
  <v-dialog max-width="800" v-model="isDialogActive">
    <template #activator="{ props: activatorProps }">
      <v-icon
        v-bind="activatorProps"
        density="compact"
        icon="mdi-pencil"
        class="my-icon-spacing light-green-darken-3-var"
      ></v-icon>
    </template>

    <v-card>
      <v-card-text style="max-height: 500px; overflow-y: auto; padding: 16px">
        <v-row class="mx-5 my-5">
          <v-col cols="12">
            <v-text-field
              v-model="instituicao.nomeFantasia"
              placeholder="Nome da Instituição"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12">
            <v-text-field
              v-model="instituicao.razaoSocial"
              placeholder="Razão Social"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.cnpj"
              placeholder="CNPJ"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.inscricaoEstadual"
              placeholder="Inscrição Estadual"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.telefone"
              placeholder="Telefone"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.email"
              placeholder="Email"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.cep"
              placeholder="cep"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.cidade"
              placeholder="cidade"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.estado"
              placeholder="estado"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.bairro"
              placeholder="bairro"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.rua"
              placeholder="rua"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.numero"
              placeholder="numero"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="instituicao.complemento"
              placeholder="complemento"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="instituicao.responsavelLegal"
              placeholder="responsavelLegal"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="instituicao.responsavelLegalContato"
              placeholder="responsavelLegalContato"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="12">
            <h3 class="text-grey-darken-4">Cursos Homologados</h3>
            <v-list>
              <v-list-item
                v-for="(curso, index) in instituicao.cursosHomologados"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ curso.nomeCurso }}
                    <v-icon
                      density="compact"
                      icon="mdi-check"
                      class="my-icon-spacing light-green-darken-3-var"
                    ></v-icon>
                    <v-icon
                      density="compact"
                      icon="mdi-pencil"
                      class="my-icon-spacing light-green-darken-3-var"
                    ></v-icon>
                    <v-icon
                      density="compact"
                      icon="mdi-delete"
                      class="my-icon-spacing light-red-darken-3-var"
                    ></v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="editInstituicao">Salvar</v-btn>
        <v-btn text @click="isDialogActive = false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  fetchInstituicoesPorId,
  updateInstituicaoEnsino,
} from "../../../services/InstituicoesService";
import Swal from "sweetalert2";

export default {
  props: {
    instId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const instituicao = ref({});
    const isDialogActive = ref(false);

    const loadInstituicao = async () => {
      try {
        const response = await fetchInstituicoesPorId(props.instId);
        if (response) {
          instituicao.value = response;
        } else {
          throw new Error("Erro ao buscar instituição.");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const editInstituicao = async () => {
      try {
        const response = await updateInstituicaoEnsino(
          props.instId,
          instituicao.value
        );
        if (response) {
          instituicao.value = response;
          isDialogActive.value = false;
          Swal.fire({
            title: "Atualização bem-sucedida!",
            text: "A instituição foi atualizada com sucesso.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error("Erro ao atualizar instituição.");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    onMounted(() => {
      loadInstituicao();
    });

    return {
      instituicao,
      isDialogActive,
      editInstituicao,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
