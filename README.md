# Langchain Node Gemini Chat

Este projeto é um chat de linha de comando utilizando o modelo Gemini da Google via Langchain para Node.js.

## Requisitos
- Node.js 18+
- Uma chave de API do Google Generative AI (Gemini)
- Um arquivo `.env` com a variável `GOOGLE_API_KEY`

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Langchain-node
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave:
   ```env
   GOOGLE_API_KEY=sua-chave-aqui
   ```

## Uso

Execute o chat com:
```bash
node index.js
```

Digite sua pergunta e aguarde a resposta do Gemini.

## Tecnologias
- [Langchain](https://js.langchain.com/)
- [Google Generative AI (Gemini)](https://ai.google.dev/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [ora](https://www.npmjs.com/package/ora)
- [chalk](https://www.npmjs.com/package/chalk)

## Licença
MIT
