<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Usuários</h3>
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
            <th class="text-left">Tipo de Usuário</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in usuarios" :key="item.id">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-left">{{ item.role }}</td>
            <td class="text-center">
              <VisualizarUsuario :usuarioId="item.id" />
              <EditarUsuario :usuarioId="item.id" />
              <DeletarItem :itemKey="'user'" :id="item.id" />
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
import { fetchUsuarios } from "../../services/AdminService";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const usuarios = ref([]);
    const pagina = ref(1);
    const itensPorPagina = 10;
    const totalPaginas = ref(1);

    const loadUsuarios = async () => {
      const response = await fetchUsuarios(pagina.value, itensPorPagina);
      usuarios.value = response;
      totalPaginas.value = Math.ceil(response.total / itensPorPagina);
    };

    onMounted(() => {
      loadUsuarios();
    });

    watch(pagina, () => {
      loadUsuarios();
    });

    return {
      height,
      usuarios,
      pagina,
      totalPaginas
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>