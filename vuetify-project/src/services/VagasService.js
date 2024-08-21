import axios from "axios";

export async function fetchVagas() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/c082d1c7-e043-48bd-a720-ea9912f097e4"
    );
    return response.data.vagas;
  } catch (error) {
    console.error("Erro ao buscar vagas:", error);
    return null;
  }
}