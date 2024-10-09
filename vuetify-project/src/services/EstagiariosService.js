import axios from "axios";

export async function fetchEstagiarios() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.estagiario;
  } catch (error) {
    console.error("Erro ao buscar estagiarios:", error);
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