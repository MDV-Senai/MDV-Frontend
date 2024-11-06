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
          <tr v-for="item in instituicoes" :key="item.id">
            <td class="text-left">{{ item.nomeFantasia }}</td>
            <td class="text-left">{{ item.responsavelLegal }}</td>
            <td class="text-left">{{ item.email }}</td>
            <td class="text-center">
              <VisualizarInstituicao :instId="item.id"/>
              <EditarInstituicao :instId="item.id" />
              <DeletarItem :itemKey="'instituicao-ensino'" :id="item.id" />
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
import { fetchInstituicoes } from "../../services/InstituicoesService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const instituicoes = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadInst = async () => {
      const response = await fetchInstituicoes(pagina.value, itensPorPagina);
      instituicoes.value = response.data;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadInst();
    });

    watch(pagina, () => {
      loadInst();
    });

    return {
      height,
      instituicoes,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>