<template>
  <v-icon
    icon="mdi-close-thick"
    class="my-icon-spacing light-red-darken-3-var"
    @click="updateStatus"
  ></v-icon>
</template>

<script>
import { ref } from "vue";
import Swal from "sweetalert2";
import { updateSolicitacaoVaga } from "../../services/SolicitacaoService";

export default {
  props: {
    solId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    let status = ref("");

    const updateStatus = async () => {
      try {
        status.value = "APROVADA";

        const response = await updateSolicitacaoVaga(props.solId, {
          status: status.value,
        });

        if (response.status === 200) {
          Swal.fire({
            title: "Atenção",
            text: "A vaga foi reprovada.",
            icon: "warning",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            title: "Ocorreu um problema ao atualizar a solicitação",
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