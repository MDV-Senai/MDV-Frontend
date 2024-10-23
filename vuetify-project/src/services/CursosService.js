import axios from "axios";

export async function fetchCursos() {
  try {
    let token = sessionStorage.getItem("authToken");

    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/curso-homologado",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}

export async function cadastrarCurso(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/curso-homologado";

    const token = sessionStorage.getItem('authToken');
    console.log(url);


    console.log(data);
    const req = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar curso: ' + error);
  }
}