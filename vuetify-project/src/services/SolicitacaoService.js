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

export async function updateSolicitacaoVaga(solId, solicitacaoVagaData) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/solicitacao-vaga/${solId}`,
      solicitacaoVagaData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar solicitação:", error);
    return null;
  }
}