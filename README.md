
# List Characters Star Wars 🚀

### ✨ Informações adicionais

*API utilizada: https://swapi.dev/api*

Bibliotecas utilizadas e recursos desenvolvidos:

1. `Create React App` - Criação do projeto ReactJs configurado 
2. `react-router-dom` - Para trabalhar com rotas no ReactJs
3. `axios` - Para trabalhar com requisições de dados
4. `jest` - Testes unitários para garantir o funcionamento do código
5. `Ant Design` - como framework de criação dos componentes visuais
6. `Typescript` - Verificação de tipos estática, autocompletar e detecção de erros durante o processo de desenvolvimento
6. `Docker` - Ferramenta para simular a construção de um ambiente real de DEV
   

## 👉 Desafio

 Utilizando a API: https://swapi.dev/ e ReactJS / TypeScript 

- Construa uma interface que liste os personagens;
- A tela, além da grid, deverá ter um filtro que permita filtrar pelo nome dos mesmos;
- O grid deverá ser paginado, exibindo 10 registros por vez, e botões de navegação entre os mesmos;
- Deverá ser utilizado o Ant Design como framework de criação dos componentes visuais, incluindo responsividade;
- A aplicação deve ser conteinerizada usando Docker, simulando a construção de um ambiente real de DEV;
- A implementação deverá vir acompanhada da escrita de testes unitários;


---
## 📸 Imagens da aplicação

 ![Image 1](https://github.com/EderJrDev/list-star-wars/blob/main/src/static/assets/exemples/star-wars-list.png) 

---
 ![Image 2](https://github.com/EderJrDev/list-star-wars/blob/main/src/static/assets/exemples/one-character.png) 

---
 ![Image 3](https://github.com/EderJrDev/list-star-wars/blob/main/src/static/assets/exemples/filter.png) 
 
## 📸 Mobile

<div align="center">
  <img src="https://github.com/EderJrDev/list-star-wars/blob/main/src/static/assets/exemples/mobile-list.png" width="400" height="900">
  <img src="https://github.com/EderJrDev/list-star-wars/blob/main/src/static/assets/exemples/mobile-character.png" width="400" height="900">
</div>

---
Abaixo estão instruções detalhadas sobre como configurar e executar o projeto.

## ✅ Pré-requisitos

Certifique-se de que você tenha o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados no seu sistema.

## 🎉 Instalação

1. Clone este repositório no seu ambiente local:

   ```bash
   git clone https://github.com/EderJrDev/list-star-wars.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd list-star-wars
   ```

3. Instale as dependências do projeto executando:

   ```bash
   npm install
   ```
depois:
   ```bash
   npm start
   ```

## 💻 Aplicação no Docker

Para visualizar a aplicação conteinerizada usando Docker execute:

```bash
docker build -t list-star-wars .
```

Execute o container

```bash
docker run -p 3000:3000 spa-list-star-wars
```

---

Acesse também o link da [Vercel](https://list-star-wars.vercel.app/) 


✨ Divirta-se navegando, e que a força esteja com você! 🚀







