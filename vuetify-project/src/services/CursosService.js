import axios from "axios";

export async function fetchCursos(pagina, itensPorPagina) {
  try {
      const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/curso-homologado`,
          {
              params: {
                  page: pagina,
                  limit: itensPorPagina
              }
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

export async function fetchCursoPorId(cursoId) {
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/curso-homologado/" + cursoId);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar curso:", error);
    return null;
  }
}