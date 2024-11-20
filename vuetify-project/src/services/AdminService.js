import axios from "axios";

export async function cadastrarAdmin(data) {
    try {
      const url = import.meta.env.VITE_BACKEND_URL + "/user";
  
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

export async function fetchUsuarios() {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/user";

    const token = sessionStorage.getItem("authToken");

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (error) {
    console.log('Erro ao cadastrar Instuição de Ensino: '+error);
    return null;
  }
}

export async function fetchUsuarioPorId(userId) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/user/" + userId;

    const token = sessionStorage.getItem("authToken");

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.log('Erro ao cadastrar Instuição de Ensino: '+error);
    return null;
  }
}

export async function updateUsuario(coordId, userData) {
  try {
    if (userData.instituicaoEnsinoId) {
      userData.instituicaoEnsinoId = undefined;
    }
    const token = sessionStorage.getItem('authToken');
    const response = await axios.patch(
      `${import.meta.env.VITE_BACKEND_URL}/user/${coordId}`,
      userData, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar coordenador:", error);
    return null;
  }
}