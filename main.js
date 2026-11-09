let turmas = [];
turmas.push(new Turma("João Prof", "Programação Orientada a Objetos"));
let turmaSelecionada = 0;

const formSalvarAluno = document.querySelector('form#tab-cadastrar-aluno');
formSalvarAluno.addEventListener('submit', salvarAluno);

function listarAluno() {
  Interface.listar(turmas[turmaSelecionada].alunos);
}

function salvarAluno(e) {
  e.preventDefault();
  let a = Interface.salvar();
  turmas[turmaSelecionada].alunos.push(a);
  listarAluno();
}

function cadastroAluno() {
  Interface.cadastrar();
}


document.addEventListener("DOMContentLoaded", () => Interface.init());