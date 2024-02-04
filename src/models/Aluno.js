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
  Data_de_nascimento: {
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
  }
});

Aluno.belongsTo(Pai);
Aluno.belongsTo(Mae);


//  Aluno.sync({ force: true })

module.exports = Aluno
