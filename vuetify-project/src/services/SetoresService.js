import axios from "axios";

export async function fetchSetores() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.setor;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}