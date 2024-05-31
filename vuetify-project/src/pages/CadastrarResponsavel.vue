<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">Responsável Pelo Estagiário (Instituição de
        Ensino)</v-card>
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field label="Nome" :rules="[rules.required]" maxlength="255" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field label="Nome Social" :rules="[rules.required]" maxlength="255" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field label="Nº Matrícula do Estudante" :rules="[rules.required]" maxlength="25" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field label="CPF" :rules="[rules.required]" maxlength="14" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field label="Instituição de Ensino" :rules="[rules.required]" maxlength="255" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>


          <v-col cols="12" md="6">
            <v-text-field label="Curso" :rules="[rules.required]" maxlength="255" counter clearable
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
          </v-col>

        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="3">
              <div></div>
            </v-col>
            <v-col cols="12" md="3">
              <v-btn @click="reset" class="my-10" color="pink-darken-4" append-icon="mdi-chevron-right" variant="outlined"
                width="183" height="62">
                Limpar
              </v-btn>
            </v-col>

            <v-col cols="12" md="3">
              <v-btn append-icon="mdi-chevron-right" variant="outlined" color="pink-darken-4" class="my-10" width="183"
                height="62" id="botaoEntrar">
                Cadastrar

                <template v-slot:append>
                  <v-icon color="pink-darken-4"></v-icon>
                </template>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3">
              <div></div>
            </v-col>
          </v-row>
        </div>
      </v-form>
    </div>
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
      rules: {
        required: value => !!value || 'Obrigatório.',
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