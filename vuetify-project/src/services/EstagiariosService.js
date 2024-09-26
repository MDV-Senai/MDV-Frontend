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

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);
    return null;
  }
}