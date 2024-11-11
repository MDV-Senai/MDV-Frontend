import axios from "axios";

export async function fetchEstagiarios(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/aluno`,
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
    console.error("Erro ao buscar alunos:", error);
    return null;
  }
}

export async function cadastrarEstagiario(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/aluno";

    console.log('Dados enviados:', data.file);
    console.log('URL:', url);
    const token = sessionStorage.getItem('authToken');

    const req = await axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    });
    return req;
  } catch (error) {
    console.log('Erro ao cadastrar estagiário: ' + error);
    return null;
  }
}

export async function fetchEstagiarioPorId(estgId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/aluno/" + estgId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar estagiario:", error);
    return null;
  }
}

export async function atualizarEstagiarioPorId(estgId, data) {
  try {
    const removeMascara = (valor) => (valor ? valor.replace(/\D/g, "") : "");

    data.documento = removeMascara(data.cpf);
    data.fone = removeMascara(data.rg);
    data.celular = removeMascara(data.cep);
    data.cep = removeMascara(data.cep);
    data.dataNascimento = new Date(data.dataNascimento).toISOString();
    data.dataFimApolice = new Date(data.dataFimApolice).toISOString();

    const token = sessionStorage.getItem('authToken');
    const url = import.meta.env.VITE_BACKEND_URL + "/aluno/" + estgId;
    const response = await axios.patch(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar estagiario:", error);
    return null;
  }
}

