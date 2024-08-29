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
            <th class="text-left">Turno</th>
            <th class="text-left">Situação</th>
            <th class="text-left">Quantidade</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in vagaPaginada" :key="item.id">
            <td class="text-left">{{ item.setor }}</td>
            <td class="text-left">{{ item.turno }}</td>
            <td class="text-left">{{ item.situacao }}</td>
            <td class="text-left">{{ item.quantidade }}</td>
            <td class="text-center">
              <VisualizarVaga />
              <EditarVaga />
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
import { fetchVagas } from "../../services/VagasService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const vagas = ref([]);
    const setor = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const vagasFiltradas = ref([]);

    const loadVagas = async () => {
      const response = await fetchVagas();
      vagas.value = response;
      vagasFiltradas.value = response;
    };

    const pesquisarVagas = () => {
      if (setor.value) {
        vagasFiltradas.value = vagas.value.filter((vaga) =>
          vaga.setor.toLowerCase().includes(setor.value.toLowerCase())
        );
      } else {
        vagasFiltradas.value = vagas.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(vagasFiltradas.value.length / itensPorPagina.value);
    });

    const vagaPaginada = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return vagasFiltradas.value.slice(start, end);
    });

    watch(setor, (newValue) => {
      pesquisarVagas();
    });

    onMounted(() => {
      loadVagas();
    });

    return {
      height,
      setor,
      pagina,
      itensPorPagina,
      totalPaginas,
      vagaPaginada,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>