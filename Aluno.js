class Aluno {
  #nome;
  #nota1;
  #nota2;
  #nota3;
  estado;
  media;
  constructor(nome, nota1, nota2, nota3) {
    this.#nome = nome;
    this.#nota1 = nota1;
    this.#nota2 = nota2;
    this.#nota3 = nota3;
  }

  gerarMedia() {
    this.media = (this.#nota1 + this.#nota2 + this.#nota3) / 3;
    return this.media;
  }

  gerarEstado(media) {
    let m;
    if (media) m = media;
    else {
      if (this.media === undefined) this.gerarMedia();
      m = this.media;
    }

    let est;
    if (m >= 6) {
      est = 'Aprovado';
    } else if (m >= 3) {
      est = 'Recuperação';
    } else {
      est = 'Reprovado';
    }
    this.estado = est;
    return est;
  }
  getNome() {
    return this.#nome;
  }
  setNome(nome) {
    this.#nome = nome;
  }

  getNota1() {
    return this.#nota1;
  }

  setNota1(nota1) {
    this.#nota1 = nota1;
  }

  getNota2() {
    return this.#nota2;
  }

  setNota2(nota2) {
    this.#nota2 = nota2;
  }

  getNota3() {
    return this.#nota3;
  }

  setNota3(nota3) {
    this.#nota3 = nota3;
  }
}
