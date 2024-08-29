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