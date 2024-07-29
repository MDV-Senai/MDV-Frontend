import axios from "axios";

export const buscaCep = async (cep) => {
    const cepFormat = cep.replace("-", "");

    if (cepFormat.length !== 8) return false;

    try {
        const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
        );
        const address = response.data;

        return address;

    } catch (error) {
        console.error("Erro ao consultar CEP:", error);
    }
}