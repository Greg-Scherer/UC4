import { Animal } from "./Animal";
import { Dog } from "./Dog";
import { Owl } from "./Owl";
import { crocodile } from "./crocodile";

const myDog: Dog = new Dog("Gregori", 30);

myDog.eat();
myDog.bark();

const myOwl:Owl = new Owl("Shiro", 20);

myOwl.eat();
myOwl.fly();

const myCrocodile:crocodile = new crocodile("Croc", 100);
myCrocodile.swim();
myCrocodile.eat();

let animals: Array<Animal> = [myDog , myOwl, myCrocodile]
animals.forEach((animal) => {
    animal.eat()
});