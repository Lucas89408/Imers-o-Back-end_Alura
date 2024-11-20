import express from "express"
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    //Habilita o parser JSON para lidar com a requisições com o corpo JSON
    app.use(express.json());
    //Define uma rota para lidar com requisições GET para /posts
app.get("/posts", listarPosts );
}

export default routes;
