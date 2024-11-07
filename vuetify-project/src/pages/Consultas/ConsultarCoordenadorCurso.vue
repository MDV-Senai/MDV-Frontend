<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Coordenador de Instituição de Ensino</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeResponsavel"
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
            <th class="text-left">Nome</th>
            <th class="text-left">Fone</th>
            <th class="text-left">Email</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in coordenadores" :key="item.id">
            <td class="text-left">{{ item.nome }}</td>
            <td class="text-left">{{ item.fone }}</td>
            <td class="text-left">{{ item.email }}</td>
            <td class="text-center">
              <VisualizarResponsavel />
              <EditarResponsavel />
              <DeletarItem :itemKey="'coordenador-instituicao-ensino'" :id="item.id" />
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
import { fetchCoordenadorCurso } from "../../services/CoordenadorCursoService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const coordenadores = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadCoord = async () => {
      const response = await fetchCoordenadorCurso(pagina.value, itensPorPagina);
      coordenadores.value = response.data;
      console.log(coordenadores.value)
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadCoord();
    });

    watch(pagina, () => {
      loadCoord();
    });

    return {
      height,
      coordenadores,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>