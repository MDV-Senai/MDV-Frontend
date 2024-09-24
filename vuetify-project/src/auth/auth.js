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
    localStorage.setItem("authToken", token);

    return token;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    return null;
  }
}