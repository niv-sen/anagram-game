const words = [
    "Herresko",
    "Kulturby",
    "Panorama",
    "Rumraket",
    "Skumring",
    "Tidevand",
    "Vagabond",
    "Rustning",
    "Parfumen",
    "Natkjole",
    "Kagemand",
    "Bjergged",
    "Missekat"
];

let word;
let guessCount = 0;

const wordDisplay = document.getElementById("scrambled-word");
const startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startGame);
const guessInput = document.getElementById("user-guess");
const guessButton = document.getElementById("guess-button");
guessButton.addEventListener("click", handleGuess);
const messageDisplay = document.getElementById("message");
const guessCounter = document.getElementById("counter");
const giveUpButton = document.getElementById("give-up-button");
giveUpButton.addEventListener("click", giveUp);

function startGame() {
    messageDisplay.textContent = "";
    guessCount = 0;
    guessCounter.textContent = "";
    guessInput.value = "";
    let wordIndex = Math.floor((Math.random()*words.length));
    word = words[wordIndex];
    word = word.toUpperCase();
    let wordArray = word.split("");
    let scrambledArray = scrambleArray(wordArray);
    let scrambledWord = scrambledArray.join("");
    wordDisplay.textContent = scrambledWord;
}


function scrambleArray(wordArray) {
    let length = wordArray.length;
    let scramble = wordArray.slice();
    for (let i = length -1; i > 0; i -= 1) {
        let random = Math.floor(Math.random() * (i + 1));
        let current = scramble[i];
        scramble[i] = scramble[random];
        scramble[random] = current;
    }
    return scramble;
}

function handleGuess() {
    guessCount ++;
    guessCounter.textContent = "Antal gæt: " + guessCount;
    const isCorrect = evaluateGuess();
    if (isCorrect) {
        messageDisplay.textContent = "Korrekt!";
    } else {
        messageDisplay.textContent = "Prøv igen";
    }
}

function evaluateGuess() {
    const guess = guessInput.value.toUpperCase();
    if (guess === word) {
        return true;
    }
    return false;
}

function giveUp() {
    messageDisplay.textContent = "Det rigtige svar er: " + word;
}