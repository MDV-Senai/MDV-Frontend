<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Consultar Instituição de Ensino</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-container>
        <v-card flat>
          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            label="Pesquise"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            color="light-grey-darken-3"
            hide-details
            single-line
          ></v-text-field>

          <v-divider></v-divider>
          <v-data-table
            :headers="headers"
            :items="filteredBoats"
            height="400"
            item-value="name"
          >
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.name }}</td>
                <td>{{ item.speed }}</td>
                <td>
                  <v-dialog max-width="800">
                    <template v-slot:activator="{ props: activatorProps }">
                      <v-btn
                        v-bind="activatorProps"
                        density="compact"
                        icon="mdi-eye-outline"
                        variant="outlined"
                        color="light-green-darken-3"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card class="d-flex justify-center text-center">
                        <div>
                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="12">
                              <v-text-field
                                label="Instituição"
                                id="instituicao"
                                value="Instituição de Ensino"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="CNPJ"
                                id="cnpj"
                                value="00.000.000/0001-00"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Inscrição Estadual"
                                id="inscricao"
                                value="00.000.000-0"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                          </v-row>

                          <v-row class="mx-5">
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Email:"
                                id="email"
                                value="instituicao@gmail.com"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                              <v-text-field
                                label="Telefone:"
                                id="inscricao"
                                value="3030-3030"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="3">
                              <v-text-field
                                label="Celular"
                                id="inscricao"
                                value="(47) 99999-9999"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </div>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            text="Fechar"
                            @click="isActive.value = false"
                          ></v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                  <v-btn
                    v-bind="activatorProps"
                    density="compact"
                    icon="mdi-pencil"
                    class="mx-5"
                    variant="outlined"
                    color="light-green-darken-3"
                  ></v-btn>
                  <v-btn
                    v-bind="activatorProps"
                    density="compact"
                    icon="mdi-delete"
                    variant="outlined"
                    color="light-green-darken-3"
                  ></v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
    <Footer />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      search: "",

      boats: [
        {
          name: "Unisenai",
        },
        {
          name: "Univille",
        },
        {
          name: "Uniaselvi",
        },
        {
          name: "Cruzeiro do Sul",
        },
      ],
    };
  },

  computed: {
    filteredBoats() {
      if (!this.boats) {
        return this.virtualBoats;
      }
      const searchTerm = this.search.toLowerCase();
      return this.boats.filter(
        (boat) =>
          boat.name.toLowerCase().includes(searchTerm) ||
          String(boat.speed).includes(searchTerm)
      );
    },
  },
  methods: {
    handleButtonClick(item) {},
  },

  computed: {
    filteredBoats() {
      if (!this.boats) {
        return this.virtualBoats;
      }
      const searchTerm = this.search.toLowerCase();
      return this.boats.filter(
        (boat) =>
          boat.name.toLowerCase().includes(searchTerm) ||
          String(boat.speed).includes(searchTerm)
      );
    },
  },
  methods: {
    handleButtonClick(item) {},
  },
};
</script>

<style scoped>
h3 {
  background: linear-gradient(
    to right,
    rgba(178, 34, 34, 1),
    rgba(0, 100, 0, 1)
  );
  -webkit-background-clip: text;
  color: transparent;
  background-clip: text;
}

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

#fundoCards {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}
</style>