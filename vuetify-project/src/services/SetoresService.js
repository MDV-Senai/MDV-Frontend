import axios from "axios";

export async function fetchSetores() {
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/setor",);

    return response.data.data;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}

export async function fetchSetoresPorId(setorId) {
  try {
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/setor/" + setorId,);

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar setores:", error);
    return null;
  }
}

export async function updateSetor(setorId, setor) {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/setor/${setorId}`;

    const response = await axios.patch(url, setor);

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
    const req = await axios.post(url, data);
    return req;
  } catch (error) {
    console.log('Erro ao cadastrar Setor: ' + error);
    return null;
  }
}

export async function cadastrarAtividade(data) {
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL}/atividade`;
    const resultados = [];

    for (const nome of data.nomeAtividade) {
      const atividade = {
        nome: nome,
        setorId: data.setorId,
      };

      const response = await axios.post(url, atividade);
      resultados.push(response.data);
    }

    return resultados;
  } catch (error) {
    console.log('Erro ao cadastrar atividade: ', error);
    return null;
  }
}
