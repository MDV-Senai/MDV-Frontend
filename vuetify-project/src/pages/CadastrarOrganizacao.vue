<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo" >Cadastro de Organização</v-card>
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="12">
            <v-text-field
              label="Nome Fantasia"
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
              label="Razão Social"
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
          <v-col cols="12" md="4">
            <v-text-field
              label="CNPJ"
              :rules="[rules.required]"
              maxlength="18"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'##.###.###/####-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Inscrição Estadual"
              :rules="[rules.required]"
              maxlength="12"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-file-input
              label="Logo da Empresa"
              :rules="[rules.required]"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-file-input>
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
              maxlength="14"
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
              :rules="[rules.required]"
              maxlength="13"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Telefone do Responsável"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-mask="'(##) ####-####'"
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
              label="Cidade"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-model="cidade"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="selectedUF"
              :items="ufs"
              :item-title="'uf'"
              :item-value="'id'"
              label="UF"
              color="pink-darken-4"
              class="text-pink-darken-1"
              readonly
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
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
            label="Rua"
            :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-model="rua"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
            label="Bairro"
            :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              v-model="bairro"
              readonly
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
              width="183"
              height="62"
            >
              Limpar
            </v-btn>
          </v-col>

          <v-col cols="12" md="3">
            <v-btn
              append-icon="mdi-chevron-right"

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
      rua: null,
      bairro: null,
      cidade:null,
      selectId: null,
      rules: {
        required: value => !!value || 'Obrigatório.',
      },
      items: [
      { id: 'AC', state: 'AC' },
        { id: 'AL', state: 'AL' },
        { id: 'AP', state: 'AP' },
        { id: 'AM', state: 'AM' },
        { id: 'BA', state: 'BA' },
        { id: 'CE', state: 'CE' },
        { id: 'DF', state: 'DF' },
        { id: 'ES', state: 'ES' },
        { id: 'GO', state: 'GO' },
        { id: 'MA', state: 'MA' },
        { id: 'MT', state: 'MT' },
        { id: 'MS', state: 'MS' },
        { id: 'MG', state: 'MG' },
        { id: 'PA', state: 'PA' },
        { id: 'PB', state: 'PB' },
        { id: 'PR', state: 'PR' },
        { id: 'PE', state: 'PE' },
        { id: 'PI', state: 'PI' },
        { id: 'RJ', state: 'RJ' },
        { id: 'RN', state: 'RN' },
        { id: 'RS', state: 'RS' },
        { id: 'RO', state: 'RO' },
        { id: 'RR', state: 'RR' },
        { id: 'SC', state: 'SC' },
        { id: 'SP', state: 'SP' },
        { id: 'SE', state: 'SE' },
        { id: 'TO', state: 'TO' }
      ]
    }
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    async buscaCep(cep) {

      const cepFormat = cep.replace('-','');

      if(cepFormat.length !== 8) {
        return false;
      }

      try {

        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const address = response.data;

        console.log(address);

      } catch (error) {
        console.error('Error ao consultar endereço:', error);
      }
    },
  },
};
</script>
