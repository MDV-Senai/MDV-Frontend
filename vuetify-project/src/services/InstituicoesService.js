import axios from "axios";

export async function fetchInstituicoes() {
  try {
    let token = sessionStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/instituicao-ensino",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar instituições:", error);
    return null;
  }
}

export async function cadastrarInstituicaoEnsino(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/instituicaoEnsino";

    const token = sessionStorage.getItem("authToken");

    const req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Instuição de Ensino: '+error);
    return null;
  }
}