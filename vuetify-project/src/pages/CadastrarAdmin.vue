<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Cadastro administrador</v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome social"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="CPF"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Nº de Matrícula de Trabalho"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Telefone"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Celular"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="E-mail"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="Senha"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Confirme sua senha"
              variant="outlined"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row>
            <v-col cols="6" md="6">
              <v-btn
                @click="reset"
                class="my-10"
                color="pink-darken-4"
                append-icon="mdi-chevron-right"
                variant="outlined"
                width="183"
                height="62"
              >
                Limpar
              </v-btn>
            </v-col>

            <v-col cols="6" md="6">
              <v-btn
                append-icon="mdi-chevron-right"
                variant="outlined"
                color="pink-darken-4"
                class="my-10"
                 width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon color="pink-darken-4"></v-icon>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>



    <v-container>
      <v-data-table
        :headers="headers"
        :items="virtualBoats"
        height="400"
        item-value="name"
      ></v-data-table>
    </v-container>

  </v-main>

  <Footer />
</template>

<style scoped>

#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

#card_titulo {
  font-size: 30px;
  width: 90%;
  height: 100px;
  color: gray;
}

#form {
  width: 90%;
}

@media (max-width: 768px) {
  #inputResponsivo {
    /* flex-direction: column; */
  }
}

#fundoCards {
  background-color: white;
  border-radius:8px;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}
</style>

<script>

export default {
  data () {
      return {
        headers: [
          { title: 'Boat Type', align: 'start', key: 'name' },
          { title: 'Speed (knots)', align: 'end', key: 'speed' },
          { title: 'Length (m)', align: 'end', key: 'length' },
          { title: 'Price ($)', align: 'end', key: 'price' },
          { title: 'Year', align: 'end', key: 'year' },
        ],
        boats: [
          {
            name: 'Speedster',
            speed: 35,
            length: 22,
            price: 300000,
            year: 2021,
          },
          {
            name: 'OceanMaster',
            speed: 25,
            length: 35,
            price: 500000,
            year: 2020,
          },
          {
            name: 'Voyager',
            speed: 20,
            length: 45,
            price: 700000,
            year: 2019,
          },
          {
            name: 'WaveRunner',
            speed: 40,
            length: 19,
            price: 250000,
            year: 2022,
          },
          {
            name: 'SeaBreeze',
            speed: 28,
            length: 31,
            price: 450000,
            year: 2018,
          },
          {
            name: 'HarborGuard',
            speed: 18,
            length: 50,
            price: 800000,
            year: 2017,
          },
          {
            name: 'SlickFin',
            speed: 33,
            length: 24,
            price: 350000,
            year: 2021,
          },
          {
            name: 'StormBreaker',
            speed: 22,
            length: 38,
            price: 600000,
            year: 2020,
          },
          {
            name: 'WindSail',
            speed: 15,
            length: 55,
            price: 900000,
            year: 2019,
          },
          {
            name: 'FastTide',
            speed: 37,
            length: 20,
            price: 280000,
            year: 2022,
          },
        ],
      }
    },

    computed: {
      virtualBoats () {
        return [...Array(10000).keys()].map(i => {
          const boat = { ...this.boats[i % this.boats.length] }
          boat.name = `${boat.name} #${i}`
          return boat
        })
      },
    },

    methods: {
      reset() {
        this.$refs.form.reset();
      },
    },
  };

</script>

