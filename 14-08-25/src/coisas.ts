export class Pessoa {
    private nome: string;
    private idade: number;
    private altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    apresentar(): void {
        console.log("Meu nome é " + this.nome + ", tenho " + this.idade + " anos e minha altura é " + this.altura + " metros.");
    }

    setNome(nome: string): void {
        this.nome = nome;
    }

    setIdade(idade: number): void {
        if (idade < 0) {
            console.log("Idade não pode ser negativa");
        }
    }

    setAltura(altura: number): void {
        this.altura = altura;
    }

    getNome(): string {
        return this.nome;
    }

    getIdade(): number {
        return this.idade;
    }

    getAltura(): number {
        return this.altura;
    }


}

