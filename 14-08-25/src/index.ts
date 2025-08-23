import { Entregador } from "./entregador";
import { pacote } from "./pacote";
import { ContaBancaria } from "./ContaBancaria";


const entregador:Entregador = new Entregador("João");
const pacote1:pacote = new pacote("Novo Hamburgo", 2.5);



entregador.entregarPacote(pacote1);
entregador.trocarEndereco(pacote1, "Porto Alegre");

const conta: ContaBancaria = new ContaBancaria(1000);

console.log(`Saldo inicial: R$ ${conta.getSaldo()}`);
conta.atualizarSaldo(500);
console.log(`Saldo após depósito: R$ ${conta.getSaldo()}`);

