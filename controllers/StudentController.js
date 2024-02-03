const express = require("express")
const router = express.Router()

router.get('/cadAluno', (req, res) => {
    res.render('formCreateStudent')
})

router.get('/alunos', (req, res) => {
    Aluno.findAll({ order: [['id', 'DESC']] }).then(alunos => {
        res.render('listStudents', {
            alunos: alunos
        })
    })
})

router.post('/matriculaCriada', (req, res) => {
    console.log(req.body.dataNascimento)
    Aluno.create({
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
    }).then(() => {
        res.redirect('/alunos')
    }).catch(err => {
        console.log("ERRO AO CRIAR ALUNO")
        res.send("ERRO: " + err)
    });

})

router.get('/desmatricularAluno/:id', (req, res) => {
    Aluno.destroy({
        where: {
            'id': req.params.id
        }
    }).then(() => {
        res.send("Aluno desmatriculado com sucesso")
    }).catch(err => {
        res.send("Este aluno não existe")
    })
})


module.exports = router;