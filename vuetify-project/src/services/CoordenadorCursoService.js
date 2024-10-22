export async function cadastrarCoordenadorCurso(data) {
    try {
      const url = import.meta.env.VITE_BACKEND_URL + "/coordenador";
  
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