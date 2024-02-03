const db = require('./db');

const Pai = db.sequelize.define('Pai', {
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

// Pai.sync({force: true})

module.exports = Pai;