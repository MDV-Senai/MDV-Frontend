import axios from "axios";

export async function cadastrarAdmin(data) {
    try {
      const url = import.meta.env.VITE_BACKEND_URL + "/admin";
  
      const token = sessionStorage.getItem("authToken");
  
      const req = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      return req;
    } catch (error) {
      console.log('Erro ao cadastrar Instuição de Ensino: '+error);
      return null;
    }
  }