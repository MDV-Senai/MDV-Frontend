import axios from "axios";

export async function cadastrarOrganizacao(data) {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente";

        let token = sessionStorage.getItem("authToken");

        const req = await axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return req;
    } catch (error) {
        console.log('Erro ao cadastrar Organização: ' + error);
        return null;
    }
}

export async function fetchOrganizacaoConcedente() {
    try {

        const response = await axios.get(
            import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente",
            {
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
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente/" + instId);

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar organização:", error);
        return null;
    }
}

export async function updateConcedente(instId, organizacaoData) {
    try {
        const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/organizacao-concedente/${instId}`,
            organizacaoData
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar organização:", error);
        return null;
    }
}
