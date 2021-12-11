const { Sequelize } = require('sequelize');
const connection = require('./connection');

const Administrador = connection.define('administrador', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  paranoid: true,
});

const PermissoesAdmin = connection.define('permissoes_administrador', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  cadastros: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  processo_seletivo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  super_usuario: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  }, 
}, {
  freezeTableName: true,
});

const Unidade = connection.define('unidade', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rua: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  numero_endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  estado: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cidade: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ativo: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: true
  }
}, {
  freezeTableName: true,
  paranoid: true,
});

const Curso = connection.define('curso', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  ch: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idade_min: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idade_max: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  ativo: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
}, {
  freezeTableName: true,
  paranoid: true,
});

const Turma = connection.define('turma', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  modalidade: {
    type: Sequelize.STRING,
    allowNull: false
  },
  qtd_vagas: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hora_inicio: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hora_termino: {
    type: Sequelize.STRING,
    allowNull: false
  },
  periodo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  pcd: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  data_prova: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  hora_prova: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  data_encerramento: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  data_resultado: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  }
}, {
  freezeTableName: true,
  paranoid: true,
});

const Candidato = connection.define('candidato', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  nome: {
    type:Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: Sequelize.STRING,
    allowNull:false
  },
  genero: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nascimento: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull:false,
    unique: true,
  },
  rg: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cor_raca: {
    type: Sequelize.STRING,
    allowNull: false
  },
  nascimento: {
    type: Sequelize.STRING,
    allowNull: true
  },
  pcd: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  nome_mae: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nome_pai: {
    type: Sequelize.STRING,
    allowNull: true
  },
  celular: {
    type: Sequelize.STRING,
    allowNull: true
  },
  telefone_residencial: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cep: {
    type: Sequelize.STRING,
    allowNull: true
  },
  logradouro: {
    type: Sequelize.STRING,
    allowNull: true
  },
  numero: {
    type: Sequelize.STRING,
    allowNull: true
  },
  complemento: {
    type: Sequelize.STRING,
    allowNull: true
  },
  bairro: {
    type: Sequelize.STRING,
    allowNull: true
  },
  municipio: {
    type: Sequelize.STRING,
    allowNull: true
  },
  uf: {
    type: Sequelize.STRING,
    allowNull: true
  },
  escolaridade: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{
  freezeTableName: true,
  paranoid: true
})

const Inscricao = connection.define('inscricao', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'PROVA PENDENTE'
  },
  encerrada: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { initialAutoIncrement: 202101, freezeTableName: true })

const SolicitacoesMatricula = connection.define('solicitacoes_matricula', {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});

Administrador.hasOne(PermissoesAdmin);
PermissoesAdmin.belongsTo(Administrador);

Unidade.hasMany(Turma);
Turma.belongsTo(Unidade);

Turma.belongsTo(Curso);
Curso.hasMany(Turma);

Inscricao.belongsTo(Turma);
Inscricao.belongsTo(Candidato);
Candidato.hasMany(Inscricao);
Turma.hasMany(Inscricao);

SolicitacoesMatricula.belongsTo(Candidato)
SolicitacoesMatricula.belongsTo(Turma)
SolicitacoesMatricula.belongsTo(Unidade)
SolicitacoesMatricula.belongsTo(Inscricao)

Turma.hasMany(SolicitacoesMatricula)
Unidade.hasMany(SolicitacoesMatricula)
Candidato.hasMany(SolicitacoesMatricula)
Inscricao.hasOne(SolicitacoesMatricula)

module.exports = {
  Administrador,
  PermissoesAdmin,
  Curso,
  Turma,
  Unidade,
  Candidato,
  Inscricao,
  SolicitacoesMatricula
}

/*async function sync () {
  await connection.sync({ alter: true })
}
sync()*/
