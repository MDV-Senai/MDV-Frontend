<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Responsável Pelo Estagiário (Instituição de Ensino</h3>
        )</v-card
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
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
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
              class="text-grey-darken-3"
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
              class="text-grey-darken-3"
              label="Exibir Nome Social"
              variant="outlined"
              id="toggleSwitch"
            ></v-switch>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="6" md="6">
            <v-text-field
              label="Nº Matrícula do Estudante"
              :rules="[rules.required]"
              maxlength="25"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="6">
            <v-text-field
              label="CPF"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
              v-mask="'###.###.###-##'"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              label="Instituição de Ensino"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Curso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-3"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                class="my-10 text-grey-darken-3"
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
                class="my-10 text-grey-darken-3"
                width="183"
                height="62"
                id="botaoEntrar"
              >
                Cadastrar

                <template v-slot:append>
                  <v-icon variant="outlined"></v-icon>
                </template>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>
    <Footer />
  </v-main>
</template>

<style scoped>
#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

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

<script>
export default {
  data() {
    return {
      enableSocialName: false,
      isVisible: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
