<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Estagiário</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeEstagiario"
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
          <tr v-for="item in estagiarioPaginado" :key="item.id">
            <td class="text-left">{{ item.nome }}</td>
            <td class="text-left">{{ item.turma }}</td>
            <td class="text-left">{{ item.curso }}</td>
            <td class="text-left">{{ item.instituicao }}</td>
            <td class="text-center">
              <VisualizarEstagiario />
              <EditarEstagiario />
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
    
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchEstagiarios } from "../../services/EstagiariosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const estagiarios = ref([]);
    const nomeEstagiario = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const estagiariosFiltrados = ref([]);

    const loadEstagiarios = async () => {
      const response = await fetchEstagiarios();
      estagiarios.value = response;
      estagiariosFiltrados.value = response;
    };

    const pesquisarEstagiarios = () => {
      if (nomeEstagiario.value) {
        estagiariosFiltrados.value = estagiarios.value.filter((item) =>
          item.nome.toLowerCase().includes(nomeEstagiario.value.toLowerCase())
        );
      } else {
        estagiariosFiltrados.value = estagiarios.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(estagiariosFiltrados.value.length / itensPorPagina.value);
    });

    const estagiarioPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return estagiariosFiltrados.value.slice(start, end);
    });

    watch(nomeEstagiario, (newValue) => {
      pesquisarEstagiarios();
    });

    onMounted(() => {
      loadEstagiarios();
    });

    return {
      height,
      nomeEstagiario,
      pagina,
      itensPorPagina,
      totalPaginas,
      estagiarioPaginado,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>