<template>
  <v-navigation-drawer
    v-model="localValue"
    temporary
    color="grey-lighten-5"
    location="right"
    :width="343"
  >
    <v-list-item
      prepend-icon="mdi-account-circle-outline"
      :title="username"
    ></v-list-item>

    <v-list density="compact" nav>
      <v-list-item
        v-if="roleUsuario == 'ADMIN'"
        prepend-icon="mdi-information"
        title="Gerar Contrato"
        value="contrato"
        :to="rotaGerarContrato"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-book-arrow-right"
        title="Solicitar Vaga"
        value="solicitarVaga"
        :to="rotaSolicitarVaga"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-dots-horizontal-circle-outline"
        title="Menu de Vagas"
        value="vagas"
        :to="rotaInfoVagas"
      ></v-list-item>
      <v-list-group value="Actions">
        <template v-slot:activator="{ props }">
          <v-list-item
            prepend-icon="mdi-account-file-outline"
            v-bind="props"
            title="Cadastrar"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, route], i) in rotasCrud"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :to="route"
          :value="title"
        ></v-list-item>
      </v-list-group>

      <v-list-group value="Action">
        <template v-slot:activator="{ props }">
          <v-list-item
            prepend-icon="mdi-account-file-outline"
            v-bind="props"
            title="Consultar"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="([title, icon, route], i) in rotasConsulta"
          :key="i"
          :prepend-icon="icon"
          :title="title"
          :to="route"
          :value="title"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { ref, watch, onMounted } from "vue";

export default {
  data() {
    return {
      username: sessionStorage.getItem('username'),
    }
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const localValue = ref(props.value);
    const roleUsuario = ref(""); // Define roleUsuario as a ref

    watch(
      () => props.value,
      (newValue) => {
        localValue.value = newValue;
      }
    );

    watch(localValue, (newValue) => {
      emit("update:value", newValue);
    });

    const rotaInfoVagas = "/informacaoVagas";
    const rotaGerarContrato = "/gerarContrato";
    const rotaSolicitarVaga = "/cadastrarSolicitacaoVagas";

    const rotasCrud = [];

    const rotasConsulta = [];

    // Define a function to get the user role and set it in roleUsuario
    const getRoleUsuario = () => {
      const userRole = sessionStorage.getItem("userRole");
      console.log("userRole from sessionStorage:", userRole); // Add debug log to check the value
      roleUsuario.value = userRole; // Set the value of roleUsuario using ref
    };

    watch(roleUsuario, (newRole) => {
      if (newRole === "ADMIN") {
        rotasCrud.push(
          ["Cadastrar Instituição de Ensino", "mdi-store-plus-outline", "/cadastrarInstituicao"],
          ["Cadastrar Setor", "mdi-text-box-plus-outline", "/cadastrarSetor"],
          ["Cadastro de Curso", "mdi-book-plus-outline", "/cadastrarCurso"],
          ["Cadastro de Vagas", "mdi-handshake-outline", "/cadastrarVagas"],
          ["Cadastro de Concedente", "mdi-domain", "/cadastrarOrganizacao"],
          ["Cadastrar Usuário", "mdi-file-account-outline", "/cadastrarAdmin"],
        )
      }
    });

    rotasCrud.push(
      ["Cadastrar Estagiário", "mdi-account-plus-outline", "/cadastrarEstagiario"],
      ["Cadastro de Coordenador de Instituição de Ensino", "mdi-account-tie", "/cadastrarCoordenadorCurso"],
    );

    // Verifique se o usuário é ADMIN
    watch(roleUsuario, (newRole) => {
      if (newRole === "ADMIN") {
        rotasConsulta.push([
          "Consultar Instituição de Ensino",
          "mdi-store-search-outline",
          "/consultarInstituicao",
        ],
        ["Consultar Setor", "mdi-file-search-outline", "/consultarSetor"],
        ["Consultar Curso", "mdi-bookshelf", "/consultarCurso"],
        ["Consultar Concedente", "mdi-text-box-search-outline", "/consultarConcedente"],
        ["Consultar Usuários", "mdi-account-tie-outline", "/consultarUsuario"],
        );
      }
    });

    rotasConsulta.push(
      ["Consultar Estagiário", "mdi-account-search-outline", "/consultarEstagiario"],
      ["Consultar Coordenador de Instituição de Ensino", "mdi-account-tie", "/consultarCoordenadorCurso"],
      ["Consultar Solicitação", "mdi-text-search-variant", "/consultarSolicitacao"],
      ["Consultar Contrato", "mdi-text-box-search-outline", "/consultarContrato"],
      ["Consultar Vagas", "mdi-account-supervisor-outline", "/consultarVagas"],
    );

    onMounted(() => {
      getRoleUsuario();
    });

    return {
      localValue,
      rotaInfoVagas,
      rotasCrud,
      rotasConsulta,
      rotaGerarContrato,
      rotaSolicitarVaga,
      roleUsuario, // Return the roleUsuario ref
    };
  },
};
</script>
