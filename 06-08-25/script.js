
// Senhor dos Anéis
var sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
var hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];
for (var i = 0; i < sociedade.length; i++) {
    if (hobbits.includes(sociedade[i])) {
        console.log("Hobbit encontrado: ".concat(sociedade[i]));
    }
}
// Star Wars
var personagensStarWars = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
];
for (var _i = 0, personagensStarWars_1 = personagensStarWars; _i < personagensStarWars_1.length; _i++) {
    var personagem = personagensStarWars_1[_i];
    if (personagem.jedi) {
        console.log("Jedi encontrado: ".concat(personagem.nome));
    }
}
// Naruto
var personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake',
};
for (var personagem in personagensNaruto) {
    console.log("".concat(personagem, " pertence ao cl\u00E3 ").concat(personagensNaruto[personagem]));
}
// Dragon Ball
var personagensDragonBall = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];
personagensDragonBall.forEach(function (personagem) {
    if (personagem.poder > 8000) {
        console.log("O poder de ".concat(personagem.nome, " \u00E9 de mais de 8000!"));
    }
});
// Pokémon
var pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
var index = 0;
while (index < pokemons.length) {
    console.log("Capturando ".concat(pokemons[index]));
    if (pokemons[index] === 'Mewtwo') {
        console.log('Pokémon lendário encontrado: Mewtwo!');
        break;
    }
    index++;
}
// Senhor dos Anéis
var passos = 0;
var passosParaMordor = 5;
do {
    passos++;
    console.log("Dando passo ".concat(passos));
} while (passos < passosParaMordor);
console.log('Chegamos em Mordor!');
