
// global variables
// const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionsContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const quizRules = document.getElementById('quiz-rules')
const easyLevel = document.getElementById('easy')
const mediumLevel = document.getElementById('medium')
const hardLevel = document.getElementById('hard')
let finishText = document.getElementById('finish-text-score')
const playAgain = document.getElementById('play-again-btn')
const rulesDiv = document.getElementById('rules-div')
const closeBtn = document.getElementById('close-btn')
let myName = document.getElementById('myName')
let myButton = document.getElementById('myButton')
const myLabel = document.getElementById('myLabel')
const form = document.getElementById('form')




let shuffledQuestions, currentQuestionIndex
let score;
let rounds;

//initial setting for the quiz
function initial () {
    
    questionsContainerElement.classList.add('hide')
    score = 0
    // startButton.classList.remove('hide')
    quizRules.classList.remove('hide')
    easyLevel.classList.remove('hide')
    mediumLevel.classList.remove('hide')
    hardLevel.classList.remove('hide')
    finishText.classList.add('hide')
    playAgain.classList.add('hide')
    rulesDiv.classList.add('hide')
    form.classList.add('hide')
    
    
    
}

//event listener for different levels and the next button
easyLevel.addEventListener('click', function() {
    // rounds = Number(button.dataset.rounds);
    // shuffledQuestions.length = 10;
    startGame();
     easyLevel = questions.slice(0,9);
})
mediumLevel.addEventListener('click', startGame, function() {
    shuffledQuestions.length = 15;
    rounds = Number(button.dataset.rounds);
})
hardLevel.addEventListener('click', startGame, function() {
    shuffledQuestions.length = 20;
    rounds = Number(button.dataset.rounds);
})


//show current question, increment and set next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//what to do when quiz starts
function startGame() {
    // startButton.classList.add('hide')
    quizRules.classList.add('hide')
    easyLevel.classList.add('hide')
    mediumLevel.classList.add('hide')
    hardLevel.classList.add('hide')
    myLabel.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainerElement.classList.remove('hide')
    score = 0
    setNextQuestion()
    

}
// what to do for next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


// for-loops the questions object and determins the correct answer from boolean correct: true.
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
        if ( answer.correct) {
            button.dataset.correct = true
       
        } 
       
    })
}

//clears the buttons for next question
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    
}

//selects answer from questions object and increments score if correct
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct

    if (correct) score++;
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    // if there are questions left then show next button 
    if (shuffledQuestions.length > currentQuestionIndex + 1 ) {
        nextButton.classList.remove('hide')
    } else { // else end the game and show the score after name input
        questionsContainerElement.classList.add('hide')
        form.classList.remove('hide')
        myLabel.classList.remove('hide')
        myName.classList.remove('hide')
        myButton.classList.remove('hide')
        document.getElementById('myButton').addEventListener('click', function () {
             myName = document.getElementById('myName').value
             
            if (myName) {
                form.classList.add('hide')
                finishText.classList.remove('hide');
                document.getElementById('finish-text-score').innerHTML = `Congratulations on finishing the game ${myName}. You have scored ${score}/ ${questions.length}`;
                playAgain.classList.remove('hide')

            } else {
                finishText.classList.remove('hide');
                document.getElementById('finish-text-score').innerHTML = `Please type your name`;
            }
    })
        
    
  }
}


//play again resets game to initial setting
playAgain.addEventListener('click', function() {
initial()


})

// pop up card for quiz rules with close button
quizRules.addEventListener('click', function() {
    // startButton.classList.add('hide')
    quizRules.classList.add('hide')
    easyLevel.classList.add('hide')
    hardLevel.classList.add('hide')
    mediumLevel.classList.add('hide')
    questionsContainerElement.classList.add('hide')
    rulesDiv.classList.remove('hide')
    closeBtn.addEventListener('click', initial)

})
//adds class correct to style so color can change
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

//clears class styling for next question
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//questions object array.
const questions = [
    {
        question: 'who founded LinkedIn?',
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
        question: 'which of these became the first company to hit $1 trillion in evaluation?',
        answer: [
            {text: 'Apple', correct: true },
            {text: 'Google', correct: false},
            {text: 'Amazon', correct: false},
            {text: 'Saudi Aramaco', correct: false}
        ]
    },
    {
        question: 'the Android operating system was first developed by who?',
        answer: [
            {text: 'Netflix', correct: false},
            {text: 'Samsung', correct: false},
            {text: 'Android Inc', correct: true},
            {text: 'Google', correct: false}
        ]
    },
    {
        question: 'twitter was recently bought by whom?',
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
        question: 'as of 2022 which comapny is in the lead for cloud computing?',
        answer: [
            {text: 'Microsoft Azure', correct: false},
            {text: 'Amazon AWS', correct: true},
            {text: 'Google Cloud', correct: false},
            {text: 'Tencent', correct: false}
        ]
    },
    {
        question: 'alibaba and Tencent are the leading tech companies in which country?',
        answer: [
            {text: 'Saudi Arabia', correct: false},
            {text: 'Malaysia', correct: false},
            {text: 'China', correct: true},
            {text: 'United Arab Emerites', correct: false}
        ]
    },
    {
        question: 'monzo is a online banking fintech based in which country?',
        answer: [
            {text: 'UK', correct: true },
            {text: 'Germany', correct: false},
            {text: 'Sweden', correct: false},
            {text: 'USA', correct: false}
        ]
    },
    {
        question: 'who lora ibmsum dokam lara intel 11?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibmsum dokam lara intel 12',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibmsum dokam lara intel 13',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibmsum dokam lara intel 14?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 15?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 16',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 17?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 18',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 19?',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    },
    {
        question: 'who lora ibsum dokam lara intel 20',
        answer: [
            {text: 'Jeff Weiner', correct: false },
            {text: 'Reid Hoffman', correct: true},
            {text: 'James Chuong', correct: false},
            {text: 'Michelle Yee', correct: false}
        ]
    }
]