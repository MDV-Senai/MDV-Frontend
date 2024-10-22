import axios from "axios";

export async function cadastrarOrganizacao(data) {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/organizacao-concedente";

        const req = await axios.post(url, data, {
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

        return response.data;
    } catch (error) {
        console.error("Erro ao buscar organizações:", error);
        return null;
    }
}