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

export async function fetchCursosHomologados() {
  try {
    let token = sessionStorage.getItem("authToken");
    
    const response = await axios.get(
      import.meta.env.VITE_BACKEND_URL + "/curso-homologado?page=1&limit=500",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}

export async function cadastrarCurso(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/curso-homologado";

    console.log(data);
    const req = await axios.post(url, data);

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar curso: ' + error);
  }
}

export async function atualizarCursoPorId(cursoId, data) {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/curso-homologado/${cursoId}`;
    const req = await axios.patch(url, data);

    return req.data;
  } catch (error) {
    console.log('Erro ao atualizar curso: ' + error);
    throw error;
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
