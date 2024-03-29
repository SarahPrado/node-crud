import fastify from "fastify";
import { DataBaseTemp } from "./db-list.js";

const server = fastify()

const HOST = 'localhost' //ou 127.0.0.1
const PORT = 3333

const db = new DataBaseTemp()

server.get('/',async(req, res) => {
    res.send('Servidor no ar!')
})

server.get('/produtos', (req, res) => {
    let produtos = db.listarTodos()
    return res.status(200).send({
        size : produtos.length,
        data: produtos
    })
})

server.get('/produto/:id', (req, res) => {
    let idParam = req.params.id
    let produto = db.listarPorId(idParam)
    return res.status(200).send(produto)
})


server.post('/produto', (req, res) => {
    let produto = {
        nome: "Nike",
        modelo: "Air Force",
        preco: 1289
    }

    db.adicionar(produto)
    res.status(201).send(produto)
})

server.put('/produto/:id', (req, res) => {
    // const idParam = req.params.id abaixo usando a desestruturação
    const { id } = req.params;
    console.log(req.body);

    //aqui se criou o req.body para o servidor ler o objeto junto na requisição do routes.http
    let produtoDB = db.atualizar(id, req.body)
    return res.status(200).send(produtoDB)
})

server.delete('/produto/:id', (req, res) => {
    const { id } = req.params;

    const produto = db.excluir(id)

    return res.status(200).send(produto)
})


server.listen({
    port: PORT,
    host: HOST
})
.then(() => console.log(`Servidor rodando em http://${HOST}:${PORT}`))
.catch(err => console.log(`Erro ao subir o servidor:`, err))