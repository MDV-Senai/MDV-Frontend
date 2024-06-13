<template>
  <v-main id="imagem">
    <HeaderNoLogin />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Redefinição de senha</v-card
      >
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Senha Atual"
              :append-inner-icon="visibleActual ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visibleActual ? 'text' : 'password'"
              @click:append-inner="visibleActual = !visibleActual"
              v-model="actualPassword"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nova Senha"
              :append-inner-icon="visibleNew ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visibleNew ? 'text' : 'password'"
              @click:append-inner="visibleNew = !visibleNew"
              v-model="newPassword"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Repita a Nova Senha"
              :append-inner-icon="visibleNewConfirm ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visibleNewConfirm ? 'text' : 'password'"
              @click:append-inner="visibleNewConfirm = !visibleNewConfirm"
              v-model="newPasswordConfirmation"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="12" md="3">
              <div></div>
            </v-col>
            <v-col cols="12" md="3">
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

            <v-col cols="12" md="3">
              <v-btn
                append-icon="mdi-chevron-right"
                variant="outlined"
                color="pink-darken-4"
                class="my-10"
                width="183"
                height="62"
                id="botaoEntrar"
                @click="sendData"
              >
                Alterar senha

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
      visibleActual: false,
      visibleNew: false,
      visibleNewConfirm: false,
      actualPassword: "",
      newPassword: "",
      newPasswordConfirmation: "",
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    sendData() {
      let requestObj = {
        actualPassword: this.actualPassword,
        newPassword: this.newPassword,
        newPasswordConfirmation: this.newPasswordConfirmation,
      };
      console.log(requestObj);
    },
  },
};
</script>