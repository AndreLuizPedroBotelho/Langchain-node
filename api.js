import * as dotenv from "dotenv";
import express from "express";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import ora from "ora";
import chalk from "chalk";

import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const model = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash",
    apiKey: process.env.GOOGLE_API_KEY,
    streaming: true
});

app.post("/ask", async (req, res) => {
    const message = req.body.message;
    if (!message || !message.trim()) {
        return res.status(400).json({ erro: "Pergunta vazia" });
    }
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    try {
        const stream = await model.stream(message);

        for await (const chunk of stream) {
            res.write(chunk.content);
        }

        res.end();
    } catch (err) {
        console.error("Erro no stream:", err);
        // aqui já pode ter mandado dados → NÃO usar res.json
        res.write("\n[ERRO] Ocorreu um problema no servidor.\n");
        res.end();
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.green(`🚀 API rodando em http://localhost:${PORT}`));
});
