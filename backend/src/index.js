const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://root:ebtw834yht@cluster0-art2s.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex :  true ,
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)


//Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros
//Query params: req.query (filtros, ordenação, paginação, ...)
//Route params: request.params (Identificar um rescurso  na alteração ou remoção)
//Body: request.body (Dados para ciração ou alteração de um registro)

//MongoDB (não-relacional)