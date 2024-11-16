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

export async function cadastrarContratos(contrato) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/contrato";

    const token = sessionStorage.getItem('authToken');

    const req = await axios.post(url, contrato, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return req;
  } catch (error) {
    console.error('Erro ao cadastrar contrato:');
    console.error('Status:', error.response.status);
    console.error('Dados:', error.response.data);
    console.error('Headers:', error.response.headers);
  }
}
