import axios from "axios";

export async function fetchInstituicoes(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino`,
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
    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar instituições:", error);
    return null;
  }
}

export async function fetchInstituicoesPorId(instId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/instituicao-ensino/" + instId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar instituicao:", error);
    return null;
  }
}

export async function cadastrarInstituicaoEnsino(data) {
  let req;

  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/instituicao-ensino";
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
        console.log('Erro desconhecido:', error);
    }
  }

  return req;
}

export async function updateInstituicaoEnsino(instId, instituicaoData) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instId}`,
      instituicaoData,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar instituicao:", error);
    return null;
  }
}

export async function homologarCursoNaInstituicaoEnsino(instituicaoId, cursoId) {
  let response = null;

  try {
    const token = sessionStorage.getItem('authToken');
    response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instituicaoId}/cursos-homologados/${cursoId}`, {},
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar instituição:", error);

    if (error.response) {
      return error.response.data;
    }

    return null;
  }
}

export async function desfazerHomologacaoCurso(instituicaoId, cursoId) {
  try {
    const token = sessionStorage.getItem('authToken');
    console.log(token);
    console.log(`${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instituicaoId}/cursos-homologados/${cursoId}`)
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/instituicao-ensino/${instituicaoId}/cursos-homologados/${cursoId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar instituicao:", error);
    return null;
  }
}
desfazerHomologacaoCurso
