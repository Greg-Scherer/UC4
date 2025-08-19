import { Animal } from "./Animal";

export class crocodile extends Animal {
    constructor(name:string, weight:number) {
        super(name, weight);
    }

    swim(): void {
        console.log(`The crocodile is swimming!`);
    }
}