const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// Iniciando o App
const server = express()
server.use(express.json())
server.use(cors())

// Conectando com DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true})
require('./src/models/Product')

//Rotas
server.use('/api', require('./src/routes'))

server.listen(3001)