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