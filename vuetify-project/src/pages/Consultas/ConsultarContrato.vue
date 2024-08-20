<template>
  <v-main id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Contrato</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <v-text-field
        label="Pesquise"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        class="text-grey-darken-4"
        hide-details
        single-line
      ></v-text-field>

      <v-table>
        <thead>
          <tr>
            <th class="text-left">Nº contrato</th>
            <th class="text-left">Aluno</th>
            <th class="text-left">Data</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in contratoPaginado" :key="item.numero">
            <td class="text-left">{{ item.numero }}</td>
            <td class="text-left">{{ item.aluno }}</td>
            <td class="text-left">{{ item.data }}</td>
            <td class="text-center">
              <VisualizarContrato />
              <EditarContrato />
              <DeletarItem />
            </td>
          </tr>
        </tbody>
      </v-table>

      <!-- Paginação -->
      <div class="d-flex justify-center mt-4">
        <v-pagination
          v-model="pagina"
          :length="totalPaginas"
          total-visible="7"
        ></v-pagination>
      </div>
    </div>
    <Footer />
  </v-main>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchContratos } from "../../services/ContratosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const contratos = ref([]);
    const pagina = ref(1);
    const itensPorPagina = ref(10);

    const loadContratos = async () => {
      const response = await fetchContratos();
      contratos.value = response;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(contratos.value.length / itensPorPagina.value);
    });

    const contratoPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return contratos.value.slice(start, end);
    });

    onMounted(() => {
      loadContratos();
    });

    return {
      height,
      contratos,
      pagina,
      itensPorPagina,
      totalPaginas,
      contratoPaginado,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>