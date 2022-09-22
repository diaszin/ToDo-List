const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

var id = 1 
var tarefas  = [{ // Objeto das tarefas
    'nome': 'Fazer Tarefa',
    'feito': false,
    'id': id
}]

// Pacotes do funcionamento da API
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())

app.get('/', (req,res)=>{
    res.sendFile('public/index.html') // Enviado o arquivo principal do HTML
})

app.post("/cadastrar", function(req,res){
    var tarefa = String(req.body.tarefa) // Pegando o valor do Form
    id++ // Incrementando o ID
    tarefas.push({'nome': tarefa, 'feito': false, 'id': id}) // Adicionando a taerfa e seus atributos no objeto
    res.status(201)
    res.redirect("/")
})


app.get('/tarefas', (req, res)=>{{
    res.setHeader('Content-Type', "application/json")
    res.status(201)
    res.json(tarefas) // Enviando o objeto pela requisição
}})

app.listen(8000, function(){
    console.log("Servidor Rodando em http://127.0.0.1:8000")
})