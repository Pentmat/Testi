let flashcards = JSON.parse(localStorage.getItem('flashcards')) || [
	// Level 1
	[{
		imageSrc: "./flashcard_images/Kissa.png",
		answer: ["cat"]
	}, {
		imageSrc: "./flashcard_images/Koira.png",
		answer: ["dog"]
	}, {
		imageSrc: "./flashcard_images/Lintu.png",
		answer: ["bird"]
	}],
	// Level 2
	[{
		imageSrc: "./flashcard_images/Omena.png",
		answer: ["apple"]
	}, {
		imageSrc: "./flashcard_images/Banaani.png",
		answer: ["banana"]
	}, {
		imageSrc: "./flashcard_images/Appelsiini.png",
		answer: ["orange"]
	}]
];
let currentLevelIndex = JSON.parse(localStorage.getItem('currentLevelIndex')) || 0;
let currentFlashcardIndex = JSON.parse(localStorage.getItem('currentFlashcardIndex')) || 0;
let score = JSON.parse(localStorage.getItem('score')) || 0; // Parse the score from localStorage
localStorage.setItem('score', JSON.stringify(score)); // Store the score as a string in localStorage
const flashcardImageElement = document.getElementById('flashcard-image');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const overlayElement = document.getElementById('overlay');
const levelInfoElement = document.getElementById('level-info'); // Get the level info element
const scoreDisplay = document.getElementById('score-info');
if(currentLevelIndex >= flashcards.length) {
	// Hide the start screen
	document.getElementById('start-screen').style.display = 'none';
	// Show the end screen
	document.getElementById('end-screen').style.display = 'flex';
}

function displayFlashcard() {
	flashcardImageElement.src = flashcards[currentLevelIndex][currentFlashcardIndex].imageSrc;
	answerElement.value = '';
	overlayElement.style.display = 'none'; // Hide overlay
	nextButton.disabled = true; // Disable next button until the answer is submitted
	// Update level info
	levelInfoElement.textContent = `Level: ${currentLevelIndex + 1}`;
}

function checkAnswer() {
	const userAnswer = answerElement.value.trim().toLowerCase();
	const correctAnswers = flashcards[currentLevelIndex][currentFlashcardIndex].answer;
	// Check if the user's answer matches any of the correct answers
	if(correctAnswers.includes(userAnswer)) {
		AnswerResult(true);
		score++; // add +1 to the score
		localStorage.setItem('score', JSON.stringify(score));
		scoreDisplay.textContent = `Score: ${score}`; // Update the score display
	} else {
		AnswerResult(false);
		return; // Stop further execution if the answer is incorrect
	}
	// Disable the submit button after checking the answer
	submitButton.disabled = true;
	// Enable the next button after submitting the answer
	nextButton.disabled = false;
	localStorage.setItem('flashcards', JSON.stringify(flashcards));
	localStorage.setItem('currentLevelIndex', JSON.stringify(currentLevelIndex));
	localStorage.setItem('currentFlashcardIndex', JSON.stringify(currentFlashcardIndex));
}

function AnswerResult(isCorrect) {
	overlayElement.textContent = ''; // Remove text content
	overlayElement.style.display = 'block';
	overlayElement.classList.remove('correct', 'incorrect'); // Remove any existing highlight
	if(isCorrect) {
		overlayElement.classList.add('correct'); // Add green highlight
	} else {
		overlayElement.classList.add('incorrect'); // Add red highlight
	}
}

function nextFlashcard() {
	currentFlashcardIndex++;
	if(currentFlashcardIndex < flashcards[currentLevelIndex].length) {
		displayFlashcard();
		// Re-enable the submit button for the next flashcard
		submitButton.disabled = false;
	} else {
		// If all flashcards for the current level are completed, move to the next level
		currentLevelIndex++;
		if(currentLevelIndex < flashcards.length) {
			currentFlashcardIndex = 0; // Reset flashcard index for the new level
			displayFlashcard();
			// Re-enable the submit button for the next level
			submitButton.disabled = false;
			document.getElementById('level-screen').style.display = 'flex';
		} else {
			// Indicate that the flashcard system is finished
			AnswerResult(false);
			// Hide the submit and next buttons
			submitButton.style.display = 'none';
			nextButton.style.display = 'none';
			// Show the end screen
			document.getElementById('end-screen').style.display = 'flex';
		}
	}
	localStorage.setItem('flashcards', JSON.stringify(flashcards));
	localStorage.setItem('currentLevelIndex', JSON.stringify(currentLevelIndex));
	localStorage.setItem('currentFlashcardIndex', JSON.stringify(currentFlashcardIndex));
}
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextFlashcard);
displayFlashcard();
scoreDisplay.textContent = `Score: ${score}`;
document.getElementById('start-button').addEventListener('click', function() {
	document.getElementById('start-screen').style.display = 'none';
});
document.getElementById('nextLevel-button').addEventListener('click', function() {
	document.getElementById('level-screen').style.display = 'none';
});