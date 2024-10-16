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