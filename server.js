import express from "express";

const posts = [
    {   id: 1,
        descricao: "Uma foto teste",
        imgUrl: "https://placecats.com/millie/300/150"
    },
    {   id: 2,
        descricao: "Gato fazendo yoga",
        imgUrl: "https://placekitten.com/400/300"
    },
    {   id: 3,
        descricao: "Cachorro sorrindo",
        imgUrl: "https://placepuppy.com/200/200" 
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    });
};

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200) .json(posts[index]);
});