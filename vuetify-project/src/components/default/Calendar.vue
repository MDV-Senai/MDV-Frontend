<template>
  <v-row class="fill-height">
    <v-col v-for="(eventList, setor) in eventosPorSetor" :key="setor" cols="12" md="12">
      <h2>{{ setor }}</h2>
      <v-calendar
        :events="eventList"
        type="month"
        
      ></v-calendar>
    </v-col>
  </v-row>
</template>

<script>
import { useDate } from 'vuetify'
import axios from 'axios'

export default {
  data: () => ({
    eventosPorSetor: {},
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
  }),
  mounted() {
    const adapter = useDate()
    this.fetchEvents({
      start: adapter.startOfDay(adapter.startOfMonth(new Date())),
      end: adapter.endOfDay(adapter.endOfMonth(new Date())),
    })
  },
  methods: {
    async fetchEvents({ start, end }) {
      try {
        const response = await axios.get('https://run.mocky.io/v3/0d64b2fe-dede-4a74-89b3-52c0d83108a0', {
          params: {
            start: start.toISOString(),
            end: end.toISOString(),
          },
        })

        // Cria um objeto para armazenar os eventos por setor
        this.eventosPorSetor = {}

        // Itera sobre cada setor e seus eventos
        for (const setor in response.data.setores) {
          const eventosSetor = response.data.setores[setor]
          const eventosDiarios = []

          eventosSetor.forEach(event => {
            const startDate = new Date(event.start)
            const endDate = new Date(event.end)

            // Gera um evento para cada dia no intervalo
            for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
              eventosDiarios.push({
                title: event.title,
                start: new Date(d),
                end: new Date(d), // Final do dia
                color: event.color || this.colors[this.rnd(0, this.colors.length - 1)],
                allDay: true,
              })
            }
          })

          // Adiciona os eventos do setor ao objeto
          this.eventosPorSetor[setor] = eventosDiarios
        }

        console.log('Eventos por Setor:', this.eventosPorSetor); // Verificação de dados
      } catch (error) {
        console.error('Erro ao buscar eventos:', error)
      }
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>
