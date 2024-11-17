<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Solicitação de Vaga</h3>
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
            <th class="text-left">Data Solicitação</th>
            <th class="text-left">Status</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in solicitacoes" :key="item.id">
            <td class="text-left">{{ item.setor.nomeSetor }}</td>
            <td class="text-left">{{ formatDate(item.dataSolicitacao) }}</td>
            <td class="text-left">{{ item.status }}</td>
            <td class="text-center">
              <VisualizarSolicitacao :solId="item.id" />
              <EditarSetor :setorId="item.id"  />
              <DeletarItem :itemKey="'setor'" :id="item.id" />
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
import { fetchSolicitacaoVaga } from "../../services/SolicitacaoService.js";
import { formatDate } from "@/util/tools";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const solicitacoes = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadSolicitacao = async () => {
      const response = await fetchSolicitacaoVaga(pagina.value, itensPorPagina);
      solicitacoes.value = response;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadSolicitacao();
    });

    watch(pagina, () => {
      loadSolicitacao();
    });

    return {
      height,
      solicitacoes,
      pagina,
      totalPaginas,
      formatDate,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
