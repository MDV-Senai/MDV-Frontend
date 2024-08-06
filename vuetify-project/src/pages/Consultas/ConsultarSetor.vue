<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Consultar Setor</v-card
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
            color="pink-darken-4"
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
                        color="pink-darken-4"
                      ></v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                      <v-card class="d-flex justify-center text-center">
                        <div>
                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="12">
                              <v-text-field
                                label="Supervisor"
                                id="supervisor"
                                value="Fulano"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                          </v-row>

                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="12">
                              <v-text-field
                                label="Coordenador"
                                id="coordenador"
                                value="Fulano"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Setor"
                                id="setor"
                                value="Setor A"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="E-mail Do Setor"
                                id="email"
                                value="setor@hotmail.com"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                          </v-row>

                          <v-row class="mx-5">
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Telefone"
                                id="telefone"
                                value="(47) 3030-3030"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Celular"
                                id="celular"
                                value="(47) 99999-9999"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
                              ></v-text-field>
                            </v-col>
                          </v-row>

                          <v-row class="mx-5">
                            <v-col cols="12" md="12">
                              <v-text-field
                                label="Atividade"
                                id="atividade"
                                reandoly
                                class="text-pink-darken-1"
                                color="pink-darken-4"
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
                    color="pink-darken-4"
                  ></v-btn>
                  <v-btn
                    v-bind="activatorProps"
                    density="compact"
                    icon="mdi-delete"
                    variant="outlined"
                    color="pink-darken-4"
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
          name: "Fulano",
        },
        {
          name: "Fulano",
        },
        {
          name: "Fulano",
        },
        {
          name: "Fulano",
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
};
</script>


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

