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

export async function cadastrarContratos(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/contrato";

    const token = sessionStorage.getItem('authToken');

    console.log(data);
    const req = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return req;
  } catch (error) {
    console.log('Erro ao cadastrar contrato: ' + error);
  }
}