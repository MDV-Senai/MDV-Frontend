import axios from "axios";

export async function fetchSetores() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/7d49f4ad-732a-422d-b6cf-1e3ad3ea6fac"
    );
    return response.data.setores;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}