const express = require('express');
const route = express.Router();

const Controller = require('../controllers/Relatorio');

route.post('/relatorio/', Controller.handleReport);
route.get('/template/ficha_candidato', Controller.fichaCandidatoTemplate);


module.exports = route;