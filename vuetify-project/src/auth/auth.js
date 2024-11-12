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

    sessionStorage.setItem('authToken', token);
    sessionStorage.setItem('userRole', userRole);

    return { token, userRole }; 
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}
