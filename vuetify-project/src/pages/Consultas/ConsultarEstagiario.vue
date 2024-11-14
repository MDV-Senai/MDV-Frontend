<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Estagiário</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nomeEstagiario"
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
            <th class="text-left">Matricula</th>
            <th class="text-left">Celular</th>
            <th class="text-left">Email</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in estagiarios" :key="item.id">
            <td class="text-left">{{ item.nome }}</td>
            <td class="text-left">{{ item.matricula }}</td>
            <td class="text-left">{{ item.celular }}</td>
            <td class="text-left">{{ item.email }}</td>
            <td class="text-center">
              <VisualizarEstagiario :estgId="item.id"/>
              <EditarEstagiario :estgId="item.id"/>
              <DeletarItem :itemKey="'aluno'" :id="item.id" />
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
import { fetchEstagiarios } from "../../services/EstagiariosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const estagiarios = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadEstg = async () => {
      const response = await fetchEstagiarios(pagina.value, itensPorPagina);
      estagiarios.value = response;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadEstg();
    });

    watch(pagina, () => {
      loadEstg();
    });

    return {
      height,
      estagiarios,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
