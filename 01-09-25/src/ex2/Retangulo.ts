import Forma from "./Forma";

class Retangulo extends Forma {
  largura: number;
  altura: number;

  constructor(largura: number, altura: number) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.largura * this.altura;
  }
}

export default Retangulo