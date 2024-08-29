import axios from "axios";

export async function fetchCursos() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.curso;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}