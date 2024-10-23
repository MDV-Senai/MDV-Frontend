import axios from "axios";

export async function fetchEstagiarios() {
  try {
    let token = sessionStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/aluno",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    return null;
  }
}

export async function cadastrarEstagiario(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/aluno";

    let token = sessionStorage.getItem("authToken");

    const req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return req;
  } catch (error) {
    console.log('Erro ao cadastrar estagiário: ' + error);
    return null;
  }
}