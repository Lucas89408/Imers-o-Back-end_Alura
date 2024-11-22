import { GoogleGenerativeAI } from "@google/generative-ai";

const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = new genAi.getGenerativeModel({ model: "gemini-1.5-flash" });

export default async function gerarDescricaoComGemini (imageBuffer) {
    const pormpt =
    "Gere uma descrição em português do Brasil para a seguinte imagem";

    try {
        const image = {
            inlineData: {
                data: imageBuffer.toString("base64"),
                mimeType: "image/png",
            },
        };
        const res = await model.generateContent([pormpt, image]);
        return res.response.tex() || "Alt-text não disponível.";
    } catch (erro) {
        console.erro("Erro ao obter alt-text:", erro.messege, erro);
        throw new error("Erro ao obter o alt-text do Gemini.");
    }
}