import axios from "axios";

export async function cadastrarCoordenadorCurso(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/coordenador-instituicao-ensino";

    const token = sessionStorage.getItem('authToken');

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

export async function fetchCoordenadorCurso(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/coordenador-instituicao-ensino`,
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
    console.error("Erro ao buscar coordenador:", error);
    return null;
  }
}

export async function fetchCoordenadorPorId(coordId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/coordenador-instituicao-ensino/" + coordId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }

    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar coordenador:", error);
    return null;
  }
}

export async function updateCoordenador(coordId, coordData) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/coordenador-instituicao-ensino/${coordId}`,
      coordData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar coordenador:", error);
    return null;
  }
}