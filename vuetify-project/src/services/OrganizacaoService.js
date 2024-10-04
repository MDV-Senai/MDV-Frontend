export async function cadastrarOrganizacao(data) {
    try {
        const url = import.meta.env.VITE_BACKEND_URL + "/instituicaoContratante";

        const token = sessionStorage.getItem("authToken");

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