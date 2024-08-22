import axios from "axios";

export async function fetchContratos() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/40e18481-e55e-4d87-ba0f-565c8275d47e"
    );
    return response.data.contratos;
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return null;
  }
}