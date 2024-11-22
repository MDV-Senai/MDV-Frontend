import axios from "axios";

export async function cadastrarOrganizacao(data) {
  let req;

  try {
      const url = import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente";
      let token = sessionStorage.getItem("authToken");

      req = await axios.post(url, data, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
      });
  } catch (error) {
      if (error.response) {
          return error.response.data;
      } else {
          console.error('Erro desconhecido:', error);
      }
  }

  return req;
}


export async function fetchOrganizacaoConcedente(pagina, itensPorPagina) {
    try {
        let token = sessionStorage.getItem("authToken");
        const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/organizacao-concedente`,
            {
                params: {
                    page: pagina,
                    limit: itensPorPagina
                },
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );
        return response.data.data;
    } catch (error) {
        console.error("Erro ao buscar organizações:", error);
        return null;
    }
}

export async function fetchConcedentePorId(instId) {
    try {
        let token = sessionStorage.getItem("authToken");
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente/" + instId, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar organização:", error);
        return null;
    }
}

export async function updateConcedente(instId, organizacaoData) {
    try {
        let token = sessionStorage.getItem("authToken");
        const response = await axios.patch(
            `${import.meta.env.VITE_BACKEND_URL}/organizacao-concedente/${instId}`,
            organizacaoData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar organização:", error);
        return null;
    }
}
