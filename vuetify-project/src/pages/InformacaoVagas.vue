<template>
  <v-main id="imagem">
    <Header />
    <div v-for="(setor, key) in setores" :key="key">
      <h2 class="text-center my-10">{{ key.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()) }}</h2>
      <div class="calendario-container d-flex flex-wrap ma-3 ga-5">
        <div v-for="(periodo, periodoKey) in setor" :key="periodoKey" class="calendario-item">
          <Calendar
            :dates="getDates(periodo)"
            :periodo="periodoKey"
          />
        </div>
      </div>
    </div>
  </v-main>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      setores: {},
    };
  },
  created() {
    this.fetchSetores();
  },
  methods: {
    async fetchSetores() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/7e745f34-d6de-438d-88cb-d7f7093edf50');
        this.setores = response.data.setores;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getDates(periodo) {
      return periodo.map(item => ({
        startDate: item.startDate,
        endDate: item.endDate,
        nomeInstituicaoEnsino: item.nomeInstituicaoEnsino
      }));
    },
  },
};
</script>

<style scoped>
.calendario-item {
  flex: 1 1 calc(33.33% - 16px);
  min-width: 250px;
}
</style>
