const express = require("express")
const router = express.Router()
const Aluno = require("../models/Aluno")
const StudentCreate = require("../utils/db/StudentCreateDb")
const createStudent = require("../utils/db/StudentCreateDb")
const Pai = require("../models/Pai")
const Mae = require("../models/Mae")

const getIndex = (req, res) => {
    res.render('formCreateStudent')
}

const getListStudents = (req, res) => {
    Aluno.findAll({ order: [['id', 'DESC']] }).then(alunos => {
        res.render('listStudents', {
            alunos: alunos
        })
    })
}

const postEnrollStudent = async (req, res) => {
    const contentDad = {

    }

    const contentMom = {
        
    }

    const contentStudent = {
        Nome: req.body.nomeAluno,
        CPF: req.body.rgAluno,
        RG: req.body.cpfAluno,
        Data_de_nascimento: '2000-01-01', // Formato: YYYY-MM-DD
        Situacao: req.body.situacao,
        Serie: req.body.serie,
        Curso: req.body.curso,
        Turno: req.body.turno,
        Deficiencia: req.body.listaDef,
        Alergias: req.body.qualAlerg,
        Observacao: req.body.observacao
    }

    try {
        
        // const dataDad = await to(Pai.create());
        // const dataMom = await to(Mae.create());
        const dataStudent = await Aluno.create(contentStudent);
        res.redirect('/alunos')
    } catch(e) {
        res.send({
            status: 500,
            message: "Problema ao criar matricula do aluno",
            error: e
        })
        console.log(e)
    }
    
}

const getDisenrollStudent =  (req, res) => {
    Aluno.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() => {
        res.send("Aluno desmatriculado com sucesso")
    }).catch(err => {
        res.send("Este aluno não existe")
    })
}


module.exports = {
    getIndex,
    getListStudents,
    postEnrollStudent,
    getDisenrollStudent
};