<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Instituição</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeInstituicao"
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
            <th class="text-left">Instituição</th>
            <th class="text-left">Responsável</th>
            <th class="text-left">Contato</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in instituicaoPaginada" :key="item.id">
            <td class="text-left">{{ item.nomeFantasia }}</td>
            <td class="text-left">{{ item.responsavelLegal }}</td>
            <td class="text-left">{{ item.responsavelContato }}</td>
            <td class="text-center">
              <VisualizarInstituicao />
              <EditarInstituicao />
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
import { fetchInstituicoes } from "../../services/InstituicoesService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const instituicoes = ref([]);
    const nomeInstituicao = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const instituicoesFiltradas = ref([]);

    const loadInstituicoes = async () => {
      const response = await fetchInstituicoes();
      instituicoes.value = response;
      instituicoesFiltradas.value = response;
    };

    const pesquisarInstituicoes = () => {
      if (nomeInstituicao.value) {
        instituicoesFiltradas.value = instituicoes.value.filter((item) =>
          item.instituicao.toLowerCase().includes(nomeInstituicao.value.toLowerCase())
        );
      } else {
        instituicoesFiltradas.value = instituicoes.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(instituicoesFiltradas.value.length / itensPorPagina.value);
    });

    const instituicaoPaginada = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return instituicoesFiltradas.value.slice(start, end);
    });

    watch(nomeInstituicao, (newValue) => {
      pesquisarInstituicoes();
    });

    onMounted(() => {
      loadInstituicoes();
    });

    return {
      height,
      nomeInstituicao,
      pagina,
      itensPorPagina,
      totalPaginas,
      instituicaoPaginada,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>