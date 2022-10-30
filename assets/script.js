const startButton = document.getElementById('start-btn')
const questionsContainerElemenent = documents.getElementById('questions-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = documment.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainerElemenent.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {

}


function selectAnswer(){

}

const questions = [
    {
        question: 'who founded LinkedIn?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'AWS is a cloud service by which company?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    
    {
        question: 'which tech company started from a garage?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'the Android operating system was first developed by who?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'twitter was recently bought by whom?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'who is the leading comany for AI technologies?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'what does meta specialise in?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'as of 2022 which comapny is in the lead for cloud computing?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'alibaba is a leading tech company in which country?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    },
    {
        question: 'monzo is an online bank based in which country?',
        answers: [
            {text: 'answer1', correct: true },
            {text: 'answer2', correct: false},
            {text: 'answer3', correct: false},
            {text: 'answer4', correct: false}
        ]
    }
]