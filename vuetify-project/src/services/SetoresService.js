import axios from "axios";

export async function fetchSetores() {
  try {
    let token = sessionStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/setores/10/5",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}