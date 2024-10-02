<template>
  <VCalendar
    :initial-page="{ month: mesAtual, year: anoAtual }"
    :attributes="attributes"
  />
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;

    const criarDataLocal = (ano, mes, dia) => new Date(ano, mes - 1, dia, 0, 0, 0);

    const formatarData = (dataStr) => {
      const [ano, mes, dia] = dataStr.split('-').map(Number);
      return criarDataLocal(ano, mes, dia);
    };

    const attributes = ref([]);

    const atualizarAttributes = () => {
      attributes.value = [
        {
          highlight: {
            start: { fillMode: 'outline' },
            base: { fillMode: 'light' },
            end: { fillMode: 'outline' },
          },
          dates: {
            start: formatarData(props.startDate),
            end: formatarData(props.endDate),
          },
        },
      ];
    };

    watch(
      () => [props.startDate, props.endDate],
      atualizarAttributes,
      { immediate: true }
    );

    return { attributes, anoAtual, mesAtual };
  },
};
</script>
