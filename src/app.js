const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json());

//Conexão com o banco de dados
mongoose.connect('mongodb://localhost:27017/products', {useNewUrlParser: true}).then(() =>{console.log('Tudo Certo')}).catch(() => {console.log('Nada bom')})

app.use(cors());
app.use(routes);
app.listen(3301, () => {console.log("Servidor Iniciado!")});