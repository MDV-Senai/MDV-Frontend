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
          <tr v-for="item in organizacoes" :key="item.id">
            <td class="text-left">{{ item.nomeFantasia }}</td>
            <td class="text-left">{{ item.responsavelLegal }}</td>
            <td class="text-left">{{ item.email }}</td>
            <td class="text-center">
              <VisualizarInstituicao />
              <EditarInstituicao />
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
import { ref, onMounted } from "vue";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchOrganizacaoConcedente } from "../../services/OrganizacaoService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const organizacoes = ref([]);

    const loadOrg = async () => {
      const response = await fetchOrganizacaoConcedente();
      organizacoes.value = response;
    };

    onMounted(() => {
      loadOrg();
    });

    return {
      height,
      organizacoes
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>