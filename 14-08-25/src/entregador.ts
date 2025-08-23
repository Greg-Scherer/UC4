import { pacote } from "./pacote"

export class Entregador {
    private nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    entregarPacote(pacote: pacote): void {
        console.log("Entregando pacote para " + pacote.getDestino() + " com peso de " + pacote.getPeso() + " kg.")

    }

    trocarEndereco(pacote: pacote, novoDestino: string): void {
        pacote.setDestino(novoDestino)
        console.log("Endereço do pacote alterado para " + pacote.getDestino())
    }

}