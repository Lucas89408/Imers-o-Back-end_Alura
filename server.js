import express from "express"; //Importa o framework Express para criar aplição web
import routes from "./src/routes/postsRoutes.js";

//Cria uma instância de aplicação Express
const app = express();
routes(app)

//Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});