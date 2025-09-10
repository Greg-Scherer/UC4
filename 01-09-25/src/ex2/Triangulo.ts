import Forma from "./Forma";

class Triangulo extends Forma {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

export default Triangulo;
