import axios from "axios";

export async function fetchSolicitacaoVaga(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/solicitacao-vaga`,
      {
        params: {
          page: pagina,
          limit: itensPorPagina
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar solicitação:", error);
    return null;
  }
}

export async function fetchSolicitacaoVagaPorId(solId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/solicitacao-vaga/" + solId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar solicitação:", error);
    return null;
  }
}

export async function updateSolicitacaoVaga(solId, status) {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/solicitacao-vaga/${solId}/alterar-status`;
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(url, status, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response;
  } catch (error) {

    let errorMessage;

    const message = error.response?.data?.message;

    if (Array.isArray(message)) {
      errorMessage = message[0];
    } else if (typeof message === "string") {
      errorMessage = message;
    } else {
      errorMessage = error.message || "Erro desconhecido.";
    }

    return errorMessage;
  }
}