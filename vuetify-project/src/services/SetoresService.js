import axios from "axios";

export async function fetchSetores() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/09989b46-41e7-467c-bfa0-4018680e6d44"
    );
    return response.data.setores;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}