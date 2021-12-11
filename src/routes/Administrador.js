const express = require('express');
const route = express.Router();

const Controller = require('../controllers/Administrador');

route.post('/administrador', Controller.handleCreate);
route.get('/administrador', Controller.handleFindAll);
route.get('/administrador/:id', Controller.handleFindOne);

module.exports = route;