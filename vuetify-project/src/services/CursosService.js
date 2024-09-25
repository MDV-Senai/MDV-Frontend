import axios from "axios";

export async function fetchCursos() {
  try {
    let token = sessionStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/curso/instituicaoEnsino",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}