const express = require("express")
const router = express.Router()
const Student = require("../models/Student")
const formatDate = require("../utils/functions")

const getIndex = (req, res) => {
    res.render('formCreateStudent')
}

const getListStudents = (req, res) => {
    Student.findAll({ order: [['id', 'DESC']] }).then(alunos => {
        res.render('listStudents', {
            alunos: alunos
        })
    })
}

const postEnrollStudent = async (req, res) => {
    console.log(req.body.data_nascimento)

    const contentStudent = {
        Nome: req.body.nome,
        CPF: req.body.cpf,
        RG: req.body.rg,
        DataDeNascimento: req.body.data_nascimento,
        Situacao: req.body.situacao,
        Serie: req.body.serie,
        Curso: req.body.curso,
        Turno: req.body.turno,
        Deficiencia: req.body.deficiencia,
        Alergias: req.body.alergias,
        Observacao: req.body.observacao,
        NomeMae: req.body.nome_mae,
        CelularMae: req.body.celular_mae,
        ProfissaoMae: req.body.profissao_mae,
        RGMae: req.body.rg_mae,
        CPFMae: req.body.cpf_mae,
        DataDeAniversarioMae: req.body.data_aniversario_mae,
        NomePai: req.body.nome_pai,
        CelularPai: req.body.celular_pai,
        ProfissaoPai: req.body.profissao_pai,
        RGPai: req.body.rg_pai,
        CPFPai: req.body.cpf_pai,
        DataDeAniversarioPai: req.body.data_aniversario_pai
    };
    

    try {
        
        // const dataDad = await to(Pai.create());
        // const dataMom = await to(Mae.create());
        const dataStudent = await Student.create(contentStudent);
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

const getOneStudent = (req, res) => {
    Student.findOne({
        where: {
            'id': req.params.id
        }
    }).then(aluno => {
        res.render('pageStudent', {
            aluno: aluno,
            formatedDateStudent: formatDate(aluno.dataValues.DataDeNascimento),
            formatedDateDad: formatDate(aluno.dataValues.DataDeAniversarioPai),
            formatedDateMom: formatDate(aluno.dataValues.DataDeAniversarioMae),
        })
    }).catch(err => {
        res.send("Este aluno não está matriculado " + err)
    })
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
    getOneStudent,
    postEnrollStudent,
    getDisenrollStudent
};