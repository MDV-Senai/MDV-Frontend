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
Guia oficial para instalação e configuração do Docker Desktop no Windows.
<br>
[Docker Desktop para Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
<br>
Guia oficial para instalar o Docker Engine em distribuições Linux baseadas no Ubuntu.
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
docker-compose -f docker-compose.dev.yml up --build
```
3. Assim que subir o container você irá receber a seguinte mensagem:
```
front-1  |   VITE v5.4.11  ready in 803 ms
front-1  |
front-1  |   ➜  Local:   http://localhost:5173/
front-1  |   ➜  Network: http://172.18.0.2:5173/
front-1  |   ➜  press h + enter to show help
```
4. Cole a `URL Local` em seu navegador
### Atenção
5. Assim que colar a URL mencionada no item 4 você será levado para a tela de login.
  - Só será possivel fazer login se o projeto backend estiver em execução
  - Usuário para teste será disponibilizado no projeto backend

## Tecnologias Usadas

* [Vue](https://vuejs.org) - Framework
* [Vuetify](https://vuetifyjs.com) - Design system
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de Programação
* [Yarn](https://yarnpkg.com) - Gerenciador de Pacote
* [Docker](https://www.docker.com) - Gerenciador de Containers

## Versão

Nós usamos [GitHub](https://github.com) para controle de versão. 

## Licença

Este projeto está sob a licença - veja o arquivo [LICENSE.md](https://github.com/MDV-Senai/MDV-Frontend/blob/Readme/LICENSE) para detalhes.
