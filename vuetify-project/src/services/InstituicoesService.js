import axios from "axios";

export async function fetchInstituicoes(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino`,
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
    console.error("Erro ao buscar instituições:", error);
    return null;
  }
}

export async function fetchInstituicoesPorId(instId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/instituicao-ensino/" + instId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar instituicao:", error);
    return null;
  }
}

export async function cadastrarInstituicaoEnsino(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/instituicao-ensino";

    const token = sessionStorage.getItem("authToken");

    const req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Instuição de Ensino: ' + error);
    return null;
  }
}

export async function updateInstituicaoEnsino(instId, instituicaoData) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instId}`,
      instituicaoData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar instituicao:", error);
    return null;
  }
}