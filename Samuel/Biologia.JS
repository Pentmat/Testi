const questions = [
  {
    question: "Mikä näistä on nisäkkään piirre?",
    options: ["Eläin, joka hengittää kiduksilla", "Eläin, joka munii munia.", "Eläin, joka synnyttää eläviä poikasia", " Eläin, joka on vaihtolämpöinen"],
    answer: "Eläin, joka synnyttää eläviä poikasia",
    difficulty: "easy"
  },

  {
        question: "Millä näistä eläimistä on sorkat",
        options: ["Koiralla", "Hevosella", "Lehmällä", "Lampaalla"],
        answer: "Lehmällä",
        difficulty: "easy"
      },

    {
        question: "Mikä näistä linnuista on lento kykyinen",
        options: ["Kana", "Flamingo", "Strutsi", "Kiivi"],
        answer: "Flamingo",
        difficulty: "easy"
     },

    {
        question: "Tämä elin suorittaa monia tehtäviä, kuten aineenvaihduntaa, detoksifikaatiota, sappin tuotantoa ja proteiinisynteesiä. Tämä elin on?",
        options: ["Maksa", "Mahalaukku", "Keuhkot", "Ohutsuoli"],
        answer: "Maksa",
        difficulty: "easy"
      },

    {
        question: "Mikä näistä nisäkkäistä munii?",
        options: ["Lepakko", "Koala", "Kenguru", "Nokkasiili"],
        answer: "Nokkasiili",
        difficulty: "easy"
      },

    {
      question: "Mikä on ihmisen tärkein elin?",
      options: ["Sydän", "Aivot", "Keuhkot", "Maksa"],
      answer: "Aivot",
      difficulty: "easy"
    },

    {
        question: "Suomen yleisin puulaji",
        options: ["Mänty", "Kuusi", "hieskoivu", "raudaskoivu"],
        answer: "Mänty",
        difficulty: "easy"
      },

    {
        question: "Mikä seuraavista prosesseista on tärkeä puulle.",
        options: ["Mahlan tulo", "Lehtien putoaminen", "Soluhengitys", "Fotosynteesi"],
        answer: "Fotosynteesi",
        difficulty: "easy"
      },

      {
        question: "Mikä on lihasten tarkoitus",
        options: ["Liikkeen aikaansaaminen", "Lämmön säätely", "kehon suojaaminen", "kehon ylläpitäminen"],
        answer: "Liikkeen aikaansaaminen",
        difficulty: "easy"
      },
    
      {
        question: "Miksi kaloilla on kidukset?",
        options: ["Ne ovat osa kalan ruuansulatusjärjestelmää", "Ne auttavat niitä hengittämään vedessä.", "Ne auttavat niitä hankkimaan ravintoa vedestä.", "Ne ovat osa niiden lisääntymisjärjestelmää."],
        answer: "Ne auttavat niitä hengittämään vedessä.",
        difficulty: "easy"
      },

      {
        question: "Mitä veri kuljettaa?",
        options: ["Happea, ravintoa lämpöä", "Happea, rautaa nestettä", "Happea, ravintoa sokeria", "Happea, rautaa luuainesta"],
        answer: "Happea, ravintoa lämpöä",
        difficulty: "medium"
      },

      {
        question: "Miksi jotkut eläimet ovat vaihtolämpöisiä?",
        options: ["Pystyäkseen vaihtamaan väriä nopeasti saalistuksen aikana.", "Estääkseen veden hikoamisen lämpimissä ympäristöissä.", "Sovittaakseen ruumiinlämpönsä ympäristön lämpötilan mukaan.", "Säilyttääkseen lämpötilansa vakiona erilaisissa ympäristöissä."],
        answer: "Säilyttääkseen lämpötilansa vakiona erilaisissa ympäristöissä.",
        difficulty: "medium"
      },


    {
        question: "Millä eläimellä on suurimmat aivot niiden kehon kokoon verrattuna",
        options: ["Sinivalaalla", "Ihmisellä", "Delfiinillä", "Variksella"],
        answer: "Delfiinillä",
        difficulty: "medium"
      },

    {
        question: "Mitä on plakki?",
        options: ["Hampaisiin muodostuva bakteeri kerros", "Kurkkuun muodustuva mätä", "hengitys tieten tuekkeutuma.", "Vaarallinen maha bakteeri"],
        answer: "Hampaisiin muodostuva bakteeri kerros",
        difficulty: "medium"
      },

    {
        question: "Mitä näistä hirvi väittämistä on totta.",
        options: ["Hirven turkkin väri pysyy samana ympäri vuoden.", "hirvet eivät näe kovin hyvän, sillä niillä on pienet silmät", "hirvet pudottavat sarvensa kerran vuodessa", "Hirvet ovat yksinäisiä eläimiä"],
        answer: "hirvet pudottavat sarvensa kerran vuodessa",
        difficulty: "medium"
      },
    {
        question: "Mikä estää luiden haurastumista",
        options: ["Jodi", "Vesi", "C-vitamiini", "Kalsium"],
        answer: "Kalsium",
        difficulty: "medium"
      },
   
    {
        question: "Mikä näistä ei ole eliö",
        options: ["Koralli", "Viirus", "Bakteeri", "meritähti"],
        answer: "Viirus",
        difficulty: "medium"
      },
    
    {
        question: "Evoluutio on?",
        options: ["Jatkuva prosessi, jossa lajit muuttuvat ja sopeutuvat ympäristöön.", "Jatkuva Prosessi missä lajit, kehittyvät vahvojen piirteiden mukaisesti", "Jatkuva Prosessi, jossa laji kehittyy ruokavaljonsa mukaisesti", "Jatkuva prosessi, jossa laji kehittyy oman tarpeidansa mukaisesti"],
        answer: "Jatkuva prosessi, jossa lajit muuttuvat ja sopeutuvat ympäristöön.",
        difficulty: "medium"
      },
    
    {
        question: "kehon suurin elin, se suojaa kehoa ympäristön haitallisilta tekijöiltä ja ylläpitää kehon lämpötilaa.",
        options: ["Lihas", "Luut", "Iho", "Keuhkot"],
        answer: "Iho",
        difficulty: "medium"
      },
      
    {
        question: "Mikä toiminta alue on ihmisen takaraivoissa.",
        options: ["Näkö-alue", "Aivo-alue", "Hermo-alue", "Maku-alue"],
        answer: "Näkö-alue",
        difficulty: "medium"
      },
      {
        question: "Miten matelijat eroavat muista selkärankaisista eläimistä.",
        options: ["Ne munivat munia.", "Matelijoilla on aina kylkiluut", "Niillä on aina täysin sileä iho.", "Ne ovat aina kylmäverisiä."],
        answer: "Ne munivat munia.",
        difficulty: "hard"
      },

    {
        question: "Mikä on harvinaisin veriryhmä",
        options: ["B-", "O", "A", "AB-"],
        answer: "AB-",
        difficulty: "hard"
      },

    {
        question: "Miksi suurin osa eläinlajeista on selkärangattomia?",
        options: ["Koska selkärangattomat eläimet ovat kehittyneet ensin maapallolla.", "Koska selkärangattomat eläimet ovat sopeutuneet paremmin erilaisiin elinympäristöihin kuin selkärankaiset.", "Koska selkärangattomat eläimet ovat yleensä pienikokoisempia ja helpommin piiloutuvia kuin selkärankaiset.", "Koska selkärangattomien eläinten keho on yksinkertaisempi rakenteeltaan kuin selkärankaisten."],
        answer: "Koska selkärangattomien eläinten keho on yksinkertaisempi rakenteeltaan kuin selkärankaisten.",
        difficulty: "hard"
      },

    {
        question: "Mikä on sienirihmasto?",
        options: ["sienen maanalainen osa", "Sienen sisäinen osa", "Sienen maanpäällinen osa", "Sienen juuri osa"],
        answer: "Sienen maanpäällinen osa",
        difficulty: "hard"
      },

    {
        question: "sydän...",
        options: ["..Pumpaa verta kehon ympäri, jotta lihakset saavat happea verisuonien kautta.", "..Pumpaa verta kehon ympäri, jotta luut saavat ravinteita", "..Pumpaa verta kehon ympäri, jotta keho pysyy lämpimänä", "..Pumpaa verta kehon ympäri, jotta solut saavat happea ja ravinteita."],
        answer: "..Pumpaa verta kehon ympäri, jotta solut saavat happea ja ravinteita.",
        difficulty: "hard"
      },

    
      {
        question: "Mitä tarkoitetaan fotosynteesillä",
        options: ["Fotosynteesi on prosessi, jossa kasvit käyttävät maaperästä saatavaa energiaa kasvamiseen ja lisääntymiseen.", "Fotosynteesi on prosessi, jossa kasvit käyttävät auringonvalon energiaa muuntaakseen hiilidioksidia ja vettä hapeksi sekä sokeriksi.", "Fotosynteesi on prosessi, jossa kasvit käyttävät maaperästä saatavaa energiaa kasvamiseen ja lisääntymiseen.", "Fotosynteesi on prosessi, jossa kasvit käyttävät auringonvalon energiaa muuntaakseen hiilidioksidia ja vettä hapeksi ja sokeriksi."],
        answer: "Fotosynteesi on prosessi, jossa kasvit käyttävät auringonvalon energiaa muuntaakseen hiilidioksidia ja vettä hapeksi ja sokeriksi.",
        difficulty: "hard"
      },
    

      {
        question: "Mikä veriryhmä on yleisesti tunnettu antajaveriryhmänä hätätilanteissa, jota voidaan antaa kaikille vastaanottajille?",
        options: ["B", "O", "A", "AB"],
        answer: "O",
        difficulty: "hard"
      },
    
      {
        question: "Miksi ravintoaineet ovat välttämättömiä keholle?",
        options: ["Ne vaikuttavat suoraan unen laatuun ja kehon lepotilaan.", "Ne antavat keholle suojaa ulkoisia uhkia vastaan.", "Ne auttavat kehoa suorittamaan erilaisia kemiallisia reaktioita.", "Ne auttavat kehoa valmistamaan C-vitamiinia. mikä on vastaus tähän"],
        answer: "Ne auttavat kehoa suorittamaan erilaisia kemiallisia reaktioita.",
        difficulty: "hard"
      },


      {
        question: "Miksi Simpanssi on ihmisen läheisin sukulainen.",
        options: ["Simpansilla on samanlainen aivojen rakenne ja kyky oppia monimutkaisia tehtäviä kuin ihmisillä.", "Ne jakavat yhtäläisen kulttuurin monien käytäntöjen, kuten työkalujen käytön, osalta.", "Niillä on samanlainen sosiaalinen hierarkia ja yhteisöllinen käyttäytyminen kuin ihmisillä.", "Simpansseilla on samnan kaltainen kyky kehittää myös kieliä kuin ihmiset."],
        answer: "Simpansilla on samanlainen aivojen rakenne ja kyky oppia monimutkaisia tehtäviä kuin ihmisillä.",
        difficulty: "hard"
      },

      {
        question: "Mitä kaikilla lajeilla on",
        options: ["Geneettinen", "keuhkot", "O", "Aineenvaidunta", "Aivot"],
        answer: "Geneettinen koodi",
        difficulty: "hard"
      },
    
      

  ];

  const easyBtn = document.getElementById('easy-btn');
  const mediumBtn = document.getElementById('medium-btn');
  const hardBtn = document.getElementById('hard-btn');
  const startBtn = document.getElementById('start-btn');
  const endBtn = document.getElementById('end-btn'); 
  const reloadBtn = document.getElementById('reload-btn');
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const resultElement = document.getElementById('result');
  
  let currentQuestionIndex = 0;
  let selectedDifficulty = null;
  let correctAnswers = 0;
  let quizEnded = false;
  
  easyBtn.addEventListener('click', () => selectDifficulty('easy'));
  mediumBtn.addEventListener('click', () => selectDifficulty('medium'));
  hardBtn.addEventListener('click', () => selectDifficulty('hard'));
  startBtn.addEventListener('click', startQuiz);
  endBtn.addEventListener('click', endQuiz); 
  reloadBtn.addEventListener('click', () => {
    location.reload(); 
  });
  
  function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    startBtn.style.display = 'inline-block';
  }
  
  function startQuiz() {
    easyBtn.style.display = 'none';
    mediumBtn.style.display = 'none';
    hardBtn.style.display = 'none';
    startBtn.style.display = 'none';
    endBtn.style.display = 'inline-block'; 
    correctAnswers = 0;
    currentQuestionIndex = 0;
    quizEnded = false; 

    document.getElementById("Welcome-message").style.display = 'none';

    showQuestion();

    showQuestion();
  }
  
  function showQuestion() {
    if (quizEnded) return; 
  
    const filteredQuestions = questions.filter(q => q.difficulty === selectedDifficulty);
    const question = filteredQuestions[currentQuestionIndex];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => {
        if (quizEnded) return; 
        if (option === question.answer) {
          
          correctAnswers++;
          button.classList.add('correct');
        } else {
          
          const correctOptionIndex = question.options.indexOf(question.answer);
          const correctButton = optionsElement.children[correctOptionIndex];
          correctButton.classList.add('correct');
          button.classList.add('incorrect');
        }
        if (currentQuestionIndex === filteredQuestions.length - 1) {
          endQuiz(); 
        } else {
          currentQuestionIndex++;
          showQuestion();
        }
      });
      optionsElement.appendChild(button);
    });
  }
  
  function endQuiz() {
    quizEnded = true; 
    const totalQuestions = 10; 
    const percentage = (correctAnswers / totalQuestions) * 100;
    resultElement.textContent = `You got ${correctAnswers} out of ${totalQuestions} (${percentage.toFixed(2)}%) questions correct.`;
    resultElement.style.display = 'block';
    endBtn.style.display = 'none'; 
  }