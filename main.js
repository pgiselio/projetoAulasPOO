let turmas = [];
let turmaSelecionada = null;

const formSalvarAluno = document.querySelector('form#tab-cadastrar-aluno');
formSalvarAluno.addEventListener('submit', salvarAluno);

const formCadastrarTurma = document.querySelector("form#cadastrar-turma");
formCadastrarTurma.addEventListener("submit", cadastrarTurma);

function listarAluno() {
  if (turmaSelecionada === null) return;
  Interface.listar(turmas[turmaSelecionada].alunos);
}

function salvarAluno(e) {
  e.preventDefault();
  if (turmaSelecionada === null) return;
  if (!formSalvarAluno.reportValidity()) return;

  const a = Interface.salvar();
  turmas[turmaSelecionada].alunos.push(a);
  renderizarTurmas();
  listarAluno();
}

function cadastrarTurma(e) {
  e.preventDefault();
  const professor = document.getElementById("professor").value.trim();
  const curso = document.getElementById("curso").value.trim();

  if (!professor || !curso) {
    formCadastrarTurma.reportValidity();
    return;
  }

  turmas.push(new Turma(professor, curso));
  formCadastrarTurma.reset();
  renderizarTurmas();
}

function renderizarTurmas() {
  const lista = document.getElementById("lista-turmas");
  if (turmas.length === 0) {
    lista.innerHTML = "<p>Nenhuma turma cadastrada.</p>";
    return;
  }

  lista.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Curso</th>
          <th>Professor</th>
          <th>Qtd. Alunos</th>
        </tr>
      </thead>
      <tbody>
        ${turmas.map((turma, index) => `
          <tr>
            <td>
              <a href="#" class="link-turma" onclick="selecionarTurma(${index}); return false;">
                ${turma.curso}
              </a>
            </td>
            <td>${turma.professor}</td>
            <td>${turma.getQtdAlunos()}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function selecionarTurma(index) {
  turmaSelecionada = index;
  const turma = turmas[index];
  document.getElementById("area-turmas").hidden = true;
  document.getElementById("area-alunos").hidden = false;
  document.getElementById("turma-atual-curso").innerText = turma.curso;
  document.getElementById("turma-atual-professor").innerText = turma.professor;
  Interface.cadastrar();
}

function trocarTurma() {
  turmaSelecionada = null;
  document.getElementById("area-turmas").hidden = false;
  document.getElementById("area-alunos").hidden = true;
}


document.addEventListener("DOMContentLoaded", () => {
  Interface.init();
  renderizarTurmas();
});