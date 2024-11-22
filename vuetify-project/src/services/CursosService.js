import axios from "axios";

export async function fetchCursos(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/curso-homologado`,
      {
        params: {
          page: pagina,
          limit: itensPorPagina
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}

export async function fetchCursosPorInstuicaoId(instId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
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
  let req;

  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/curso-homologado";
    const token = sessionStorage.getItem("authToken");

    req = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
        console.error('Erro desconhecido:', error);
    }
  }

  return req;
}

export async function atualizarCursoPorId(cursoId, data) {
  try {
    const token = sessionStorage.getItem('authToken');
    const url = `${import.meta.env.VITE_BACKEND_URL}/curso-homologado/${cursoId}`;
    const req = await axios.patch(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return req.data;
  } catch (error) {
    console.error('Erro ao atualizar curso: ' + error);
    throw error;
  }
}

export async function fetchCursoPorId(cursoId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/curso-homologado/" + cursoId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar curso:", error);
    return null;
  }
}
