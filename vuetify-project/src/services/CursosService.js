import axios from "axios";

export async function fetchCursos() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/8cef4576-aa62-4c0a-81c4-c2d48a3783b6"
    );
    return response.data.cursos;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}