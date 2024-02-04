const db = require("./db")

const Mae = db.sequelize.define('Mae', {
    Nome: {
      type: db.Sequelize.STRING,
      allowNull: false
    },
    Celular: {
      type: db.Sequelize.STRING(15)
    },
    Profissao: {
      type: db.Sequelize.STRING
    },
    RG: {
      type: db.Sequelize.STRING(20),
      allowNull: false,
      unique: true
    },
    CPF: {
      type: db.Sequelize.STRING(14),
      allowNull: false,
      unique: true
    },
    Data_de_aniversario: {
      type: db.Sequelize.DATE
    }
  });

module.exports = Mae