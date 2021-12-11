const {
    Candidato,
    SolicitacoesMatricula,
    Inscricao,    
    Turma,
    Curso,
  } = require('../database/models');

  const bcrypt = require('bcrypt');

  const {
    checkEmptyFields,
  } = require('../functions/funcs');

module.exports = {
  async handleCreate(req, res){
    try {
      const {
        candidatoId,
        turmaId,
        unidadeId,   
        inscricaoId,    
      } = req.body;        

      const data = {
        candidatoId,
        turmaId,
        unidadeId,
        inscricaoId,
        status: 'CONTATO PENDENTE'
      }

      const matricula = await SolicitacoesMatricula.create(data);

      const inscricao = await Inscricao.findOne({
        where: { id: inscricaoId }
      });

      inscricao.status = 'MATRÍCULA SOLICITADA';

      await inscricao.save();
      
      return res.status(200).json(matricula);

    } catch (err) {
      console.log(err);
      return res.status(400).json(err)
    }
  },

  async handleFindAll(req, res) {
    try {

      const { turmaId, status } = req.query;

      let whereCond = {}

      if (turmaId) {
        whereCond.turmaId = turmaId;
      }

      if (status) {
        whereCond.status = status;
      }

      const matricula = await SolicitacoesMatricula.findAll({
        where: whereCond,
        include: [Candidato, Inscricao, { model: Turma, include: [Curso]}]
      });
      return res.status(200).send(matricula);
    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
  async handleChangeStatus(req, res) {
    try {
      const { id, status } = req.body;

      const matricula = await SolicitacoesMatricula.findOne({
        where: {
          id,
        }
      });   

      if(matricula === null || !matricula) {
        return res.status(404).send({ mensagem: "Matrícula não encontrada!"});
      }    

      matricula.status = status;

      await matricula.save();

      return res.status(200).send(matricula);

    } catch (err) {
      console.log(err);
      return res.status(400).json(err);
    }
  },
}