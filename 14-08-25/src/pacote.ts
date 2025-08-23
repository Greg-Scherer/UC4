export class pacote {

    private destino:string;
    private peso:number;

    constructor(destino:string, peso:number) {
        this.destino = destino;
        this.peso = peso;
    }

    setDestino(destino:string):void {
        this.destino = destino;
    }

    getDestino():string {
        return this.destino;
    }

    setPeso(peso:number):void {
        if (peso < 0) {
            console.log("Peso não pode ser negativo");
        } else {
            this.peso = peso;
        }
    }

    getPeso():number {
        return this.peso;
    }
}

