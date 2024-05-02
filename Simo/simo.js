const inputs = document.querySelector('inputs');
hintTag = document.querySelector('.hint span');
guessLeft = document.querySelector("guess-left span")
wrongLetter = document.querySelector("wrong-letter span")
guessBtn = document.querySelector('.guess_button');
typingInput = document.querySelector('typing-input');

let word, maxGuesses, incorrectLetters = [], correctLetters = [];


function randomword () {
    let ranItem = countries[Math.floor(Math.random() * countries.length)]
    word = ranItem.word
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;


    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type = "text" disabled>`;
        inputs.innerHTML = html;
    }
}
   randomword();

   function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !incorrectLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses
        wrongLetter.innerText = incorrectLetters
    }
    typingInput.value = "";

    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`congrats! you found the word ${word.toUpperCase()}`);
            return randomword();
        } else if(maxGuesses < 1) {
            alert("Game over! you don't have remaining guesses")
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i]
            }
        }
    }, 100)
   }

guessBtn.addEventListener("click", randomword);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());









let countries = [
    {
        capital: 'Helsinki',
        country: 'Suomi'
    },
    {
        capital: 'Oslo' ,
        country: 'Norja'
    },

    {
        capital: 'tukholma' ,  
        country: 'ruotsi'
    
    },
    {
        capital: 'tallinna',
        country: 'viro'
    },
    {
        capital: 'bryssel',
        country : 'belgium'
    },
]

