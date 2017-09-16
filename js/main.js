const pokeList = ['Blastoise', 'Bulbasaur', 'Charizard', 'Charmander', 'Charmeleon', 'Ivysaur',
    'Squirtle', 'Venusaur', 'Wartortle'
]

const IMAGE_PATH = './img/pokemon/'
const PNG = '.png';

let currentPokemon = null;
let pokeImage = document.querySelector('.poke-image');
let passButton = document.querySelector('.pass-button')
let guessButton = document.querySelector('.guess-button')

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
    console.log(guess)
    console.log(guess.toLowerCase(), currentPokemon.toLowerCase())
    if (guess.toLowerCase() === currentPokemon.toLowerCase()) {
        alert('gotteeem');
        changePokemon();

    } else
        alert(`That's a nope! Sorry`)
}


guessButton.addEventListener('click', guessPokemon);
changePokemon();