import axios from "axios";

export async function fetchCursos() {
  try {
    const response = await axios.get(
      "http://localhost:3000/items"
    );
    return response.data.curso;
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null;
  }
}

export async function cadastrarCurso(data) {
  try {
    const url = import.meta.env.VITE_BACKEND_URL + "/curso";
  
    const token = sessionStorage.getItem('authToken');
    console.log(url);
    

    console.log(data);
    const req = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}` 
      }
    });
    console.log(req)
  } catch (error) {
    
  }
}