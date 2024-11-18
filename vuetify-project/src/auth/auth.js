import axios from "axios";

export async function login(email, password) {
  try {
    const loginData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      import.meta.env.VITE_BACKEND_URL + "/auth/login",
      loginData
    );

    const token = response.data.token;
    const userRole = response.data.user.role;
    const currentUserId = response.data.user.id;
    const instituicaoEnsinoId = response.data.user.instituicaoEnsinoId;
    const username = response.data.user.name;
    const userEmail = response.data.user.userEmail;

    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('userRole', userRole);
    sessionStorage.setItem('currentUserId', currentUserId);
    sessionStorage.setItem('instituicaoEnsinoId', instituicaoEnsinoId)
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('userEmail', userEmail)

    return { token, userRole };
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}
