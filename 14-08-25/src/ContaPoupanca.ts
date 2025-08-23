import { ContaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends ContaBancaria {
     constructor(Saldo: number) {
        super(Saldo);
}

porJuros(juros: number): void {
    this.atualizarSaldo(this.saldo * juros / 100);
}

}