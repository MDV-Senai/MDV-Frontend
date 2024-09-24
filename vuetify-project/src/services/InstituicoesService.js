import axios from "axios";

export async function fetchInstituicoes() {
  try {
    let token = localStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/instituicaoEnsino",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar instituições:", error);
    return null;
  }
}

export async function fetchInstituicaoById(id) {
  try {
    let token = localStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/instituicaoEnsino/" + id,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar instituição:", error);
    return null;
  }
}