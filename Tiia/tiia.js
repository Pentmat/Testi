// Tässä tiedostossa on käytetty apuna nettisivua: https://simplestepscode.com/javascript-quiz-tutorial/
// ------------------------------------------//

// Minun historian tehtävääni liittyvät kysymykset:
let myQuestions = [
	{
		question: "Mitä tarkoittaa demokratia?",
		answers: {
			a: 'Kansanvaltaa',
			b: 'Kreikkalaista ruokaa',
			c: 'Yksinvaltaa'
		},
		correctAnswer: 'a'
	},
    {
		question: "Ketkä olivat Sokrates ja Platon?",
		answers: {
			a: 'Hallitsijoita',
			b: 'Filosofeja',
			c: 'Poliitikkoja'
		},
		correctAnswer: 'b'
	},
    {
		question: "Kuka maalasi Mona Lisa-maalauksen?",
		answers: {
			a: 'Michelangelo Buanarrotti',
			b: 'Vincent van Gogh',
			c: 'Leonardo da Vinci'
		},
		correctAnswer: 'c'
	},
    {
		question: "Mikä oli Rooman virallinen kieli?",
		answers: {
			a: 'Kreikka',
			b: 'Italia',
			c: 'Latina'
		},
		correctAnswer: 'c'
	},
	{
		question: "Mitä tarkoittaa Reformaatio?",
		answers: {
			a: 'Ripittäytymistä',
			b: 'Uskonpuhdistusta',
			c: 'Hautaamista'
		},
		correctAnswer: 'b'
	}  
];

// Määritellään divit ja js.
let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');

// Tämä näyttää kysymykset sivulla.
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

// Tehdään funktio, joka käynnistää koodin.
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // Määritetään output tyhjäksi.
        let output = [];
        let answers;
    
        // Jokaista kysymystä kohden.
        for(let i=0; i<questions.length; i++){
            
            // Tyhjennetään vastauksien lista.
            answers = [];
    
            // Jokaista kysymystä kohden.
            for(letter in questions[i].answers){
    
                // Lisätään html radio-painike, joka luo monen vaihtoehdon mahdollisuudet.
                answers.push(
                    '<label>'
                        + '<input type="radio" id="joku" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // Lisätään tämä kysymys ja sen vastaukset ouput.
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // Yhdistetään output lista yhteen html stringiin ja lisätään se pelisivulle.
        quizContainer.innerHTML = output.join('');
    }

    // Tehdään funktio, jossa määritellään seuraavat asiat:
    function showResults(questions, quizContainer, resultsContainer){
        // Kerätään vastaukset quiz nimisestä containerista.
        let answerContainers = quizContainer.querySelectorAll('.answers');
        
        // Pidetään kirjaa käyttäjän vastauksista.
        let userAnswer = '';
        let numCorrect = 0;
        
        // Jokaista kysymystä kohden.
        for(let i=0; i<questions.length; i++){
    
            // Löydetään valittu vastaus.
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // Jos vastaus on oikein, niin lisätään piste.
            if(userAnswer===questions[i].correctAnswer){
                // Tämä lisää yhden numeron lisää oikeisiin vastauksiin.
                numCorrect++;
                
                // Värjätään oikea vastaus vihreällä, jos käyttäjä vastasi oikein.
                answerContainers[i].style.color = 'lightgreen';
            }
            // Lisätään vaihtoehtoinen vastausehto (mm. tyhjä tai väärin)
            else{
                // Värjätään väärä tai tyhjä vastaus punaisella, jos käyttäjä vastasi väärin.
                answerContainers[i].style.color = 'red';
            }
        }
        // Tämä näyttää oikeiden vastauksien määrän kokonaiskysymyksien määrästä (esim. 1/5).
        resultsContainer.innerHTML = numCorrect + ' oikein ' + questions.length + ':stä';

        // Vastauksia pisteiden perusteella:
        if(numCorrect == 5){
            document.getElementById('palaute').innerHTML = 'Kiisu on erittäin tyytyväinen, sait täydet pisteet!';
        }   
        else if(numCorrect == 4){
            document.getElementById('palaute').innerHTML = 'Kiisu on melko tyytyväinen, sait melkein kaikki oikein!';
        }
        else if(numCorrect == 3){
            document.getElementById('palaute').innerHTML = 'Kiisu on tyytyväinen, mutta vielä voisi mennä paremmin.';
        }
        else if(numCorrect == 2){
            document.getElementById('palaute').innerHTML = 'Kiisun mielestä sinun pitää harjoitella vielä.';
        }
        else if(numCorrect == 1){
            document.getElementById('palaute').innerHTML = 'Kiisu  ei ole tyytyväinen, kokeile uudelleen!';
        }
        else {
            document.getElementById('palaute').innerHTML = 'Kiisu sanoo, että et ole vastannut mihinkään oikein.';
        }
    }

	// Tämä näyttää kysymykset sivulla
	showQuestions(questions, quizContainer);

	// Kun käyttäjä painaa "tarkista" -> Funktio näyttää tulokset.
	submitButton.onclick = function(){

		showResults(questions, quizContainer, resultsContainer);
        submitButton.disabled = true
	}
}