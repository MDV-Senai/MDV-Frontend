<template>
  <v-icon
    icon="mdi-check-bold"
    class="my-icon-spacing light-green-darken-3-var"
    @click="updateStatus"
  ></v-icon>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import {
  fetchSolicitacaoVagaPorId,
  updateSolicitacaoVaga,
} from "../../../services/SolicitacaoService";

export default {
  props: {
    solId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const solicitacao = ref({});
    const errorMessage = ref("");
    let status = ref("");

    const updateStatus = async () => {
      try {
        status.value = "APROVADA";

        const response = await updateSolicitacaoVaga(props.solId, {
          status: status.value,
        });

        if (response.status === 200) {
          Swal.fire({
            title: "Status atualizado com sucesso!",
            text: "A vaga foi aprovada.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            title: "Ocorreu um problema ao aprovar a solicitação",
            icon: "error",
            text: response,
            confirmButtonText: "Ok",
          });
        }
      } catch (error) {
        console.error("Erro ao atualizar o status:", error);
        Swal.fire({
          title: "Erro ao atualizar o status",
          icon: "error",
          text: response,
          confirmButtonText: "Ok",
        });
      }
    };

    return {
      updateStatus,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/shared";
</style>
