import { FuncionarioCLT } from "./FuncionarioCLT";
import { FuncionarioPJ } from "./FuncionarioPJ";	

const clt = new FuncionarioCLT("Maria", 2000);
const pj = new FuncionarioPJ("João", 80, 160);

console.log(`${clt.nome} recebe: R$${clt.calcularSalario()}`);
console.log(`${pj.nome} recebe: R$${pj.calcularSalario()}`);
