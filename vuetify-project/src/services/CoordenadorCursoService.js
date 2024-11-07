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
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/coordenador-instituicao-ensino`,
            {
                params: {
                    page: pagina,
                    limit: itensPorPagina
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar coordenador:", error);
        return null;
    }
}