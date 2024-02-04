const Aluno = require("../../models/Aluno")

const createStudent = data => {
    return Aluno.create(data)
}

module.exports = createStudent