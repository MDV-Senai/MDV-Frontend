import axios from "axios";

export async function fetchVagas(pagina, itensPorPagina) {
  try {
      const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/vaga`,
          {
              params: {
                  page: pagina,
                  limit: itensPorPagina
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
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/vaga/" + vagaId);

      return response.data;
  } catch (error) {
      console.error("Erro ao buscar vaga:", error);
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