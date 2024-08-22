<template>
  <div id="imagem" :height="height" >
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
import { fetchContratos } from "../../services/ContratosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const contratos = ref([]);
    const numeroContrato = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const contratosFiltrados = ref([]);

    const loadContratos = async () => {
      const response = await fetchContratos();
      contratos.value = response;
      contratosFiltrados.value = response;
    };

    const pesquisarContrato = () => {
      if (numeroContrato.value) {
        contratosFiltrados.value = contratos.value.filter((contrato) =>
          contrato.numero.toString().includes(numeroContrato.value)
        );
      } else {
        contratosFiltrados.value = contratos.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(contratosFiltrados.value.length / itensPorPagina.value);
    });

    const contratoPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return contratosFiltrados.value.slice(start, end);
    });

    watch(numeroContrato, (newValue) => {
      pesquisarContrato();
    });

    onMounted(() => {
      loadContratos();
    });

    return {
      height,
      numeroContrato,
      pagina,
      itensPorPagina,
      totalPaginas,
      contratoPaginado
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>