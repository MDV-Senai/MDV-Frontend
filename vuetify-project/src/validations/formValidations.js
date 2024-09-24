export const emailValidation = (email) => {
    const pattern = /^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|\[IPv6:[a-fA-F0-9]{1,4}:(?:[a-fA-F0-9]{1,4}:){1,6}[a-fA-F0-9]{1,4}\]))$/;
    return pattern.test(email) || "E-mail inválido.";
}

export const fullNameValidation = (fullName) => {
    let namesList = fullName.split(" ");
    if (namesList.length < 2) {
        return "Nome completo obrigatório.";
    }
    for (let name of namesList) {
        if (name.length < 3) {
            return "Nome inválido. Minimo de 3 caracteres por nome.";
        }
    }
    return true;
}

export const confirmPasswordValidation = () => {
    // Obtém os elementos de senha e confirmar senha
    const valorSenha = document.getElementById("senha").value;
    const valorConfirmarSenha = document.getElementById("confirmarSenha").value;

    if (valorSenha !== valorConfirmarSenha) {
        return "As senhas não são idênticas.";
    }

    return true;
}

export function fileSizeValidation(file) {
  if (!file) return "Obrigatório.";

  if (file.size > 1024 * 1024 * 2) {
    return "O arquivo selecionado deve ter no máximo 2MB.";
  }

  return true;
}
