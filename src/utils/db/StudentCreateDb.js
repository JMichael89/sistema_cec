const Aluno = require("../../models/Student")

const createStudent = data => {
    return Aluno.create(data)
}

module.exports = createStudent