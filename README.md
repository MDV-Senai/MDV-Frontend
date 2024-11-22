# MDV-Frontend

Este é o projeto frontend desenvolvido para a Maternidade Darcy Vargas. Seu principal objetivo é possibilitar a interação do usuário com o backend, isso inclui fazer cadastros, consultas e edições.

# Índice

1. [Pré-requisitos](#Pré-requisitos)
   - 1.1. [Docker](#Docker)
2. [Compilação](#Compilação)
3. [Tecnologias Usadas](#Tecnologias-Usadas)
4. [Versão](#Versão)
5. [Licença](#Licença)
#
## Pré-requisitos

### Docker
[Docker Desktop para Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
<br>
[Docker Engine para Linux](https://docs.docker.com/engine/install/ubuntu/)

## Compilação

Com o `Docker` rodando, siga os seguintes passos para executar o projeto:

1. Na pasta `vuetify-project` crie um arquivo chamado `.env` com o seguinte conteúdo:
```
VITE_BACKEND_URL = "http://localhost:3000"
```
2. Na pasta `vuetify-project` abra o cmd e execute o seguinte comando:
```
docker-compose -f docker-compose.prod.yml up --build
```

## Tecnologias Usadas

* [Vue](https://vuejs.org) - Framework
* [Vuetify](https://vuetifyjs.com) - Design system
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de Programação
* [Yarn](https://yarnpkg.com) - Gerenciador de Pacote
* [Docker](https://www.docker.com) - Gerenciador de Containers

## 📌 Versão

Nós usamos [GitHub](https://github.com) para controle de versão. 

## 📄 Licença

Este projeto está sob a licença (sua licença) - veja o arquivo [LICENSE.md](https://github.com/usuario/projeto/licenca) para detalhes.
