import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";
//Conecta o banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

//Função assincrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
    //Obtém o banco de dados e a coleção de posts
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    //Encontra e retorna todos os posts com um array
    return colecao.find().toArray();
};

export async function criarPost(novoPost) {
      const db = conexao.db('imersao-instabytes');
      const colecao = db.collection('posts');
      return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})
}