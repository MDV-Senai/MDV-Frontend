<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Vagas</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="setor"
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
            <th class="text-left">Vagas disponíveis</th>
            <th class="text-left">Situação</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in vagas" :key="item.id">
            <td class="text-left">{{ item.setor.nomeSetor }}</td>
            <td class="text-left">{{ item.vagasDisponiveis }}</td>
            <td class="text-left">{{ item.statusVaga }}</td>
            <td class="text-center">
              <VisualizarVaga :vagaId="item.id"/>
              <EditarVaga />
              <DeletarItem :itemKey="'vaga'" :id="item.id" />
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
import { fetchVagas } from "../../services/VagasService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const vagas = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadVagas = async () => {
      const response = await fetchVagas(pagina.value, itensPorPagina);
      vagas.value = response.data;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadVagas();
    });

    watch(pagina, () => {
      loadVagas();
    });

    return {
      height,
      vagas,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>