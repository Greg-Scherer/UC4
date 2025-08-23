export class ContaBancaria {
    protected saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }


    atualizarSaldo(acrecimo:number): void {
        this.saldo += acrecimo;
    }

    getSaldo(): number {
        return this.saldo;
    }
}