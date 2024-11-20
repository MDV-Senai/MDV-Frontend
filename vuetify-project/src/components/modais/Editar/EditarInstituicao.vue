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
              label="Nome Fantasia"
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
              label="Razão Social"
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
              label="CNPJ"
              placeholder="CNPJ"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.inscricaoEstadual"
              label="Inscrição Estadual"
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
              label="Telefone"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.email"
              label="E-mail"
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
              label="CEP"
              placeholder="cep"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.cidade"
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
              v-model="instituicao.estado"
              label="Estado"
              placeholder="estado"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.bairro"
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
              v-model="instituicao.rua"
              label="Rua"
              placeholder="rua"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="instituicao.numero"
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
              v-model="instituicao.complemento"
              label="Complemento"
              placeholder="complemento"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="instituicao.responsavelLegal"
              label="Responsavel Legal"
              placeholder="responsavelLegal"
              class="text-grey-darken-1"
              color="grey-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="instituicao.responsavelLegalContato"
              label="Contato Responsavel Legal"
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
                v-for="(curso, index) in instituicao.cursos"
                :key="curso.id"
              >
                <v-list-item-content>
                  <v-row class="d-flex align-center">
                    <v-col class="d-flex" cols="auto">
                      <v-list-item-title>
                        {{ curso.cursoHomologado.nomeCurso }}
                      </v-list-item-title>
                    </v-col>
                    <v-col class="ml-auto" cols="auto">
                      <v-icon
                        v-bind="activatorProps"
                        density="compact"
                        icon="mdi-delete"
                        class="my-icon-spacing light-red-darken-3-var"
                        @click="desfazerHomologacao(instituicao.id, curso.id)"
                      ></v-icon>
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row class="mx-5 my-5">
          <v-col cols="6" md="9">
            <h3 class="text-grey-darken-4 mb-1">Homologar cursos</h3>
            <v-autocomplete
              v-model="idCurso"
              label="Curso"
              :rules="[rules.required]"
              class="text-grey-darken-4"
              variant="outlined"
              :items="cursos"
              :item-title="'nomeCurso'"
              :item-value="'id'"
            ></v-autocomplete>
          </v-col>
          <v-col cols="6" md="3" class="d-flex align-center">
            <v-btn
              color="primary"
              @click="homologarCurso(instituicao.id, idCurso)"
              :disabled="!idCurso"
            >
              Homologar
            </v-btn>
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
  homologarCursoNaInstituicaoEnsino,
  desfazerHomologacaoCurso
} from "../../../services/InstituicoesService";
import Swal from "sweetalert2";
import { fetchCursos } from "@/services/CursosService";

export default {
  data() {
    return {
      idCurso: null,
      rules: {
        required: (value) =>!!value || "Este campo é obrigatório.",
      },
    };
  },

  methods: {
    removeMascara(valor) {
      return valor ? valor.replace(/\D/g, "") : "";
    },

    exibirMensagemSucesso() {
      Swal.fire({
        title: "Cadastro Realizado com Sucesso!",
        icon: "success",
      });
    },

    exibirErroGenerico() {
      Swal.fire({
        title: "Ocorreu um erro ao realizar o cadastro.",
        icon: "error",
      });
    },

    exibirErros(response) {
      let errors = "";
      if (Array.isArray(response.message)) {
        response.message.forEach((item, index) => {
          errors += `<li class="text-left">${index + 1}. ${item}</li>`;
        });
      } else {
        errors = `<li class="text-left">${response.message}</li>`;
      }

      Swal.fire({
        title: "Ocorreu os seguintes erros ao realizar o cadastro:",
        html: `<ul>${errors}</ul>`,
        icon: "error",
      });
    },
  },

  props: {
    instId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const instituicao = ref({});
    const isDialogActive = ref(false);
    const cursos = ref([]);

    const listarCursos = async () => {
      try {
        const response = await fetchCursos(1, 600);
        cursos.value = response.data;
      } catch (error) {
        console.error("Erro ao listar cursos:", error);
      }
    };

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
        const response = await updateInstituicaoEnsino(props.instId, instituicao.value);
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

    const homologarCurso = async (instituicaoId, cursoId) => {
      try {
        const response = await homologarCursoNaInstituicaoEnsino(instituicaoId, cursoId);
        console.log(response);

        if (!response.statusCode >= 400) {
          isDialogActive.value = false;
          Swal.fire({
            title: "Atualização bem-sucedida!",
            text: "O curso foi homologado com sucesso.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error(response.message);
        }
      } catch (error) {
        console.log(error);
        isDialogActive.value = false;

        // Tratamento de erro
        const errorMessage = error?.response?.data?.message || error.message || "Erro desconhecido.";

        console.log(errorMessage);

        Swal.fire({
          title: "Ocorreu um erro ao homologar o curso na instituição",
          text: errorMessage,
          icon: "error",
          confirmButtonText: "Ok",
        }).then(() => {
          window.location.reload();
        });
      }
    };

    const desfazerHomologacao = async (instituicaoId, cursoId) => {
      try {
        const response = await desfazerHomologacaoCurso(instituicaoId, cursoId);
        console.log(response);
        if (response) {
          isDialogActive.value = false;
          Swal.fire({
            title: "Atualização bem-sucedida!",
            text: "A homologação do curso foi desfeita com sucesso.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
          });
        } else {
          throw new Error("Erro ao homologar curso na instituição.");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    onMounted(() => {
      loadInstituicao();
      listarCursos();
    });

    return {
      instituicao,
      isDialogActive,
      editInstituicao,
      homologarCurso,
      desfazerHomologacao,
      cursos
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
