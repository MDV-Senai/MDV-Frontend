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
            <v-table>
              <thead>
                <tr>
                  <th class="text-left">Nome do Curso</th>
                  <th class="text-left">Coordenador</th>
                  <th class="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="curso in instituicao.cursos" :key="curso.id">
                  <td class="text-left">
                    {{ curso.cursoHomologado.nomeCurso }}
                  </td>
                  <td class="text-left">
                    <select @change="updateCoordenador(curso, $event.target.value)">
                      <option
                        v-if="curso.coordenador && curso.coordenador.nome"
                        :value="curso.coordenador.id"
                      >
                        {{ curso.coordenador.nome }}
                      </option>
                      <option v-else value="">Coordenador não definido</option>
                      <option
                        v-if="!curso.coordenador"
                        v-for="c in instituicao.coordenadores"
                        :key="c.id"
                        :value="c.id"
                      >
                        {{ c.nome }}
                      </option>
                    </select>
                  </td>
                  <td class="text-center">
                    <v-icon
                      v-bind="activatorProps"
                      density="compact"
                      icon="mdi-delete"
                      class="my-icon-spacing light-red-darken-3-var"
                      @click="desfazerHomologacao(instituicao.id, curso.id)"
                    ></v-icon>
                  </td>
                </tr>
              </tbody>
            </v-table>
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
  desfazerHomologacaoCurso,
} from "../../../services/InstituicoesService";
import Swal from "sweetalert2";
import { fetchCursos } from "@/services/CursosService";

export default {
  data() {
    return {
      idCurso: null,
      rules: {
        required: (value) => !!value || "Este campo é obrigatório.",
      },
    };
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

    const homologarCurso = async (instituicaoId, cursoId) => {
      try {
        const response = await homologarCursoNaInstituicaoEnsino(
          instituicaoId,
          cursoId
        );
        if (response) {
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
          throw new Error("Erro ao homologar curso na instituição.");
        }
      } catch (error) {
        console.error(error.message);
      }
    };

    const desfazerHomologacao = async (instituicaoId, cursoId) => {
      try {
        const response = await desfazerHomologacaoCurso(instituicaoId, cursoId);
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

    const updateCoordenador = (curso, coordenadorId) => {
      console.log(curso)
      console.log(coordenadorId)
      console.log(instituicao.value)

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
      cursos,
      updateCoordenador,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
