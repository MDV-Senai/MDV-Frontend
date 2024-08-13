<!-- eslint-disable vue/valid-v-on -->
<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo"
        ><h3>Cadastro de Organização</h3></v-card
      >
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
              class="text-grey-darken-4"
              variant="outlined"
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
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-center">
          <v-col cols="6" md="4">
            <v-text-field
              label="CNPJ"
              :rules="[rules.required]"
              maxlength="18"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'##.###.###/####-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-text-field
              label="Inscrição Estadual"
              :rules="[rules.required]"
              maxlength="12"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-file-input
              label="Logo da Empresa"
              :rules="[rules.required]"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-file-input>
          </v-col>
        </v-row>

        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="6" md="3">
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
          <v-col cols="6" md="3">
            <v-text-field
              label="Celular"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Telefone"
              :rules="[rules.required]"
              maxlength="13"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Telefone do Responsável Legal"
              :rules="[rules.required]"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              label="CEP"
              :rules="[rules.required]"
              maxlength="9"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'#####-###'"
              @input.debounce="preencheCep($event.target.value)"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              v-model="rua"
              label="Logradouro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="4">
            <v-text-field
              label="Nº"
              :rules="[rules.required]"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="8">
            <v-text-field
              label="Complemento"
              :rules="[rules.required]"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
          <v-col cols="12" md="12">
            <v-text-field
              v-model="bairro"
              label="Bairro"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="8">
            <v-text-field
              v-model="cidade"
              label="Cidade"
              :rules="[rules.required]"
              maxlength="255"
              counter
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-text-field>
          </v-col>
          <v-col cols="6" md="4">
            <v-select
              v-model="uf"
              :items="ufs"
              :item-title="'uf'"
              :item-value="'id'"
              label="UF"
              class="text-grey-darken-4"
              variant="outlined"
              readonly
            ></v-select>
          </v-col>
        </v-row>

        <div class="d-flex justify-center">
          <v-row class="d-flex justify-center">
            <v-col cols="6" md="3">
              <v-btn
                @click="reset"
                color="pink-darken-4"
                append-icon="mdi-chevron-right"
                variant="outlined"
                class="my-10 text-grey-darken-4"
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
                  <v-icon color="pink-darken-4"></v-icon>
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

<script>
import axios from "axios";

export default {
  data() {
    return {
      uf: null,
      cidade: null,
      bairro: null,
      rua: null,
      rules: {
        required: (value) => !!value || "Obrigatório.",
      },
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

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
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/shared';
</style>