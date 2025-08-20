import { Guerreiro } from "./Guerreiro";
import { Veiculo } from "./Veiculo";

const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao);  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar();       // Acessando protected na própria instância

console.log("\n")
const Carro = new Veiculo(60);
console.log(`Velocidade inicial: ${Carro.getVelocidade()} km/h`);

Carro.acelerar()

console.log(`Velocidade do carro: ${Carro.getVelocidade()} km/h`);