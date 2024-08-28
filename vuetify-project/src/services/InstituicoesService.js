import axios from "axios";

export async function fetchInstituicoes() {
  try {
    const response = await axios.get(
      "http://localhost:3000/Instituicao"
    );
    return response.data.items;
  } catch (error) {
    console.error("Erro ao buscar instituicoes:", error);
    return null;
  }
}