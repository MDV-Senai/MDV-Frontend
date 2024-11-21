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
                label="Nome"
                v-model="estagiario.nome"
                placeholder="Nome"
                class="text-grey-darken-1"
                color="grey-darken-4"
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
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Documento"
                v-model="estagiario.documento"
                placeholder="Documento"
                v-mask="'###.###.###-##'"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Data de Nascimento"
                v-model="estagiario.dataNascimento"
                placeholder="Data de Nascimento"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Celular"
                v-model="estagiario.celular"
                placeholder="Celular"
                v-mask="'(##) #####-####'"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Fone"
                v-model="estagiario.fone"
                v-mask="'(##) ####-####'"
                placeholder="Fone"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Email"
                v-model="estagiario.email"
                placeholder="Email"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Matrícula"
                v-model="estagiario.matricula"
                placeholder="Matrícula"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Nome Contato Emergência"
                v-model="estagiario.nomeContatoEmergencia"
                placeholder="Nome Contato Emergência"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Contato Emergência"
                v-model="estagiario.contatoEmergencia"
                v-mask="'(##) #####-####'"
                placeholder="Contato Emergência"
                class="text-grey-darken-1"
                color="grey-darken-4"
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
                @input.debounce="preencheCep($event.target.value)"
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
                label="Número recidencia"
                v-model="estagiario.numeroResidencia"
                placeholder="Número Residência"
                class="text-grey-darken-1"
                color="grey-darken-4"
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
            <v-col cols="12" md="6">
              <v-text-field
                label="UF"
                v-model="estagiario.uf"
                placeholder="UF"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                label="Número apolice"
                v-model="estagiario.apoliceSeguro.numero"
                placeholder="Número apolice"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                label="Data fim da apólice"
                v-model="estagiario.apoliceSeguro.dataFim"
                placeholder="Data fim"
                class="text-grey-darken-1"
                color="grey-darken-4"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">

                <a :href="urlApoliceLink" target="_blank" class="text-grey-darken-1"
                  color="grey-darken-4">
                    Visualizar apólice
                </a>

            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Salvar" @click="handleUpdateEstagiario()"></v-btn>
          <v-btn text="Fechar" @click="isDialogActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>


<script>
import { ref, onMounted } from "vue";
import { buscaCep } from "@/util/buscaCep";
import { atualizarEstagiarioPorId, fetchEstagiarioPorId } from "../../../services/EstagiariosService";
import Swal from "sweetalert2";

export default {
  props: {
    estgId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const isDialogActive = ref(false);
    const estagiario = ref({});
    const errorMessage = ref("");
    const urlApoliceLink = import.meta.env.VITE_BACKEND_URL + "/aluno/" + props.estgId + "/apolice"

    const loadEstagiario = async () => {
      const response = await fetchEstagiarioPorId(props.estgId);
      if (response) {
        estagiario.value = response;
      } else {
        console.error("Erro ao buscar estagiario.");
      }
    };

    const handleUpdateEstagiario = async () => {
      errorMessage.value = "";
      try {
        const response = await atualizarEstagiarioPorId(props.estgId, estagiario.value);
        if (response) {
          isDialogActive.value = false;
          Swal.fire({
            title: "Cadastro atualizado com Sucesso!",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
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
      loadEstagiario();
    });

    return {
      estagiario,
      urlApoliceLink,
      isDialogActive,
      handleUpdateEstagiario,
      errorMessage
    };
  },
  methods: {
    async preencheCep(cep) {
      let address = await buscaCep(cep);
      this.estagiario.cidade = address.localidade;
      this.estagiario.uf = address.uf;
      this.estagiario.bairro = address.bairro;
      this.estagiario.rua = address.logradouro;
    },
  }
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
