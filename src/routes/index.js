const express = require('express');
const routes = express.Router();

const Administrador = require('./Administrador');

const Unidade = require('./Unidade');
const Curso = require('./Curso');
const Turma = require('./Turma');
const Login = require('./Login');
const Candidato = require('./Candidato')
const Inscricao = require('./Inscricao')
const Matricula = require('./Matricula')
const route = require('./Inscricao')
const Actions = require('./Actions');

routes.use(Administrador);

routes.use(Unidade);
routes.use(Curso);
routes.use(Turma)
routes.use(Login)
routes.use(Candidato)
routes.use(Inscricao)
routes.use(Matricula)
routes.use(Actions)


module.exports = routes;