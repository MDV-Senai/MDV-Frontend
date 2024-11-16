import axios from "axios";

export async function fetchContratos() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.contrato;
  } catch (error) {
    console.error("Erro ao buscar contratos:", error);
    return null;
  }
}

export async function cadastrarContratos(formData) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/contrato";

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const token = sessionStorage.getItem('authToken');

    const req = await axios.post(url, formData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data', // Define o tipo como multipart
      },
    });

    return req;
  } catch (error) {
    // Verifica se é um erro de resposta do Axios
    if (error.response) {
      console.error('Erro ao cadastrar contrato:');
      console.error('Status:', error.response.status); // Código HTTP
      console.error('Dados:', error.response.data); // Corpo da resposta
      console.error('Headers:', error.response.headers); // Cabeçalhos da resposta
    } else if (error.request) {
      // Se a requisição foi feita, mas não houve resposta
      console.error('Nenhuma resposta recebida do backend:', error.request);
    } else {
      // Erros ao configurar a requisição
      console.error('Erro na configuração da requisição:', error.message);
    }

    throw error; // Propaga o erro para tratamento em outro lugar
  }
}
