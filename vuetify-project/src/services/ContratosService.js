import axios from "axios";

export async function fetchContratos() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/ac87da2a-ce22-4323-a882-2438b08ba3b5"
    );
    return response.data.contratos;
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return null;
  }
}