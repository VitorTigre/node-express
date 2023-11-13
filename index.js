const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join (__dirname, "templates")

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post('/cadastrar/salvar', (requisicao,resposta) => {
    const nome = requisicao.body.nome
    const email = <requisicao className="body email"></requisicao>
})

app.get('/cadastrar', (requisicao, resposta) => {
    resposta.sendfile(`${caminhoBase}/cadastro.html`)
})


app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuário ${id}`)

    resposta.sendfile(`${caminhoBase}/usuarios.html`)
})

app.get('/', (requisicao, resposta) => {
    resposta.sendfile(`${caminhoBase}/index.html`)
})

app.listen(3000, () =>{
    console.log ("Servidor rodando na rota 3000!")
})