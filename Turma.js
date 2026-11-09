class Turma {
    professor;
    curso;
    alunos = [];

    constructor(professor, curso) {
        this.professor = professor;
        this.curso = curso;
    }

    getQtdAlunos() {
        return this.alunos.length;
    }
   
}