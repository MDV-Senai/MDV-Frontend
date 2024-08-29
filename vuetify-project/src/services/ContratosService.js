import axios from "axios";

export async function fetchContratos() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.contrato;
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return null;
  }
}