<template>
  <div>
    <VCalendar expanded
      :initial-page="{ month: mesAtual, year: anoAtual }"
      :attributes="attributes"
    >
      <template #footer>
        <div class="w-full px-4 pb-2">
          <span class="font-weight-bold text-h6">Turno: {{ periodo }}</span>
          <div class="mt-3">
            <h4>Instituições:</h4>
            <ul>
              <li v-for="(instituicao, index) in instituicoes" :key="index" class="d-flex align-center my-2">
                <span class="border-md rounded-circle	me-2" :style="{ backgroundColor: instituicao.cor, width: '15px', height: '15px' }"></span>
                <span>{{ instituicao.nome }}</span>
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
  setup({ dates }) {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;

    const attributes = ref([]);
    const instituicoes = ref([]);

    const parseDate = (dateString) => {
      const [ano, mes, dia] = dateString.split('-').map(Number);
      return new Date(ano, mes - 1, dia);
    };

    const cores = [
      'red', 'green', 'blue', 'orange', 'purple',
      'pink', 'indigo', 'yellow', 'teal', 'gray'
    ];

    const escolherCorUnica = (coresUsadas) => {
      const coresDisponiveis = cores.filter(cor => !coresUsadas.includes(cor));

      if (coresDisponiveis.length > 0) {
        const index = Math.floor(Math.random() * coresDisponiveis.length);
        return coresDisponiveis[index];
      }

      return null;
    };

    const atualizarAttributes = () => {
      instituicoes.value = [];
      const coresUsadas = [];

      attributes.value = dates.map(({ startDate, endDate, nomeInstituicaoEnsino }) => {
        const cor = escolherCorUnica(coresUsadas);

        if (cor) {
          coresUsadas.push(cor);
          instituicoes.value.push({ nome: nomeInstituicaoEnsino, cor });

          return {
            highlight: {
              start: { fillMode: 'outline' },
              base: { color: cor },
              end: { fillMode: 'outline' },
            },
            dates: {
              start: parseDate(startDate),
              end: parseDate(endDate),
            },
          };
        }

        return null;
      }).filter(Boolean);
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
