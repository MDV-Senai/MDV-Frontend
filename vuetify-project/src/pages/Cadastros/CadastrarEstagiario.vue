<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        >Cadastro de Estagiário</v-card
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
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome social"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              :disabled="!enableSocialName"
            >
            </v-text-field>
          </v-col>
        </v-row>

        <v-switch
          v-model="enableSocialName"
          label="Inserir Nome social"
          class="text-pink-darken-1"
          color="pink-darken-4"
        ></v-switch>

        <v-row class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Nº Matrícula do Estudante"
              :rules="[rules.required]"
              maxlength="25"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="CPF"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'###.###.###-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Data De Nasc."
              type="date"
              :rules="[rules.required]"
              maxlength="10"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="3">
            <v-text-field
              label="E-mail"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Celular"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Telefone"
              maxlength="14"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Número Emergencial"
              :rules="[rules.required]"
              maxlength="15"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome do Contato Emergencial"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="Instituição De Ensino"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Curso"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Período"
              :rules="[rules.required]"
              maxlength="2"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome do Professor Responsável"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              label="CEP"
              :rules="[rules.required]"
              maxlength="9"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'#####-###'"
              @input.debounce="buscaCep($event.target.value)"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="cidade"
              label="Cidade"
              :rules="[rules.required]"
              maxlength="255"
              counter
              readonly
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="uf"
              label="UF"
              :rules="[rules.required]"
              readonly
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-select>
          </v-col>

          <v-col cols="12" md="2">
            <v-text-field
              label="Nº"
              :rules="[rules.required]"
              maxlength="10"
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
              v-model="rua"
              label="Rua"
              :rules="[rules.required]"
              maxlength="255"
              counter
              readonly
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="bairro"
              label="Bairro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              readonly
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="6">
            <v-text-field
              label="Complemento"
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
              >
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
import axios from "axios";

export default {
  data() {
    return {
      uf: null,
      cidade: null,
      bairro: null,
      rua: null,
      enableSocialName: false,
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
    };
  },
  methods: {
    async buscaCep(cep) {
      const cepFormat = cep.replace("-", "");

      if (cepFormat.length !== 8) return false;

      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        const address = response.data;

        this.uf = address.uf;
        this.cidade = address.localidade;
        this.bairro = address.bairro;
        this.rua = address.logradouro;
      } catch (error) {
        console.error("Erro ao consultar CEP:", error);
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
