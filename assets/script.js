const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionsContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const quizRules = document.getElementById('quiz-rules')
const easyLevel = document.getElementById('easy')
const hardLevel = document.getElementById('hard')
const finishText = document.getElementById('finish-text')
let scorePlaceholder = document.getElementById('score')
const playAgain = document.getElementById('play-again-btn')

// const container = document.getElementById('container')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    quizRules.classList.add('hide')
    easyLevel.classList.add('hide')
    hardLevel.classList.add('hide')
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
        // startButton.innerText = 'Restart'
        // startButton.classList.remove('hide')
        //  step 1 questionsContainerElement to add hide
        questionsContainerElement.classList.add('hide')
        finishText.classList.remove('hide')
        scorePlaceholder.classList.remove('hide')
        scorePlaceholder = `YOU HAVE SCORE ${score}`
        playAgain.classList.remove('hide')

        // finish div to add
        // you scored 20 placeholsder
        // play again buttton

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
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'AWS is a cloud service by which company?',
        answers: [
            {text: 'Apple', correct: false },
            {text: 'Google', correct: false},
            {text: 'Amazon', correct: true},
            {text: 'Microsoft', correct: false}
        ]
    },
    
    {
        question: 'which of these became the first company to hit $1 trillion in evaluation?',
        answers: [
            {text: 'Apple', correct: true },
            {text: 'Google', correct: false},
            {text: 'Amazon', correct: false},
            {text: 'Saudi Aramaco', correct: false}
        ]
    },
    {
        question: 'the Android operating system was first developed by who?',
        answers: [
            {text: 'Netflix', correct: false},
            {text: 'Samsung', correct: false},
            {text: 'Android Inc', correct: true},
            {text: 'Google', correct: false}
        ]
    },
    {
        question: 'twitter was recently bought by whom?',
        answers: [
            {text: 'Sundar Pichai', correct: false },
            {text: 'Elon Mask', correct: true},
            {text: 'Jeff Bezos', correct: false},
            {text: 'Rishi Sunak', correct: false}
        ]
    },
    {
        question: 'In 2017, Samsung overtook which Silicon Valley company as the largest semiconductor chip maker in the world?',
        answers: [
            {text: 'Intel', correct: true },
            {text: 'IBM', correct: false},
            {text: 'Micron', correct: false},
            {text: 'Qualcom', correct: false}
        ]
    },
    {
        question: 'Which music, video streaming and podcast service was officially launched in October 2008?',
        answers: [
            {text: 'NetFlix', correct: false },
            {text: 'Audible', correct: false},
            {text: 'Spotify', correct: true},
            {text: 'FM Radio', correct: false}
        ]
    },
    {
        question: 'as of 2022 which comapny is in the lead for cloud computing?',
        answers: [
            {text: 'Microsoft Azure', correct: false},
            {text: 'Amazon AWS', correct: true},
            {text: 'Google Cloud', correct: false},
            {text: 'Tencent', correct: false}
        ]
    },
    {
        question: 'alibaba and Tencent are the leading tech companies in which country?',
        answers: [
            {text: 'Saudi Arabia', correct: false},
            {text: 'Malaysia', correct: false},
            {text: 'China', correct: true},
            {text: 'United Arab Emerites', correct: false}
        ]
    },
    {
        question: 'monzo is a online banking fintech based in which country?',
        answers: [
            {text: 'UK', correct: true },
            {text: 'Germany', correct: false},
            {text: 'Sweden', correct: false},
            {text: 'USA', correct: false}
        ]
    }
]