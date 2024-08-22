import axios from "axios";

export async function fetchInstituicoes() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/afed03db-4a39-4990-b8cd-1441fe2ff6a2"
    );
    return response.data.instituicoes;
  } catch (error) {
    console.error("Erro ao buscar instituicoes:", error);
    return null;
  }
}