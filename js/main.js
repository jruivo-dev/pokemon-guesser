const pokeList = ['Blastoise', 'Bulbasaur', 'Charizard', 'Charmander', 'Charmeleon', 'Ivysaur',
    'Squirtle', 'Venusaur', 'Wartortle'
]

const IMAGE_PATH = './img/pokemon/'
const PNG = '.png';

let currentPokemon = null;
let pokeImage = document.querySelector('.poke-image');
let passButton = document.querySelector('.pass-button')
let guessButton = document.querySelector('.guess-button')
let scoreElement = document.querySelector('.score');
let livesElement = document.querySelector('.lives');
let bestScoreElement = document.querySelector('.best-score');
var snackbarElement = document.getElementById("snackbar")

let gameOver = false;
let score = 0;
let lives = 3;
let bestScore = 0;

function init() {
    gameOver = false;
    score = 0;
    lives = 3;
    updateStatsUI();
    changePokemon();
}


// returns random pokemon image path
function getRandomPokemon() {
    let index = Math.floor(Math.random() * pokeList.length - 1) + 1;
    currentPokemon = pokeList[index];
    return IMAGE_PATH + pokeList[index] + PNG;
}

// updates img element with new pokemon
function changePokemon() {
    pokeImage.src = getRandomPokemon();
    pokeImage.classList.add('desaturate')
}

//updates UI scores
function updateStatsUI() {
    bestScoreElement.innerHTML = bestScore;
    livesElement.innerHTML = lives;
    scoreElement.innerHTML = score;

}

// updates the stats after a guess
function isGuessRight(guess) {
    if (guess) {
        score++;
        if (score > bestScore) {
            bestScore++;
        }

        snackbarElement.classList.add("show");
        snackbarElement.innerHTML = 'Nice !'
        snackbarElement.style.background = 'green';
        // After 3 seconds, remove the show class from DIV
        setTimeout(() => {
            snackbarElement.classList.remove("show");
            changePokemon();
        }, 2200);

    } else {
        lives--;
        snackbarElement.classList.add("show");
        snackbarElement.innerHTML = 'Sorry, try again!'
        snackbarElement.style.background = 'red';

        if (lives === 0) {
            snackbarElement.innerHTML = `Sorry , GAME OVER!`
            init();

        }
        // After 3 seconds, remove the show class from DIV
        setTimeout(() => {
            snackbarElement.classList.remove("show");
        }, 2200);
    }
    updateStatsUI()
}



function guessPokemon() {
    let guess = prompt(`What's your guess?`);
    if (guess.toLowerCase() === currentPokemon.toLowerCase()) {
        isGuessRight(true);
        pokeImage.classList.remove('desaturate')
    } else {
        isGuessRight(false);
    }
}


guessButton.addEventListener('click', guessPokemon);

init();