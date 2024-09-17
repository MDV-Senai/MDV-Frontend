<template>
  <v-main>
    <div id="imagem">
      <v-row>
        <div class="w-50" id="responsive-cards">
          <v-col cols="12" md="12">
            <v-container class="my-9">
              <v-container>
                <div id="imageLogin">
                  <v-container class="my-16">
                    <h1 align="center">Nome do Sistema</h1>
                    <v-card
                      align="center"
                      class="mx-auto my-16"
                      width="80%"
                      height="469"
                    >
                      <v-form class="my-12">
                        <v-col cols="12" sm="10">
                          <v-text-field
                            label="Email"
                            v-model="email"
                            variant="outlined"
                            color="grey-darken-4"
                          ></v-text-field>
                        </v-col>

                        <v-col cols="12" sm="10">
                          <v-text-field
                            label="Senha"
                            v-model="senha"
                            type="password"
                            variant="outlined"
                            color="grey-darken-4"
                          ></v-text-field>
                        </v-col>

                        <div
                          class="d-flex justify-center align-center text-center"
                        >
                          <v-dialog max-width="500">
                            <template
                              v-slot:activator="{ props: activatorProps }"
                            >
                              <v-btn
                                v-bind="activatorProps"
                               color="grey-darken-4"
                                text="Esqueci a senha"
                                variant="text"
                              ></v-btn>
                            </template>

                            <template v-slot:default="{ isActive }">
                              <v-window show-arrows>
                                <template v-slot:prev="{ props }">
                                  <v-container
                                    class="d-flex justify-center align-center flex-column text-center"
                                  >
                                    <v-col cols="auto">
                                      <v-btn
                                        icon="mdi-email"
                                        size="x-large"
                                        class="mb-3 light-green-darken-3-var"
                                      ></v-btn>
                                    </v-col>

                                    <h4 class="mb-2">
                                      Enviamos um e-mail para f****o@gmail.com.
                                      Por favor, verifique sua caixa de entrada.
                                    </h4>
                                    <div></div>
                                    <v-btn
                                      text
                                      @click="isActive.value = false"
                                      variant="outlined"
                                         class="mb-6 text-grey-darken-3"
         
                                     
                                    >
                                      Ok
                                    </v-btn>
                                  </v-container>
                                </template>

                                <template v-slot:next="{ props }">
                                  <v-container
                                    color="red"
                                    class="d-flex justify-center align-center flex-column py-3 text-center"
                                  >
                                    <v-col cols="12" sm="10">
                                      <v-btn
                                        icon="mdi-email"
                                        size="x-large"
                                        class="mt-4 light-green-darken-3-var"
                                      ></v-btn>

                                      <v-text-field
                                        label="E-mail"
                                        :rules="[rules.required, rules.email]"
                                        variant="outlined"
                                        color="grey-darken-4"
                                        class="mt-2"
                                      ></v-text-field>

                                      <v-btn
                                        color="grey-darken-4"
                                        @click="props.onClick"
                                        variant="outlined"
                                        class="mb-5"
                                      >
                                        <v-icon right
                                          >mdi-chevron-right-circle-outline</v-icon
                                        >
                                        Enviar
                                      </v-btn>
                                    </v-col>
                                  </v-container>
                                </template>

                                <v-window-item
                                  v-for="n in 2"
                                  :key="`card-${n}`"
                                >
                                  <v-card
                                    class="d-flex align-center justify-center ma-2"
                                    elevation="2"
                                    height="200"
                                  >
                                  </v-card>
                                </v-window-item>
                              </v-window>
                            </template>
                          </v-dialog>
                        </div>
                          <v-btn
                            @click="enviarDados"
                            append-icon="mdi-chevron-right"
                            variant="outlined"
                            color="green-darken-4"
                            class="my-10"
                            width="183"
                            height="62"
                            id="botaoEntrar"
                          >
                            Entrar

                            <template v-slot:append>
                              <v-icon color="green-darken-4"></v-icon>
                            </template>
                          </v-btn>
                      </v-form>
                    </v-card>
                  </v-container>
                </div>
              </v-container>
            </v-container>
          </v-col>
        </div>
        <v-col cols="12" md="6">
          <v-container class="my-13">
            <v-card
              class="mx-auto my-16 overflow-auto"
              width="100%"
              height="673"
              id="fundoCardVagas"
            >
              <div class="d-flex flex-row flex-wrap" id="responsive-cards">
                <v-col cols="12" md="6" v-for="vaga in vagas" :key="vaga.id">
                  <v-card>
                    <v-card-title v-model="titulo">
                      {{ vaga.titulo }}
                    </v-card-title>

                    <v-card-subtitle v-model="quantidade">
                      {{ vaga.quantidade }}
                    </v-card-subtitle>

                    <v-card-subtitle v-model="turno">
                      {{ vaga.turno }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-btn color="grey-darken-4" text="Descrição"></v-btn>

                      <v-spacer></v-spacer>

                      <v-btn
                        :icon="vaga.show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                        @click="vaga.show = !vaga.show"
                      ></v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                      <div v-show="vaga.show">
                        <v-divider></v-divider>

                        <v-card-text v-model="descricao">
                          {{ vaga.descricao }}
                        </v-card-text>
                      </div>
                    </v-expand-transition>
                  </v-card>
                </v-col>
              </div>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<script>
import axios from "axios";
import {
  emailValidation,
} from "@/validations/formValidations";

export default {
  data() {
    return {
      email: null,
      senha: null,
      validacaoCredencial: false,
      routeHome: "/home",
      vagas: null,
      titulo: null,
      quantidade: null,
      turno: null,
      descricao: null,
      id: null,
      show: false,
      variavelTeste: true,
      rules: {
        required: (value) => !!value || "Campo obrigatório.",
        email: (value) => emailValidation(value),
      },
    };
  },

  methods: {
    async listarVagas() {
      try {
        const response = await axios.get(
          `https://run.mocky.io/v3/2aa2c1c0-22bf-4614-8cc9-32b3943d6c3b`
        );
        const info = response.data;
        const vagas = info.items.vagas;
        this.vagas = vagas;
      } catch (error) {
        console.error("Erro :", error);
      }
    },

    async enviarDados() {
        try {
          const data = {
            email: this.email,
            password: this.senha
          };

          console.log(data);
          const url = import.meta.env.VITE_BACKEND_URL + "/auth/login";
          console.log(url);
            
          const req = await axios.post(url, data);

          if (req.status >= 200 || req.status < 400) {
            const token = req.data.token;
            sessionStorage.setItem('authToken', token);
            this.$router.push('/home'); 
          } 


          console.log("Resposta: ", req);
        } catch (error) {
          console.error("Erro ao enviar dados:", error);
        }
    },

    async isStatusError () {
      this.url
    }
  },
  mounted() {
    this.listarVagas();
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/shared';

#textoSenha {
  color: #f178ac;
  text-decoration: none;
}

#botaoEntrar {
  border-radius: 10px;
}

#posicao {
  position: relative;
  left: 57%;
}

#imagem {
  background-image: url("../assets/img/fundoBrancoBoneca.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-color: #ffff;
}

@media (max-width: 768px) {
  #responsive-login {
    flex-direction: column;
    justify-content: center;
  }
  #responsive-cards {
    width: 100% !important;
  }
  #imagem {
    background-size: 970px;
    background-position-x: left;
  }
}

#imageLogin {
  border-radius: 20px;
  background-image: url("../assets/img/retanguloCinza2.svg");
}

#fundoCardVagas {
  opacity: 93%;
}
</style>
