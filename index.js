import * as dotenv from "dotenv";
import readline from "readline";
import ora from "ora";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import chalk from "chalk";

dotenv.config();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GOOGLE_API_KEY
});

function askQuestion() {
    rl.question("\n🤔 Faça sua pergunta: ", async (pergunta) => {
        if (!pergunta.trim()) {
            console.log("❌ Pergunta vazia, tente de novo!");
            return askQuestion();
        }

        const spinner = ora("💡 Pensando...").start();

        try {
            const resposta = await model.invoke(pergunta);
            spinner.succeed("✅ Resposta recebida!");
            console.log("\n" + chalk.yellow("📢 Gemini:") + " " + chalk.green.italic(resposta.content));
        } catch (err) {
            spinner.fail("❌ Erro ao consultar Gemini");
            console.error(err);
        }

        askQuestion(); // continua perguntando
    });
}

console.log("=== Chat com Gemini ===");
askQuestion();