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
              label="Nova Senha"
              :append-inner-icon="visibleNew ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visibleNew ? 'text' : 'password'"
              @click:append-inner="visibleNew = !visibleNew"
              v-model="newPassword"
              :rules="[rules.required, rules.minLenght]"
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
              :rules="[rules.required, rules.minLenght]"
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
      visibleNew: false,
      visibleNewConfirm: false,
      newPassword: "",
      newPasswordConfirmation: "",
      rules: {
        required: (value) => !!value || "Obrigatório.",
        minLenght: (value) =>
          value.length >= 6 || "A senha deve ter no mínimo 6 caracteres.",
      },
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    sendData() {
      if (this.newPassword !== this.newPasswordConfirmation) {
        alert("As senhas não coincidem");
        return;
      }

      if (
        this.newPassword.length < 6 ||
        this.newPasswordConfirmation.length < 6
      ) {
        alert("A senha deve ter no mínimo 6 caracteres");
        return;
      }

      let requestObj = {
        newPassword: this.newPassword,
        newPasswordConfirmation: this.newPasswordConfirmation,
      };
      console.log(requestObj);
    },
  },
};
</script>