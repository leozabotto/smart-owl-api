const express = require('express');
const route = express.Router();

const Turma = require('../controllers/Turma');
const Inscricao = require('../controllers/Inscricao');
const Matricula = require('../controllers/Matricula');

route.post('/action/change_status_turma', Turma.handleChangeStatus);
route.post('/action/change_status_inscricao', Inscricao.handleChangeStatus);
route.post('/action/change_status_matricula', Matricula.handleChangeStatus);
route.post('/action/unlock_inscricoes', Inscricao.handleUnlock);


module.exports = route;