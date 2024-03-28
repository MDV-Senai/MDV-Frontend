<template>
  <v-main>
    <v-img cover src="../assets/img/fundo.png">
      <v-container>
        <v-card width="400" height="400" rounded-xl id="transparente">
          <v-form v-model="valid">
            <v-container align="center">
              
                <v-col cols="16" md="4">
                  <v-text-field
                    label="Outlined"
                    model-value="Usuário"
                    variant="outlined"
                    readonly
                ></v-text-field>
                </v-col>

                <v-col cols="16" md="4">
                  <v-text-field
                    v-model="senha"
                    :counter="10"
                    :rules="nameRules"
                    label="Senha"
                    required
                  ></v-text-field>
                </v-col>

                <v-btn
                append-icon="mdi-chevron-right"
                variant="outlined"
                color="pink-darken-4"
                rounded-xl>
                
                Entrar

                <template v-slot:append>
                    <v-icon color="pink-darken-4"></v-icon>
                </template>
                </v-btn>
              
            </v-container>
          </v-form>
        </v-card>
      </v-container> </v-img
    >>
  </v-main>
</template>

<script>
 export default {
    data: () => ({
      valid: false,
      usuario: '',
      senha: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Usuário é obrigatório'
        },
      ],
    }),
  }
</script>

<style scoped>

#transparente {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 20px;
}
</style>