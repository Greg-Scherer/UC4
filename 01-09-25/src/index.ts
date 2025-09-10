import { FuncionarioCLT } from "./ex1/FuncionarioCLT";
import { FuncionarioPJ } from "./ex1/FuncionarioPJ";
import Forma from "./ex2/Forma";
import Triangulo from "./ex2/Triangulo";
import Retangulo from "./ex2/Retangulo";	

const clt = new FuncionarioCLT("Maria", 2000);
const pj = new FuncionarioPJ("João", 80, 160);

console.log(`${clt.nome} recebe: R$${clt.calcularSalario()}`);
console.log(`${pj.nome} recebe: R$${pj.calcularSalario()}`);

const formas: Forma[] = [
    new Retangulo(10, 5),
    new Triangulo(8, 4),
    new Retangulo(7, 3),
    new Triangulo(6, 6)
  ];

formas.forEach((forma, i) => {
    console.log(`Area da forma ${i + 1}: ${forma.calcularArea()}`)
});