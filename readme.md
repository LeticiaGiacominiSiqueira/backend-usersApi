# API de Usuários - Backend

Este projeto é uma API simples construída com Node.js e Express para gerenciar usuários.

## Estrutura do Projeto
- `index.js`: Código principal da API Express.
- `package.json`: Dependências do projeto.
- `Dockerfile`: Configuração para criar a imagem Docker da API.
- `docker-compose.yml`: (Opcional) Orquestração de containers.

## Como rodar o projeto com Docker

### 1. Pré-requisitos
- Docker Desktop instalado e rodando no Windows.

### 2. Build da imagem
Abra o terminal na pasta `backend` e execute:

```powershell
docker build -t prova-api .
```

### 3. Rodar o container

```powershell
docker run -d -p 3000:3000 --name prova-api-container prova-api
```

- A API estará disponível em: http://localhost:3000

### 4. Parar e remover o container

```powershell
docker stop prova-api-container

docker rm prova-api-container
```

## Usando Docker Compose (opcional)
Se preferir, utilize o `docker-compose.yml`:

```powershell
docker-compose up -d
```

Para parar:
```powershell
docker-compose down
```

---

Qualquer dúvida, consulte o código ou abra uma issue.