<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Consultar Cursos</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <div class="d-flex">
        <v-text-field
          v-model="nome"
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
            <th class="text-left">Curso</th>
            <th class="text-left">Situação</th>
            <th class="text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cursoPaginado" :key="item.id">
            <td class="text-left">{{ item.instituicao }}</td>
            <td class="text-left">{{ item.nome }}</td>
            <td class="text-left">{{ item.situacao }}</td>
            <td class="text-center">
              <VisualizarCurso />
              <EditarCurso />
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
import { fetchCursos } from "../../services/CursosService.js";

export default {
  setup() {
    const { height } = useResponsiveHeight();
    const cursos = ref([]);
    const nome = ref("");
    const pagina = ref(1);
    const itensPorPagina = ref(10);
    const cursosFiltrados = ref([]);

    const loadCursos = async () => {
      const response = await fetchCursos();
      cursos.value = response;
      cursosFiltrados.value = response;
    };

    const pesquisarCurso = () => {
      if (nome.value) {
        cursosFiltrados.value = cursos.value.filter((curso) =>
          curso.nome.toLowerCase().includes(nome.value.toLowerCase())
        );
      } else {
        cursosFiltrados.value = cursos.value;
      }
      pagina.value = 1;
    };

    const totalPaginas = computed(() => {
      return Math.ceil(cursosFiltrados.value.length / itensPorPagina.value);
    });

    const cursoPaginado = computed(() => {
      const start = (pagina.value - 1) * itensPorPagina.value;
      const end = start + itensPorPagina.value;
      return cursosFiltrados.value.slice(start, end);
    });

    watch(nome, (newValue) => {
      pesquisarCurso();
    });

    onMounted(() => {
      loadCursos();
    });

    return {
      height,
      nome,
      pagina,
      itensPorPagina,
      totalPaginas,
      cursoPaginado,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>