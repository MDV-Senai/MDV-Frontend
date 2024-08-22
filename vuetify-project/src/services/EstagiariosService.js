import axios from "axios";

export async function fetchEstagiarios() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/433bc1bd-5dc8-4604-b498-554b7023df8d"
    );
    return response.data.estagiarios;
  } catch (error) {
    console.error("Erro ao buscar estagiarios:", error);
    return null;
  }
}