import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa {
    protected tipoSanguineo: string;
    protected dataUltimaDoacao: string;

    constructor(nome: string, idade: number, peso: number, tipoSanguineo: string, dataUltimaDoacao: string) {
        super(nome, idade, peso);
        this.tipoSanguineo = tipoSanguineo.toUpperCase();
        this.dataUltimaDoacao = dataUltimaDoacao;
    }

    public mostrarInfo(): string {
        return `Nome: ${this.nome} | Idade: ${this.idade} | Peso: ${this.peso} | Tipo: ${this.tipoSanguineo} | Última doação: ${this.dataUltimaDoacao}`;
    }

    public getTipoSanguineo(): string {
        return this.tipoSanguineo;
    }

    public getDataUltimaDoacao(): string {
        return this.dataUltimaDoacao;
    }
}