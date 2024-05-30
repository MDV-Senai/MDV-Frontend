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
              label="Nome fantasia"
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
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              maxlength="18"
              v-mask="'##.###.###/####-##'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Inscrição Estadual"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Logo da empresa"
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
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Celular"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              maxlength="15"
              v-mask="'(##) #####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Telefone"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              maxlength="14"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              label="Telefone responsavel"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              maxlength="14"
              v-mask="'(##) ####-####'"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row id="inputResponsivo" class="d-flex justify-center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="cep"
              label="CEP"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
              maxlength="9"
              v-mask="'#####-###'"
              @change="buscaCep(cep)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Cidade"
              clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="2">
            <v-select
              v-model="selectedUF"
              :items="ufs"
              :item-title="'uf'"
              :item-value="'id'"
              label="UF"
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-select>
          </v-col>
          <v-col cols="12" md="2">
            <v-text-field
              label="Nº"
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
            clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
            label="Bairro"
            clearable
              class="text-pink-darken-1"
              color="pink-darken-4"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
            label="Complemento"
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
      selectId: null,
      items: [
        { id: "AC", state: "Acre" },
        { id: "AL", state: "Alagoas" },
        { id: "AP", state: "Amapá" },
        { id: "AM", state: "Amazonas" },
        { id: "BA", state: "Bahia" },
        { id: "CE", state: "Ceará" },
        { id: "DF", state: "Distrito Federal" },
        { id: "ES", state: "Espírito Santo" },
        { id: "GO", state: "Goiás" },
        { id: "MA", state: "Maranhão" },
        { id: "MT", state: "Mato Grosso" },
        { id: "MS", state: "Mato Grosso do Sul" },
        { id: "MG", state: "Minas Gerais" },
        { id: "PA", state: "Pará" },
        { id: "PB", state: "Paraíba" },
        { id: "PR", state: "Paraná" },
        { id: "PE", state: "Pernambuco" },
        { id: "PI", state: "Piauí" },
        { id: "RJ", state: "Rio de Janeiro" },
        { id: "RN", state: "Rio Grande do Norte" },
        { id: "RS", state: "Rio Grande do Sul" },
        { id: "RO", state: "Rondônia" },
        { id: "RR", state: "Roraima" },
        { id: "SC", state: "Santa Catarina" },
        { id: "SP", state: "São Paulo" },
        { id: "SE", state: "Sergipe" },
        { id: "TO", state: "Tocantins" },
      ],
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    async buscaCep(cep) {
      const cepFormat = cep.replace("-", "");
      alert(cepFormat);

      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json/`
        );
        const address = response.data;

        console.log(address);
      } catch (error) {
        console.error("Error fetching address:", error);
      }
    },
  },
};
</script>
