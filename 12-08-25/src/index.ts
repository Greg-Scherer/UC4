// Para podermos criar um objeto da nossa classe "cachorro", primeiro criamos uma variável que deve ser do tipo Cachorro

import { Cachorro } from "./cachorro";

// Depois, atribuimos valor a esta variável usamos a palavra reservada "new" seguido do nome da classe junto de parênteses. Assim chamamos o constructor da classe e devemos, dentro dos parênteses, passar TODOS os valores
const meuCachorro:Cachorro = new Cachorro("Dog", 9, "Dobberman");
const meuCachorro2:Cachorro = new Cachorro("God", 6, "Pug");

meuCachorro.latir;
meuCachorro2.latir;

meuCachorro.correr

console.log(meuCachorro.name)
console.log(meuCachorro2.name)