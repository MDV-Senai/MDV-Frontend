<template>
  <v-main id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Consultar Contrato</h3></v-card
      >
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
          <tr v-for="item in contratos" :key="item.numero">
            <td class="text-left">{{ item.numero }}</td>
            <td class="text-left">{{ item.aluno }}</td>
            <td class="text-left">{{ item.data }}</td>
            <td class="text-center">
              <VisualizarContrato />
              <v-icon
                density="compact"
                icon="mdi-pencil"
                class="my-icon-spacing light-green-darken-3-var"
              ></v-icon>
              <v-icon
                density="compact"
                icon="mdi-delete"
                class="my-icon-spacing light-green-darken-3-var"
              ></v-icon>
            </td>
          </tr>
        </tbody>
      </v-table>
    </div>
    <Footer />
  </v-main>
</template>

<script>
import { ref, onMounted } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchContratos } from "../../services/ContratosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const contratos = ref([]);

    const loadContratos = async () => {
      const response = await fetchContratos();
      contratos.value = response;
    };

    onMounted(() => {
      loadContratos();
    });

    return {
      height,
      contratos
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>