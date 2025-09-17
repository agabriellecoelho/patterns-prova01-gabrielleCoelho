class Lanche {
  constructor() {
    this.pao = false;
    this.carne = false;
    this.queijo = false;
    this.salada = false;
    this.molho = false;
  }

  show() {
    console.log(`Lanche:
      pao: ${ this.pao ? "Sim" : "Não"}
      carne: ${ this.carne ? "Sim" : "Não"}
      queijo: ${this.queijo ? "Sim" : "Não"}
      salada: ${this.salada ? "Sim" : "Não"}
      molho: ${this.molho ? "Sim" : "Não"}
    `);
  }
}

class LancheBuilder {
  constructor() {
    this.lanche = new Lanche();
  }

  addPao() {
    this.lanche.pao = true;
    return this;
  }

  addCarne() {
    this.lanche.carne = true;
    return this;
  }

  addQueijo() {
    this.lanche.queijo = true;
    return this;
  }

  addSalada() {
    this.lanche.salada = true;
    return this;
  }

  addMolho() {
    this.lanche.molho = true;
    return this;
  }

  build() {
    return this.lanche;
  }
}

class lancheDirector {
  static buildLancheCompleto() {
    return new LancheBuilder()
      .addPao()
      .addCarne()
      .addQueijo()
      .addSalada()
      .addMolho()
      .build();
  }

  static buildLancheSimples() {
    return new LancheBuilder()
      .addPao()
      .addCarne()
      .build();
  }
}

const lancheCompleto = lancheDirector.buildLancheCompleto();
const lancheSimples = lancheDirector.buildLancheSimples();

lancheCompleto.show();
lancheSimples.show();
