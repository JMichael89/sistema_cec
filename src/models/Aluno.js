const Pai = require('./Pai');
const Mae = require('./Mae');
const db = require('./db')

const Aluno = db.sequelize.define('Aluno', {
  Nome: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  CPF: {
    type: db.Sequelize.STRING(14),
    allowNull: false,
    unique: true
  },
  RG: {
    type: db.Sequelize.STRING(20),
    allowNull: false,
    unique: true
  },
  DataDeNascimento: {
    type: db.Sequelize.DATE,
    allowNull: false
  },
  Situacao: {
    type: db.Sequelize.STRING(20)
  },
  Serie: {
    type: db.Sequelize.STRING(20)
  },
  Curso: {
    type: db.Sequelize.STRING(50)
  },
  Turno: {
    type: db.Sequelize.STRING(20)
  },
  Deficiencia: {
    type: db.Sequelize.STRING(100)
  },
  Alergias: {
    type: db.Sequelize.STRING(100)
  },
  Observacao: {
    type: db.Sequelize.TEXT
  },
  NomeMae: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  CelularMae: {
    type: db.Sequelize.STRING(15)
  },
  ProfissaoMae: {
    type: db.Sequelize.STRING
  },
  RGMae: {
    type: db.Sequelize.STRING(20),
    allowNull: false,
    unique: true
  },
  CPFMae: {
    type: db.Sequelize.STRING(14),
    allowNull: false,
    unique: true
  },
  DataDeAniversarioMae: {
    type: db.Sequelize.DATE
  },
  NomePai: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  CelularPai: {
    type: db.Sequelize.STRING(15)
  },
  ProfissaoPai: {
    type: db.Sequelize.STRING
  },
  RGPai: {
    type: db.Sequelize.STRING(20),
    allowNull: false,
    unique: true
  },
  CPFPai: {
    type: db.Sequelize.STRING(14),
    allowNull: false,
    unique: true
  },
  DataDeAniversarioPai: {
    type: db.Sequelize.DATE
  }
});


// Aluno.sync({ force: true })

module.exports = Aluno
