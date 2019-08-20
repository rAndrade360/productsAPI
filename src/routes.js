const express = require('express');
const ProductControler = require('./controllers/ProductController');
const routes = express.Router();

routes.get('/listar', ProductControler.index);
routes.post('/cadastrar', ProductControler.store);
routes.get('/listar/:id', ProductControler.show);
routes.put('/update/:id', ProductControler.update);
routes.delete('/delete/:id', ProductControler.delete);

module.exports = routes;