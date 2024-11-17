import axios from "axios";

export async function fetchContratos(pagina, itensPorPagina) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/contrato`,
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
    console.log(error);

    let errorMessage;

    const message = error.response?.data?.message;

    if (Array.isArray(message)) {
      errorMessage = message[0];
    } else if (typeof message === "string") {
      errorMessage = message;
    } else {
      errorMessage = error.message || "Erro desconhecido.";
    }

    return errorMessage;
  }
}

export async function fetchContratoPorId(contratoId) {
  try {
    const token = sessionStorage.getItem('authToken');
    const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/contrato/" + contratoId, {
      headers: {
        'Authorization': `Bearer ${token}`
      }

    });

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar contrato:", error);
    return null;
  }
}