<template>
  <v-main id="imagem">
    <div v-for="(setor, key) in setores" :key="key">
      <h2>{{ key }}</h2>
      <div v-for="(periodo, periodoKey) in setor" :key="periodoKey">
        <Calendar
          :startDate="periodo.startDate"
          :endDate="periodo.endDate"
          :setColor="getColor(periodoKey)"
          :periodo="periodoKey"
        />
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
        const response = await axios.get('https://run.mocky.io/v3/9b0dac00-01af-45c6-b1a8-acb7e6c6d184');
        this.setores = response.data.setor;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    getColor(periodoKey) {
      const colors = {
        matutino: 'red',
        vespertino: 'green',
        noturno: 'purple',
      };
      return colors[periodoKey] || 'black';
    },
  },
};
</script>
