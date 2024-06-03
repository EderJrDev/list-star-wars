
# List Characters Star Wars 🚀

Este repositório contém duas aplicações React criada com `create-react-app`. 

### ✨ Informações adicionais

*Consume a API: https://swapi.dev/api*

Bibliotecas utilizadas e recursos desenvolvidos:

1. `Webpack e Module Federation` - Para trabalhar com a construção do projeto, criando o Front remoto e acoplando ao projeto principal
2. `react-router-dom` - Para trabalhar com rotas do SPA
3. `axios` - Para trabalhar com requisições de dados
4. `jest` - Teste unitários para garantir o funcionamento do código
5. `Ant Design` - como framework de criação dos componentes visuais
6. `Typescript` - Verificação de tipos estática, autocompletar e detecção de erros durante o processo de desenvolvimento
6. `Docker` - Ferramenta para simular a construção de um ambiente real de DEV
   

## 👉 Desafio

 Utilizando a API: https://swapi.dev/ e ReactJS 17 / TypeScript 

- Construa uma interface que liste os personagens;
- b. A tela, além da grid, deverá ter um filtro que permita filtrar pelo nome dos mesmos;
- O grid deverá ser paginado, exibindo 10 registros por vez, e botões de navegação entre os mesmos;
- Deverá ser utilizado o Ant Design como framework de criação dos componentes visuais, incluindo responsividade;
- . A aplicação deve ser conteinerizada usando Docker, simulando a construção de um ambiente real de DEV;
- Trabalhar com componentização;
- A implementação deverá vir acompanhada da escrita de testes unitários;


---


<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/2b1eed24-260e-494b-8dea-89a7770a2b58" width="390" height="283">
<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/b0174a56-8bbe-4289-8aff-d5e1bf081311" width="390" height="283"> 

## [Figma - Wireframe](https://www.figma.com/community/file/1306985064619527096/movies-microfrontend)

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
   cd spa
   ```

3. Instale as dependências do projeto executando:

   ```bash
   npm install
   ```
depois:
   ```bash
   npm start
   ```

## 💻 Estrutura

O projeto header-app consiste em uma aplicação react somente com o menu, na configuração do Webpack do projeto, a aplicação é externalizada em `http://localhost:3001/remoteEntry.js`

<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/22e008ac-f397-48a5-970c-0d4de2005e64" width="290" height="267"> 

No projeto kenlo-test-movies, onde contém o container da aplicação (sem o menu), é feita a captura da aplicação remota.

OBS: O start simultâneo serve para facilitar a execução local, acesse também o link da [Vercel](https://app-movies-microfrontend.vercel.app/) 


✨ Divirta-se navegando entre os filmes 







