import axios from "axios";

export async function fetchVagas() {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/solicitacao-vaga";

    const token = sessionStorage.getItem("authToken");

    const req = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return req.data.data;
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