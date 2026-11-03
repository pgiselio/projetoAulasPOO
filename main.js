let turma = [];

const formSalvarAluno = document.querySelector('form#tab-cadastrar');
formSalvarAluno.addEventListener('submit', salvarAluno);

function listarAluno() {
  Interface.listar(turma);
}

function salvarAluno(e) {
  e.preventDefault();
  let a = Interface.salvar();
  turma.push(a);
}

function cadastroAluno() {
  Interface.cadastrar();
}
