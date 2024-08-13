<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastrar Administrador</h3></v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome social"
              :rules="[rules.required, rules.hidden]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-show="isVisible"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="12">
            <v-switch
              v-model="isVisible"
              class="text-grey-darken-4"
              label="Exibir Nome Social"
              variant="outlined"
              id="toggleSwitch"
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="6" md="6">
            <v-text-field
              label="CPF"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'###.###.###-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6">
            <v-text-field
              label="Nº de Matrícula de Trabalho"
              :rules="[rules.required]"
              maxlength="20"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="4">
            <v-text-field
              label="Telefone"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              label="Celular"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="E-mail"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="6">
            <v-text-field
              label="Senha"
              type="password"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6">
            <v-text-field
              label="Confirme sua senha"
              type="password"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10 text-grey-darken-4"
                variant="outlined"
                append-icon="mdi-chevron-right"
                width="183"
                height="62"
              >
                Limpar
              </v-btn>
            </v-col>

            <v-col cols="6" md="3">
              <v-btn
                append-icon="mdi-chevron-right"
                variant="outlined"
                class="my-10 text-grey-darken-4"
                width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon
                    class="text-grey-darken-4"
                    variant="outlined"
                  ></v-icon>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>

    <v-container>
      <v-card flat>
        <v-card-title class="d-flex align-center pe-2">
          Consulta de Admin

          <v-spacer></v-spacer>

          <v-text-field
            v-model="search"
            density="compact"
            label="Consultar"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-card-title>

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
                <v-btn
                  v-bind="activatorProps"
                  @click="handleButtonClick(item.name)"
                  density="compact"
                  icon="mdi-eye-outline"
                  variant="outlined"
                  color="red"
                ></v-btn>
                <v-btn
                  v-bind="activatorProps"
                  density="compact"
                  icon="mdi-pencil"
                  class="mx-5"
                  variant="outlined"
                  color="red"
                ></v-btn>
                <v-btn
                  v-bind="activatorProps"
                  density="compact"
                  icon="mdi-delete"
                  variant="outlined"
                  color="red"
                ></v-btn>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    <Footer />
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      enableSocialName: false,
      isVisible: false,
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
      },
      search: "",
      headers: [
        { title: "Nome", align: "start", key: "name" },
        { title: "Nº da matricula", align: "start", key: "speed" },
        { title: "Ações", align: "start", sortable: false },
      ],
      boats: [
        {
          name: "Speedster",
          speed: 35,
        },
        {
          name: "OceanMaster",
          speed: 25,
        },
        {
          name: "Voyager",
          speed: 20,
        },
        {
          name: "WaveRunner",
          speed: 40,
        },
        {
          name: "SeaBreeze",
          speed: 28,
        },
        {
          name: "HarborGuard",
          speed: 18,
        },
        {
          name: "SlickFin",
          speed: 33,
        },
        {
          name: "StormBreaker",
          speed: 22,
        },
        {
          name: "WindSail",
          speed: 15,
        },
        {
          name: "FastTide",
          speed: 37,
        },
      ],
    };
  },

  computed: {
    virtualBoats() {
      return [...Array(10).keys()].map((i) => {
        const boat = { ...this.boats[i % this.boats.length] };
        boat.name = `${boat.name} #${i}`;
        return boat;
      });
    },
    filteredBoats() {
      if (!this.search) {
        return this.virtualBoats;
      }
      const searchTerm = this.search.toLowerCase();
      return this.virtualBoats.filter(
        (boat) =>
          boat.name.toLowerCase().includes(searchTerm) ||
          String(boat.speed).includes(searchTerm)
      );
    },
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },

    handleButtonClick(item) {
      alert("Button clicked for:" + item);
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>