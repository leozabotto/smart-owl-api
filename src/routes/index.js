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
const Actions = require('./Actions');
const Relatorio = require('./Relatorio');

routes.use(Administrador);

routes.use(Unidade);
routes.use(Curso);
routes.use(Turma)
routes.use(Login)
routes.use(Candidato)
routes.use(Inscricao)
routes.use(Matricula)
routes.use(Actions)
routes.use(Relatorio)


module.exports = routes;