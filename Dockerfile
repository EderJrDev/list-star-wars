# Use uma imagem base do Node.js
FROM node:latest

# Defina o diretório de trabalho no contêiner
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código do projeto para o diretório de trabalho
COPY . .

# Compile o projeto
RUN npm run build

# Instale o servidor HTTP para servir o conteúdo estático
RUN npm install -g serve

# Defina a porta que o contêiner vai expor
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["serve", "-s", "build"]
