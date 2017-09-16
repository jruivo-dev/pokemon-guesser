const pokeList = ['Blastoise', 'Bulbasaur', 'Charizard', 'Charmander', 'Charmeleon', 'Ivysaur',
    'Squirtle', 'Venusaur', 'Wartortle'
]

const IMAGE_PATH = './img/pokemon/'
const PNG = '.png';

let currentPokemon = null;
let pokeImage = document.querySelector('.poke-image');
let passButton = document.querySelector('.pass-button')
let guessButton = document.querySelector('.guess-button')
let score = document.querySelector('.score');
let lives = document.querySelector('.lives');

let gameOver = false;
let score = 0;
let lives = 3;

function init() {
    gameOver = false;
    score = 0;
    lives = 3;
}



function getRandomPokemon() {
    let index = Math.floor(Math.random() * pokeList.length - 1) + 1;
    currentPokemon = pokeList[index];

    return IMAGE_PATH + pokeList[index] + PNG;
}

function changePokemon() {
    pokeImage.src = getRandomPokemon();
}




function guessPokemon() {
    let guess = prompt(`What's your guess?`);
    if (guess.toLowerCase() === currentPokemon.toLowerCase()) {
        alert('gotteeem');
        changePokemon();
    } else
        alert(`That's a nope! Sorry`)
}


guessButton.addEventListener('click', guessPokemon);
changePokemon();