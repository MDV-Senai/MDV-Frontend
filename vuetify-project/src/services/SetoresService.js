import axios from "axios";

export async function fetchSetores(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/setor`,
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
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}

export async function fetchSetoresPorId(setorId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/setor/" + setorId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}

export async function updateSetor(setorId, setor) {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/setor/${setorId}`;
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(url, setor, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar setor:", error);
    return null;
  }
}

export async function cadastrarSetor(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/setor";
    console.log(data);
    const token = sessionStorage.getItem('authToken');
    const req = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Setor: ' + error);
    return null;
  }
}

export async function cadastrarAtividade(data) {
  try {
    const token = sessionStorage.getItem('authToken');
    const url = `${import.meta.env.VITE_BACKEND_URL}/atividade`;
    const resultados = [];

    for (const nome of data.nomeAtividade) {
      const atividade = {
        nome: nome,
        setorId: data.setorId,
      };

      const response = await axios.post(url, atividade, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      resultados.push(response.data);
    }

    return resultados;
  } catch (error) {
    console.log('Erro ao cadastrar atividade: ', error);
    return null;
  }
}