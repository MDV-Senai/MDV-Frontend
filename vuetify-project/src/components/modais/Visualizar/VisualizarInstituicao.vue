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
                v-model="instituicao.nomeFantasia"
                label="Nome Fantasia"
                placeholder="Nome da instituição"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12">
              <v-text-field
                v-model="instituicao.razaoSocial"
                label="Razão Social"
                placeholder="Razão social"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.cnpj"
                label="CNPJ"
                placeholder="cnpj"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.inscricaoEstadual"
                label="Inscrição Estadual"
                placeholder="inscirção estadual"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mx-5 my-5">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.telefone"
                label="Telefone"
                placeholder="Telefone"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.email"
                label="E-mail"
                placeholder="Email"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.cidade"
                label="Cidade"
                placeholder="cidade"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.bairro"
                label="Bairro"
                placeholder="bairro"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="instituicao.numero"
                label="Número"
                placeholder="numero"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="instituicao.responsavelLegal"
                label="Responsável Legal"
                placeholder="responsavelLegal"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
              <v-text-field
                v-model="instituicao.responsavelLegalContato"
                label="Contato Responsável Legal"
                placeholder="responsavelLegalContato"
                class="text-grey-darken-1"
                color="grey-darken-4"
                readonly
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
                      <v-col class="d-flex" cols="left">
                        <v-list-item-title>
                          {{ curso.cursoHomologado.nomeCurso }}
                        </v-list-item-title>
                      </v-col>
                    </v-row>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
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
import { fetchInstituicoesPorId } from "../../../services/InstituicoesService";

export default {
  props: {
    instId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const instituicao = ref({});

    const loadInstituicao = async () => {
      const response = await fetchInstituicoesPorId(props.instId);
      if (response) {
        instituicao.value = response;
      } else {
        console.error("Erro ao buscar instituicao.");
      }
    };

    onMounted(() => {
      loadInstituicao();
    });

    return {
      instituicao,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
