import axios from "axios";

export async function fetchVagas(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/vaga`,
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
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
    return null;
  }
}

export async function cadastrarSolcitacaoVagas(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/solicitacao-vaga";

    const token = sessionStorage.getItem("authToken");

    const req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Solicitação de Vaga: ' + error);
    return null;
  }
}

export async function fetchVagaPorId(vagaId) {
  try {
    const token = sessionStorage.getItem("authToken");
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/vaga/" + vagaId, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar vaga:", error);
    return null;
  }
}

export async function updateVaga(vagaId, vagaData) {
  try {
    const token = sessionStorage.getItem("authToken");
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/vaga/${vagaId}`,
      vagaData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar vaga:", error);
    return null;
  }
}

export async function cadastrarVagas(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/vaga";

    const token = sessionStorage.getItem("authToken");

    const req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Solicitação de Vaga: ' + error);
    return null;
  }
}