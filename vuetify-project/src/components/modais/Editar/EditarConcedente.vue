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
                v-model="organizacao.nomeFantasia"
                label="Nome Fantasia"
                placeholder="Nome da organização"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="organizacao.razaoSocial"
                label="Razão Social"
                placeholder="Razão social"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.cnpj"
                label="CNPJ"
                placeholder="cnpj"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.inscricaoEstado"
                label="Inscrição Estadual"
                placeholder="inscrição estadual"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.fone"
                label="Telefone"
                placeholder="Telefone"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.email"
                placeholder="Email"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.cep"
                label="CEP"
                placeholder="cep"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.cidade"
                label="Cidade"
                placeholder="cidade"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.uf"
                label="Estado"
                placeholder="estado"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.bairro"
                label="Bairro"
                placeholder="bairro"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.rua"
                label="Rua"
                placeholder="rua"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="organizacao.numero"
                label="Número"
                placeholder="numero"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                v-model="organizacao.complemento"
                label="Complemento"
                placeholder="complemento"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="organizacao.responsavelLegal"
                label="Responsável Legal"
                placeholder="responsavelLegal"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="organizacao.responsavelLegalContato"
                label="Contato Responsável Legal"
                placeholder="responsavelLegalContato"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Salvar" @click="editConcedente">Salvar</v-btn>
          <v-btn text="Fechar" @click="isDialogActive = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { ref, onMounted } from "vue";
import {
  fetchConcedentePorId,
  updateConcedente,
} from "../../../services/OrganizacaoService";
import Swal from "sweetalert2";

export default {
  props: {
    concId: {
      type: String,
      required: true,
    },
    organizacaoData: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const organizacao = ref({});
    const isDialogActive = ref(false);

    const loadConcedente = async () => {
      const response = await fetchConcedentePorId(props.concId);
      if (response) {
        organizacao.value = response;
      } else {
        console.error("Erro ao buscar organização.");
      }
    };

    const editConcedente = async () => {
      const response = await updateConcedente(props.concId, organizacao.value);
      if (response) {
        organizacao.value = response;
        isDialogActive.value = false;
        Swal.fire({
          title: "Atualização bem-sucedida!",
          text: "A organização foi atualizada com sucesso.",
          icon: "success",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      } else {
        console.error("Erro ao atualizar organização.");
      }
    };

    onMounted(() => {
      loadConcedente();
    });

    return {
      organizacao,
      isDialogActive,
      editConcedente,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
