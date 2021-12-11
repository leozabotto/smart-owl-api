require('dotenv').config();

const path = require('path');

const { Op } = require('sequelize');

const {
  SolicitacoesMatricula,
  Candidato,
  Curso,
  Turma,
  Unidade,
  Inscricao
} = require('../database/models.js');

const ejs = require('ejs');
const puppeteer = require('puppeteer');

const moment = require('moment')

function getEmissionDate() {
  const date = new Date();
  
  const day = String(date.getDate()).padStart(2,'0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

module.exports = {

  async handleReport(req, res) {
    try {
      const {
        matriculaId,
        reportType
      } = req.body;

      const browser = await puppeteer.launch({
        args: ['--no-sandbox','--disable-setuid-sandbox']
      });

      const page = await browser.newPage();

      let pdf = {};

      switch(reportType) {
        case "ficha_candidato":
          await page.goto(`http://localhost:${process.env.PORT}/template/ficha_candidato?matriculaId=${matriculaId}`, {
            waitUntil: 'networkidle0'
          });
          
          pdf = await page.pdf({
            printBackground: true,
            format: 'Letter',
            margin: {
              top: "40px",
              bottom: "40px",
              left: "40px",
              right: "40px"
            }
          });
    
          await browser.close();
          
          res.contentType("application/pdf");
          return res.status(200).send(pdf);               
        default:
          return res.status(400).json({ message: "Tipo de relatório inválido!" });
      }
      
    } catch (err) {
      console.log(err.stack);
      return res.status(400).json({ message: err.message });
    }

  },

  async fichaCandidatoTemplate(req, res) {
    const filePath = path.join(__dirname,'..', 'templates', 'ficha_candidato.html');
    const emissionDate = getEmissionDate();

    const {
      matriculaId
    } = req.query;
  
    try {

      const matricula = await SolicitacoesMatricula.findOne({
        where: {
          id: matriculaId
        }, 
        include: [Candidato, { model: Turma, include: [Curso]}, Unidade, Inscricao]      
      })  
    
      ejs.renderFile(filePath, {
        matricula,
        emissionDate,
        nascimento: moment(matricula.candidato.nascimento).format('DD/MM/YYYY')
      }, (err, data) => {
        if(err) {
          console.log(err)
          return res.status(400).send({ message: "Falha ao ler o template."})
        }
        return res.send(data);
      });
    } catch (err) {
      console.log(err.stack);
      return res.status(400).json({ err: err.message });
    }
  },

}