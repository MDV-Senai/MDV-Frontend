<template>
  <div>
    <VCalendar expanded
      :initial-page="{ month: mesAtual, year: anoAtual }"
      :attributes="attributes"
    >
      <template #footer>
        <div class="w-full px-4 pb-3">
          <span>Turno: {{ periodo }}</span>
          <div class="instituicao-cor">
            <h4>Instituições:</h4>
            <ul>
              <li v-for="(instituicao, index) in instituicoes" :key="index" :style="{ color: instituicao.cor }">
                {{ instituicao.nome }}
              </li>
            </ul>
          </div>
        </div>
      </template>
    </VCalendar>

  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    dates: {
      type: Array,
      required: true,
    },
    periodo: {
      type: String,
    },
  },
  setup({ dates, periodo }) {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;

    const attributes = ref([]);
    const instituicoes = ref([]);

    const parseDate = (dateString) => {
      const [ano, mes, dia] = dateString.split('-').map(Number);
      return new Date(ano, mes - 1, dia);
    };

    // Lista de cores disponíveis
    const cores = [
      'red', 'green', 'blue', 'orange', 'purple',
      'pink', 'cyan', 'yellow', 'brown', 'gray'
    ];

    // Função para escolher uma cor aleatória da lista
    const escolherCorAleatoria = () => {
      const index = Math.floor(Math.random() * cores.length);
      return cores[index];
    };

    const atualizarAttributes = () => {
      // Limpar a lista de instituições antes de atualizar
      instituicoes.value = [];

      attributes.value = dates.map(({ startDate, endDate, nomeInstituicaoEnsino }) => {
        const cor = escolherCorAleatoria(); // Escolhe uma cor aleatória da lista
        instituicoes.value.push({ nome: nomeInstituicaoEnsino, cor }); // Adiciona a instituição com a cor
        return {
          highlight: {
            start: { fillMode: 'outline' },
            base: { color: cor }, // Usa a cor escolhida
            end: { fillMode: 'outline' },
          },
          dates: {
            start: parseDate(startDate),
            end: parseDate(endDate),
          },
        };
      });
    };

    watch(
      () => dates,
      atualizarAttributes,
      { immediate: true }
    );

    return { attributes, anoAtual, mesAtual, instituicoes };
  },
};
</script>

<style scoped>
.instituicao-cor {
  margin-top: 20px;
}
</style>
