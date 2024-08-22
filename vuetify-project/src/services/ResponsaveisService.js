import axios from "axios";

export async function fetchResponsaveis() {
  try {
    const response = await axios.get(
      "https://run.mocky.io/v3/51aeb0be-d2a3-4f1b-a24b-5aaf0ebd2119"
    );
    return response.data.responsaveis;
  } catch (error) {
    console.error("Erro ao buscar responsaveis:", error);
    return null;
  }
}