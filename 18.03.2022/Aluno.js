class Aluno{
    nome;
    curso;
    matricula;
    matstatus;

    constructor(nome, curso, matricula, matstatus){
        this.nome = nome;
        this.curso = curso;
        this.matricula = matricula;
        this.matstatus = matstatus;
    }

    consulta(){
        alert("Nome: " + this.nome + " | Curso: " + this.curso + " | Matricula: " + this.matricula + " | Status da Matricula: " + this.matstatus);
    }

    alteracurso(curso){
        this.curso = curso;
    }

    alterastatus(matstatus){
        this.matstatus = matstatus;
    }
}

let nome = prompt("Digite o nome do Aluno: ");
let curso = prompt("Digite o nome do Curso: ");
let matricula = prompt("Digite o número da Matricula: ");
let matstatus = prompt("Digite o status da Matricula: ");
var aluno1 = new Aluno(nome, curso, matricula, matstatus);
aluno1.consulta();
aluno1.alterastatus('Inativa');
aluno1.consulta();
