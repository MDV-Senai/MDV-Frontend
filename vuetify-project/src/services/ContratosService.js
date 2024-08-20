import axios from "axios";

export async function fetchContratos() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/12496590-1fd0-4d8f-b136-094dfc157218"
    );
    return response.data.contratos;
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return null;
  }
}