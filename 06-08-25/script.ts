
// Senhor dos Anéis
const sociedade = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
const hobbits = ['Frodo', 'Sam', 'Merry', 'Pippin'];

for (let i = 0; i < sociedade.length; i++) {
    if (hobbits.includes(sociedade[i])) {
        console.log(`Hobbit encontrado: ${sociedade[i]}`);
    }
}

// Star Wars
const personagensStarWars = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
]

for (const personagem of personagensStarWars) {
    if (personagem.jedi) {
        console.log(`Jedi encontrado: ${personagem.nome}`);
    }
}

// Naruto
const personagensNaruto = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake',
}

for (const personagem in personagensNaruto) {
    console.log(`${personagem} pertence ao clã ${personagensNaruto[personagem]}`);
}

// Dragon Ball
const personagensDragonBall = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
];

personagensDragonBall.forEach(personagem => {
    if (personagem.poder > 8000) {
        console.log(`O poder de ${personagem.nome} é de mais de 8000`);
    }
});

// Pokémon
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let index = 0;

while (index < pokemons.length) {
    console.log(`Capturando ${pokemons[index]}`);
    if (pokemons[index] === 'Mewtwo') {
        console.log('Pokemon lendario encontrado: Mewtwo');
        break;
    }
    index++;
}

// Senhor dos Anéis
let passos = 0;
const passosParaMordor = 5;

do {
    passos++;
    console.log(`Dando passo ${passos}`);
} while (passos < passosParaMordor);

console.log('Chegou');