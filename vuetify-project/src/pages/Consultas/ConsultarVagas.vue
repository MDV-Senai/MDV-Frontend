<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Consultar Vagas</h3></v-card
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
                                label="Curso"
                                id="curso"
                                value="Fármacia"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row class="mx-5 my-5">
                            <v-col cols="12" md="12">
                              <v-text-field
                                label="Descrição da Vaga"
                                id="descricao"
                                value=""
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
                                label="Setor"
                                id="setor"
                                value="Setor A"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-text-field
                                label="Turno"
                                id="turno"
                                value="Noturno"
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
                                label="Quantidade de Vagas"
                                id="quant_vagas"
                                value="10"
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                              <v-select
                                label="Situação"
                                id="situacao"
                                value=""
                                reandoly
                                class="text-grey-darken-1"
                                variant="outlined"
                                color="light-grey-darken-3"
                              ></v-select>
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
                    density="compact"
                    icon="mdi-pencil"
                    class="mx-5"
                    variant="outlined"
                    color="light-green-darken-3"
                  ></v-btn>
                  <v-btn
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

<style lang="scss">
@import '@/styles/shared';
</style>