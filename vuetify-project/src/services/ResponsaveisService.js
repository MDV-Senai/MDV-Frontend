import axios from "axios";

export async function fetchResponsaveis() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.responsavel;
  } catch (error) {
    console.error("Erro ao buscar responsaveis:", error);
    return null;
  }
}