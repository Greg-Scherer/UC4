import { Personagem } from "./personagem.js";


export class Monstro {
    private nome:string;
    private vida:number = 85;
    private forca:number = 25;

    constructor(nome: string, vida: number, forca: number) {
        this.nome = nome;
    }

    getVida(): number {
        return this.vida;
    }

    getNome(): string {
        return this.nome;
    }

    getForca(): number {
        return this.forca;
    }

    
}
