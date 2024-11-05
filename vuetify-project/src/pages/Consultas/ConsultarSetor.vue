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
          <tr v-for="item in setores" :key="item.id">
            <td class="text-left">{{ item.nomeSetor }}</td>
            <td class="text-left">{{ item.nomeCoordenador }}</td>
            <td class="text-left">{{ item.nomeSocialCoordenador }}</td>
            <td class="text-center">
              <VisualizarSetor :setorId="item.id" />
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
import { fetchSetores } from "../../services/SetoresService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const setores = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadSetor = async () => {
      const response = await fetchSetores(pagina.value, itensPorPagina);
      setores.value = response.data;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadSetor();
    });

    watch(pagina, () => {
      loadSetor();
    });

    return {
      height,
      setores,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
