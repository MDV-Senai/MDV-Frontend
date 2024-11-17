<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Contrato</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="numeroContrato"
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
            <th class="text-left">Nome Estagiário</th>
            <th class="text-left">Setor</th>
            <th class="text-left">Data Inicio Contrato</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in contratos" :key="item.id">
            <td class="text-left">{{ item.nomeEstagiario }}</td>
            <td class="text-left">{{ item.nomeSetor }}</td>
            <td class="text-left">
              {{ formatDate(item.dataGeracaoContrato) }}
            </td>
            <td class="text-center">
              <VisualizarContrato :contratoId="item.id" />
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
import { ref, onMounted, watch } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchContratos } from "../../services/ContratosService";
import { formatDate } from "@/util/tools";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const contratos = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadContratos = async () => {
      const response = await fetchContratos(pagina.value, itensPorPagina);
      contratos.value = response;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadContratos();
    });

    watch(pagina, () => {
      loadContratos();
    });

    return {
      height,
      contratos,
      pagina,
      totalPaginas,
      formatDate
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>