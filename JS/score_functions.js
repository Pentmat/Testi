
// Score from localStorage
let score = JSON.parse(localStorage.getItem('score')) || 0; 
let histScore = JSON.parse(localStorage.getItem('histScore')) || 0;
let mathScore = JSON.parse(localStorage.getItem('pisteet')) || 0;
let simoScore = JSON.parse(localStorage.getItem('simoScore')) || 0;
let bioScore = JSON.parse(localStorage.getItem('bioScore')) || 0;

// HTML elements
const flashcardScoreDisplay = document.getElementById('Flashcard-score');
const historyScoreDisplay = document.getElementById('History-score'); 
const mathScoreDisplay = document.getElementById('Math-score'); 
const simoScoreDisplay = document.getElementById('Simo-score'); 
const biologyScoreDisplay = document.getElementById('Biology-score'); 
const fullScoreDisplay = document.getElementById('full-score');

// Update the score displays with the current scores
flashcardScoreDisplay.textContent = `Englannin pisteet: ${score}`; 
historyScoreDisplay.textContent = `Historian pisteet: ${histScore}`; 
mathScoreDisplay.textContent = `Matematiikkan pisteet: ${mathScore}`; 
simoScoreDisplay.textContent = `Simon pisteet: ${simoScore}`; 
biologyScoreDisplay.textContent = `Biologian pisteet: ${bioScore}`; 

// Update the full score display
fullScoreDisplay.textContent = `Yhteensä: ${score + histScore + mathScore + simoScore + bioScore}`; 