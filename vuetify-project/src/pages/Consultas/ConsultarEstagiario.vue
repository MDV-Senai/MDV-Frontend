<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Consultar Estagiário</v-card
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
            color="light-green-darken-3"
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
                        <v-row class="mt-16 mx-5">
                          <v-col cols="12" md="12">
                            <v-text-field
                              label="Nome / Nome Social"
                              id="nome"
                              value="Nome Completo"
                              reandoly
                              class="mt-16 text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="mx-5">
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="CPF"
                              id="cpf"
                              value="000.000.000-00"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Data de Nasc."
                              id="data_nasc"
                              value="00/00/0000"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Telefone"
                              id="telefone"
                              value="3030-3030"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row class="mx-5">
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Email:"
                              id="email"
                              value="instituicao@gmail.com"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Celular"
                              id="celular"
                              value="(47) 99999-9999"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Instituição"
                              id="instituicao"
                              value="Instituição de Ensino"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row class="mx-5">
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Matrícula"
                              id="matricula"
                              value="0000000"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Curso"
                              id="curso"
                              value="Curso"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Fase/Série"
                              id="faseSerie"
                              value="0"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row class="mx-5">
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="CEP"
                              id="cep"
                              value="00.000-000"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              label="UF"
                              id="uf"
                              value="Estado"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Cidade"
                              id="cidade"
                              value="Cidade"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row class="mx-5">
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Bairro"
                              id="bairro"
                              value="Bairro"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Logradouro"
                              id="rua"
                              value="Logradouro"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" md="4">
                            <v-text-field
                              label="Complemento"
                              id="complemento"
                              value="Complemento"
                              reandoly
                              class="text-grey-darken-1"
                              variant="outlined"
                              color="light-green-darken-3"
                            ></v-text-field>
                          </v-col>
                        </v-row>

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

