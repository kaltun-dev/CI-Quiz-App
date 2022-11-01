const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionsContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if ( answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
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