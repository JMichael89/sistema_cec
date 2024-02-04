const Aluno = require('./Aluno');
const Pai = require('./Pai');
const Mae = require('./Mae');

// Estabelecendo as associações
Aluno.belongsTo(Pai);
Aluno.belongsTo(Mae); 

module.exports = { Aluno, Pai, Mae };