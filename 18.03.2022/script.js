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
        alert("Nome: " + this.nome + " Curso: " + this.curso + " Matricula: " + this.matricula + " Status da Matricula: " + this.matstatus);
    }

    alteracurso(curso){
        this.curso = curso;
    }

    alterastatus(matstatus){
        this.matstatus = matstatus;
    }
}