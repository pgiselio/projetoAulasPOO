class Interface {
  constructor() {}

  static init() {
    const tabelaAlunos = document.getElementById("lista-alunos");

    tabelaAlunos?.addEventListener("input", (e) => {
      Interface.editarCampo(e);
    });
  }

  static editarCampo(e) {
    const field = e.target;
    const fieldName = field.dataset?.campo;

    if (!["n1", "n2", "n3"].includes(fieldName)) return;

    const linha = field.closest("tr");
    const index = Number(linha?.id.split("-")[1]);
    const aluno = Interface.alunos?.[index];

    if (!aluno) return;

    const valor = Number(field.value);
    if (!Number.isFinite(valor) || valor < 0 || valor > 10) {
      field.setCustomValidity("A nota deve estar entre 0 e 10.");
      return;
    }
    field.setCustomValidity("");

    if (fieldName === "n1") aluno.setNota1(valor);
    if (fieldName === "n2") aluno.setNota2(valor);
    if (fieldName === "n3") aluno.setNota3(valor);

    aluno.gerarMedia();
    aluno.gerarEstado();

    linha.querySelector("[data-campo='media']").innerText =
      aluno.media.toFixed(2);
    const estado = linha.querySelector("[data-campo='estado']");
    const iconeEstado = estado.querySelector(".icone-estado");
    const textoEstado = estado.querySelector(".texto-estado");

    iconeEstado.className = `fa-solid fa-dot-circle icone-estado ${Interface.classeEstado(aluno.estado)}`;
    textoEstado.innerText = aluno.estado;
  }

  static classeEstado(estado) {
    if (estado === "Aprovado") return "estado-aprovado";
    if (estado === "Recuperação") return "estado-recuperacao";
    return "estado-reprovado";
  }

  static salvar() {
    let nome = document.getElementById("nome").value;
    let n1 = Number(document.getElementById("n1").value);
    let n2 = Number(document.getElementById("n2").value);
    let n3 = Number(document.getElementById("n3").value);
    let a1 = new Aluno(nome, n1, n2, n3);
    a1.gerarMedia();
    a1.gerarEstado();
    return a1;
  }
  static listar(turma) {
    Interface.alunos = turma;
    const btnCadastrar = document.getElementById("btn-cadastrar");
    const tabCadastrar = document.getElementById("tab-cadastrar-aluno");

    const btnListar = document.getElementById("btn-listar");
    const tabListar = document.getElementById("tab-listar");
    btnListar.classList.add("active");
    btnCadastrar.classList.remove("active");

    // Ajusta o conteúdo visível
    tabListar?.classList.add("active");
    tabCadastrar.classList.remove("active");

    let alunos;
    if (turma.length > 0) {
      alunos = ``;
      turma.forEach((a, index) => {
        alunos += `
          <tr id="aluno-${index}"> 
            <td scope="row">${a.getNome()}</td> 
            <td><input type="text" data-campo="n1" value="${a.getNota1()}"/></td> 
            <td><input type="text" data-campo="n2" value="${a.getNota2()}"/></td> 
            <td><input type="text" data-campo="n3" value="${a.getNota3()}"/></td>
            <td data-campo="media">${a.media.toFixed(2)}</td> 
            <td data-campo="estado">
              <i class="fa-solid fa-dot-circle icone-estado ${this.classeEstado(a.estado)}"></i>
              <span class="texto-estado">${a.estado}</span>
            </td>
          </tr>
        `;
      });
    } else
      alunos = `<tr> <td colspan="6" align="center">Nenhum aluno cadastrado!</td> </tr>`;

    let lista = `
      <table>
        <thead>
          <tr>
            <th scope="col">Nome</th> 
            <th scope="col" class="col-nota">N1</th> 
            <th scope="col" class="col-nota">N2</th> 
            <th scope="col" class="col-nota">N3</th>
            <th scope="col" class="col-nota">Média</th> 
            <th scope="col" class="col-situacao">Situação</th>
          </tr>
          </thead>
        <tbody>
          ${alunos}
        </tbody>
      </table>
    `;
    document.getElementById("lista-alunos").innerHTML = lista;
  }

  static cadastrar() {
    const btnCadastrar = document.getElementById("btn-cadastrar");
    const tabCadastrar = document.getElementById("tab-cadastrar-aluno");
    const btnListar = document.getElementById("btn-listar");
    const tabListar = document.getElementById("tab-listar");

    btnListar.classList.remove("active");
    btnCadastrar.classList.add("active");

    // Ajusta o conteúdo visível
    tabListar?.classList.remove("active");
    tabCadastrar.classList.add("active");
  }
}
