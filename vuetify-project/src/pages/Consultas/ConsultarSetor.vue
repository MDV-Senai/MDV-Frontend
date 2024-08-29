<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Setor</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeSetor"
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
            <th class="text-left">Setor</th>
            <th class="text-left">Responsável</th>
            <th class="text-left">Contato</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in setorPaginado" :key="item.id">
            <td class="text-left">{{ item.setor }}</td>
            <td class="text-left">{{ item.responsavel }}</td>
            <td class="text-left">{{ item.contato }}</td>
            <td class="text-center">
              <VisualizarSetor />
              <EditarSetor />
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
import { fetchSetores } from "../../services/SetoresService";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const setores = ref([]);
    const nomeSetor = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const setoresFiltrados = ref([]);

    const loadSetores = async () => {
      const response = await fetchSetores();
      setores.value = response;
      setoresFiltrados.value = response;
    };

    const pesquisarSetores = () => {
      if (nomeSetor.value) {
        setoresFiltrados.value = setores.value.filter((item) =>
          item.setor.toLowerCase().includes(nomeSetor.value.toLowerCase())
        );
      } else {
        setoresFiltrados.value = setores.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(setoresFiltrados.value.length / itensPorPagina.value);
    });

    const setorPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return setoresFiltrados.value.slice(start, end);
    });

    watch(nomeSetor, (newValue) => {
      pesquisarSetores();
    });

    onMounted(() => {
      loadSetores();
    });

    return {
      height,
      nomeSetor,
      pagina,
      itensPorPagina,
      totalPaginas,
      setorPaginado,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>