class Interface {
  constructor() {}
  static salvar() {
    let nome = document.getElementById('nome').value;
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let a1 = new Aluno(nome, n1, n2, n3);
    let m = a1.gerarMedia();
    a1.gerarEstado();
    //turma[turma.length] = a1;
    alert('aluno cadastrado');
    return a1;
  }
  static listar(turma) {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');

    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');
    const mudarMedia = 'recalculaMadia()';
    btnListar.classList.add('active');
    btnCadastrar.classList.remove('active');

    // Ajusta o conteúdo visível
    tabListar.classList.add('active');
    tabCadastrar.classList.remove('active');

    let alunos;
    if (turma.length > 0) {
      alunos = ``;
      turma.forEach((a, index) => {
        alunos += `
          <tr id="aluno-${index}"> 
            <td scope="row">${a.getNome()}</th> 
            <td><input type="text" class="campo-n1" value="${a.getNota1()}"/></td> 
            <td><input type="text" class="campo-n2" value="${a.getNota2()}"/></td> 
            <td><input type="text" class="campo-n3" value="${a.getNota3()}"/></td>
            <td>${a.media.toFixed(2)}</td> 
            <td>${a.estado}</td>
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
            <th scope="col">N1</th> 
            <th scope="col">N2</th> 
            <th scope="col">N3</th>
            <th scope="col">Media</th> 
            <th scope="col">Situação</th>
          </tr>
          </thead>
        <tbody>
          ${alunos}
        </tbody>
      </table>
    `;
    document.getElementById('alunos').innerHTML = lista;
  }

  static cadastrar() {
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const tabCadastrar = document.getElementById('tab-cadastrar');
    const btnListar = document.getElementById('btn-listar');
    const tabListar = document.getElementById('tab-listar');

    btnListar.classList.remove('active');
    btnCadastrar.classList.add('active');

    // Ajusta o conteúdo visível
    tabListar.classList.remove('active');
    tabCadastrar.classList.add('active');
    //document.getElementById("media").innerHTML = m;
  }
}
