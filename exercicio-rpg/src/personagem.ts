import { Monstro } from "./monstro";


export class Personagem {
    private nome:string;
    private classe:string;
    private vida:number = 100;
    private forca:number = 30;

    constructor(nome:string, classe:string, vida:number, ataque:number) {
        this.nome = nome;
        this.classe = classe;
    }

    getNome(): string {
        return this.nome;
    }

    getClasse(): string {
        return this.classe;
    }

    getVida(): number {
        return this.vida;
    }

    getForca(): number {
        return this.forca;
    }

    

}