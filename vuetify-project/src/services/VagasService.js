import axios from "axios";

export async function fetchVagas() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.vaga;
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
    return null;
  }
}