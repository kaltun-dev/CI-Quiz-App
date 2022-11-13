// questions object array.
let questions = [
    {
        question: 'Who founded LinkedIn?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'AWS is a cloud service by which company?',
        answer: [
            {text: 'Apple', correct: false },
            {text: 'Google', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Microsoft', correct: false}
        ]
    },
    
    {
        question: 'Which of these became the first company to hit $1 trillion in evaluation?',
        answer: [
            {text: 'Apple', correct: true },
            {text: 'Google', correct: false},
            {text: 'Amazon', correct: false},
            {text: 'Saudi Aramaco', correct: false}
        ]
    },
    {
        question: 'The Android operating system was first developed by who?',
        answer: [
            {text: 'Netflix', correct: false},
            {text: 'Samsung', correct: false},
            {text: 'Android Inc', correct: true},
            {text: 'Google', correct: false}
        ]
    },
    {
        question: 'Twitter was recently bought by whom?',
        answer: [
            {text: 'Sundar Pichai', correct: false },
            {text: 'Elon Mask', correct: true},
            {text: 'Jeff Bezos', correct: false},
            {text: 'Rishi Sunak', correct: false}
        ]
    },
    {
        question: 'In 2017, Samsung overtook which Silicon Valley company as the largest semiconductor chip maker in the world?',
        answer: [
            {text: 'Intel', correct: true },
            {text: 'IBM', correct: false},
            {text: 'Micron', correct: false},
            {text: 'Qualcom', correct: false}
        ]
    },
    {
        question: 'Which music, video streaming and podcast service was officially launched in October 2008?',
        answer: [
            {text: 'NetFlix', correct: false },
            {text: 'Audible', correct: false},
            {text: 'Spotify', correct: true},
            {text: 'FM Radio', correct: false}
        ]
    },
    {
        question: 'As of 2022 which company is in the lead for cloud computing?',
        answer: [
            {text: 'Microsoft Azure', correct: false},
            {text: 'Amazon AWS', correct: true},
            {text: 'Google Cloud', correct: false},
            {text: 'Tencent', correct: false}
        ]
    },
    {
        question: 'Alibaba and Tencent are the leading tech companies in which country?',
        answer: [
            {text: 'Taiwan', correct: false},
            {text: 'Malaysia', correct: false},
            {text: 'China', correct: true},
            {text: 'Singapore', correct: false}
        ]
    },
    {
        question: 'Monzo is a online banking fintech based in which country?',
        answer: [
            {text: 'UK', correct: true },
            {text: 'Germany', correct: false},
            {text: 'Sweden', correct: false},
            {text: 'USA', correct: false}
        ]
    },
    {
        question: 'Which of these tech startups in not from the UK?',
        answer: [
            {text: 'Revalut', correct: false },
            {text: 'Deliveroo', correct: false},
            {text: 'Monzo', correct: false},
            {text: 'Airbnb', correct: true}
        ]
    },
    {
        question: 'Which company invented the hard disk drive?',
        answer: [
            {text: 'Hitachi', correct: false},
            {text: 'Xrox', correct: false},
            {text: 'Fujitsu', correct: false},
            {text: 'IBM', correct: true}
        ]
    },
    {
        question: 'Who created TikTok?',
        answer: [
            {text: 'Jack Ma', correct: false },
            {text: 'Xi jinping', correct: false},
            {text: 'Zhang Yiming', correct: true},
            {text: 'Yoa Ming', correct: false}
        ]
    },
    {
        question: ' Google Chrome has a hidden mini-game that involves what?',
        answer: [
            {text: 'Flappy Bird with a penguin', correct: false },
            {text: 'ASCII Tetris', correct: false},
            {text: 'A T-rex hurdeling cacti', correct: true},
            {text: 'A typing game', correct: false}
        ]
    },
    {
        question: ' Who created Siri (the AI powered digital assistant)?',
        answer: [
            {text: 'MIT', correct: false },
            {text: 'Apple', correct: false},
            {text: 'Berkeley', correct: false},
            {text: 'SRI/DARPA', correct: true}
        ]
    },
    {
        question: ' What is the worlds best-Selling PC game?',
        answer: [
            {text: 'Tetris', correct: true },
            {text: 'World of Warcraft', correct: false},
            {text: 'Grand Theft Auto', correct: false},
            {text: 'Minecraft', correct: false}
        ]
    },
    {
        question: 'What year was Youtube Created?',
        answer: [
            {text: '2002', correct: false },
            {text: '2003', correct: false},
            {text: '2004', correct: false},
            {text: '2005', correct: true}
        ]
    },
    {
        question: 'This company is the largest Smartphone maker in South Korea?',
        answer: [
            {text: 'LG', correct: false },
            {text: 'Samsung', correct: true},
            {text: 'Honor', correct: false},
            {text: 'Huawei', correct: false}
        ]
    },
    {
        question: 'This company got its start by selling books online?',
        answer: [
            {text: 'Ebay', correct: false },
            {text: 'Argos', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Toshiba', correct: false}
        ]
    },
    {
        question: 'The first product of this company was a rice cooker?',
        answer: [
            {text: 'Sony', correct: true },
            {text: 'Kitchen Aid', correct: false},
            {text: 'LG', correct: false},
            {text: 'Huawei', correct: false}
        ]
    }
];
// getting elements from the DOM
let startButton = document.getElementById('start-btn');
let nextButton = document.getElementById('next-btn');
let questionsContainerElement = document.getElementById('question-container');
let questionElement = document.getElementById('question');
let answerButtonsElement = document.getElementById('answer-buttons');
const quizRules = document.getElementById('quiz-rules');
let finishText = document.getElementById('finish-text-score');
const playAgain = document.getElementById('play-again-btn');
const rulesDiv = document.getElementById('rules-div');
const closeBtn = document.getElementById('close-btn');
let myButton = document.getElementById('myButton');
let myLabel = document.getElementById('myLabel');
let form = document.getElementById('form');
let myName = document.getElementById('myName');
let aboveScore = document.getElementById('above-score');
const infoFront = document.getElementById('info');

// global variables
let shuffledQuestions;
let currentQuestionIndex;
let score;

// pop up card for quiz instructions/how to play
quizRules.addEventListener('click', function() {
    quizRules.classList.add('hide');
    infoFront.classList.add('hide');
    form.classList.add('hide');
    rulesDiv.classList.remove('hide');
    finishText.classList.add('hide');
    closeBtn.addEventListener('click', reset);
    console.log(quizRules);
});

myButton.addEventListener('click', function () {
    myName = document.getElementById('myName').value;
    if (myName) {
        startButton.classList.remove('hide');
        finishText.classList.add('hide');

    } else {
        finishText.classList.remove('hide');
        document.getElementById('finish-text-score').innerHTML = `OOPS, you didn't type your name. Please type and then press submit.`;
    }
});

// play button event listener
startButton.addEventListener('click', startGame);

//what to do when play is pressed.
function startGame() {
    finishText.classList.add('hide');
    infoFront.classList.add('hide');
    startButton.classList.add('hide');
    quizRules.classList.add('hide');
    myButton.classList.add('hide');
    myLabel.classList.add('hide');
    form.classList.add('hide');
    questionsContainerElement.classList.remove('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
    aboveScore.classList.remove('hide');
}

//when next button is clicked: show current question + 1, increment and set next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

// what to do for next question
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
    
// for-loops the questions object and determins the correct answer from boolean correct: true.
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click',selectAnswer);
        answerButtonsElement.appendChild(button);
        if ( answer.correct) {
            button.dataset.correct = true;
       
        } 
       
    });
}

//clears the buttons for next question
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    
}

//selects answer from questions object and increments score if correct
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    if (correct) score++;
    aboveScore.textContent = `Score: ${score} / 20.`;
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
    });

    // if there are questions left then show next button 
    if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide');
    } else { // else end the game and show the score after name input
        questionsContainerElement.classList.add('hide');
        aboveScore.classList.add('hide');
        if (score >= 15) {
            finishText.classList.remove('hide');
            document.getElementById('finish-text-score').innerHTML = `Wow, your knowledge of tech comapanies is AMAZING ${myName}. You have scored ${score}/ ${questions.length}. Thank you for playing this Quiz.`;
            playAgain.classList.remove('hide');
        } else if (score > 10 && score < 15 ) {
            finishText.classList.remove('hide');
            document.getElementById('finish-text-score').innerHTML = `Amazing work ${myName}. You're on a roll. You have scored ${score}/ ${questions.length}. Thank you for playing this Quiz.`;
            playAgain.classList.remove('hide');
        } else if (score > 5 && score < 10 ) {
            finishText.classList.remove('hide');
            document.getElementById('finish-text-score').innerHTML = `Good effort ${myName}. You are getting there. You have scored ${score}/ ${questions.length}. Thank you for playing this Quiz.`;
            playAgain.classList.remove('hide');
        } else {
            finishText.classList.remove('hide');
            document.getElementById('finish-text-score').innerHTML = `Good try ${myName}. It's all about trying. Better luck next time. You have scored ${score}/ ${questions.length}. Thank you for playing this Quiz,`;
            playAgain.classList.remove('hide');
          
    }
        
  }
}

// document.getElementById('above-score').innerHTML = `${score} / 20.`;

//play again resets game to initial setting
playAgain.addEventListener('click', function() {
reset();
});

//initial/reset setting for the playagain  quiz
function reset () {
    questionsContainerElement.classList.add('hide');
    score = 0;
    aboveScore.classList.add('hide');
    quizRules.classList.remove('hide');
    finishText.classList.add('hide');
    playAgain.classList.add('hide');
    rulesDiv.classList.add('hide');
    form.classList.remove('hide');
    myButton.classList.remove('hide');
    myLabel.classList.remove('hide');
    infoFront.classList.remove('hide');
}

//adds class correct to style so color can change
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

//clears class styling for next question
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
