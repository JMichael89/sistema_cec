const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

const bodyParser = require("body-parser");
const Aluno = require("./src/models/Student");

const controllerStudent = require("./src/controllers/StudentController");

// Config
// Template engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Config body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

app.get('/cadAluno', controllerStudent.getIndex);
app.get('/alunos', controllerStudent.getListStudents);
app.get('/aluno/:id', controllerStudent.getOneStudent);
app.post('/matriculaCriada', controllerStudent.postEnrollStudent);
app.get('/desmatricularAluno/:id', controllerStudent.getDisenrollStudent);

app.listen(3434, () => {
    console.log("RUNING: http://localhost:3434")
});