const express = require('express');
const route = express.Router();

const Controller = require('../controllers/Matricula');

route.post('/matricula', Controller.handleCreate);
route.get('/matricula', Controller.handleFindAll);

module.exports = route;