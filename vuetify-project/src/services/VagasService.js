import axios from "axios";

export async function fetchVagas() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/abb79b48-d214-4366-83f8-39da34baaad3"
    );
    return response.data.vagas;
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
    return null;
  }
}