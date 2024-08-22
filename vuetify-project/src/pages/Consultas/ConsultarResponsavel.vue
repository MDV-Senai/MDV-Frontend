<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Responsável Pelo Estagiário</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeResponsavel"
          label="Pesquise"
          variant="outlined"
          prepend-inner-icon="mdi-magnify"
          class="text-grey-darken-4"
          single-line
          clearable
        ></v-text-field>
      </div>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Turma</th>
            <th class="text-left">Curso</th>
            <th class="text-left">Instituição</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in responsavelPaginado" :key="item.id">
            <td class="text-left">{{ item.nome }}</td>
            <td class="text-left">{{ item.turma }}</td>
            <td class="text-left">{{ item.curso }}</td>
            <td class="text-left">{{ item.instituicao }}</td>
            <td class="text-center">
              <VisualizarResponsavel />
              <EditarResponsavel />
              <DeletarItem />
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="d-flex justify-center mt-4">
        <v-pagination
          v-model="pagina"
          :length="totalPaginas"
          total-visible="7"
        ></v-pagination>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchResponsaveis } from "../../services/ResponsaveisService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const responsaveis = ref([]);
    const nomeResponsavel = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const responsaveisFiltrados = ref([]);

    const loadResponsaveis = async () => {
      const response = await fetchResponsaveis();
      responsaveis.value = response;
      responsaveisFiltrados.value = response;
    };

    const pesquisarResponsaveis = () => {
      if (nomeResponsavel.value) {
        responsaveisFiltrados.value = responsaveis.value.filter((item) =>
          item.nome.toLowerCase().includes(nomeResponsavel.value.toLowerCase())
        );
      } else {
        responsaveisFiltrados.value = responsaveis.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(responsaveisFiltrados.value.length / itensPorPagina.value);
    });

    const responsavelPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return responsaveisFiltrados.value.slice(start, end);
    });

    watch(nomeResponsavel, (newValue) => {
      pesquisarResponsaveis();
    });

    onMounted(() => {
      loadResponsaveis();
    });

    return {
      height,
      nomeResponsavel,
      pagina,
      itensPorPagina,
      totalPaginas,
      responsavelPaginado,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>