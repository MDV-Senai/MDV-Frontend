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
      <v-card>
        <v-card-text style="max-height: 500px; overflow-y: auto; padding: 16px">
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                label="Nome"
                v-model="estagiario.nome"
                placeholder="Nome"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                label="Nome Social"
                v-model="estagiario.nomeSocial"
                placeholder="Nome Social"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Documento"
                v-model="estagiario.documento"
                placeholder="Documento"
                class="text-grey-darken-1"
                color="grey-darken-4"
                v-mask="'###.###.###-##'"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Data de Nascimento"
                v-model="estagiario.dataNascimento"
                placeholder="Data de Nascimento"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Celular"
                v-model="estagiario.celular"
                placeholder="Celular"
                class="text-grey-darken-1"
                v-mask="'(##) #####-####'"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Telefone"
                v-model="estagiario.fone"
                placeholder="Fone"
                v-mask="'(##) ####-####'"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="E-mail"
                v-model="estagiario.email"
                placeholder="Email"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Matricula"
                v-model="estagiario.matricula"
                placeholder="Matrícula"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Nome do Contato de Emergência"
                v-model="estagiario.nomeContatoEmergencia"
                placeholder="Nome Contato Emergência"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Número do Contato de Emergência"
                v-model="estagiario.contatoEmergencia"
                placeholder="Contato Emergência"
                v-mask="'(##) #####-####'"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                label="CEP"
                v-model="estagiario.cep"
                placeholder="CEP"
                class="text-grey-darken-1"
                color="grey-darken-4"
                v-mask="'#####-###'"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Rua"
                v-model="estagiario.rua"
                placeholder="Rua"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Número Residência"
                v-model="estagiario.numeroResidencia"
                placeholder="Número Residência"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="4">
              <v-text-field
                label="Complemento"
                v-model="estagiario.complemento"
                placeholder="Complemento"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Bairro"
                v-model="estagiario.bairro"
                placeholder="Bairro"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                label="Cidade"
                v-model="estagiario.cidade"
                placeholder="Cidade"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="8">
              <v-text-field
                label="UF"
                v-model="estagiario.uf"
                placeholder="UF"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <a :href="urlApoliceLink" target="_blank" class="text-grey-darken-1" color="grey-darken-4">Visualizar apólice</a>
            </v-col>
          </v-row>
        </v-card-text>
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
import { fetchEstagiarioPorId } from "../../../services/EstagiariosService";

export default {
  props: {
    estgId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const estagiario = ref({});
    const urlApoliceLink = import.meta.env.VITE_BACKEND_URL + "/aluno/" + props.estgId + "/apolice"

    const loadEstagiario = async () => {
      const response = await fetchEstagiarioPorId(props.estgId);
      if (response) {
        estagiario.value = response;
      } else {
        console.error("Erro ao buscar estagiario.");
      }
    };

    onMounted(() => {
      loadEstagiario();
    });

    return {
      estagiario,
      urlApoliceLink
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
