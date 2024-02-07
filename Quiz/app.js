// www.bytewebster.com
// www.bytewebster.com

let $ = document

const time = $.querySelector('.time')
const questionBox = $.querySelector('.question')
const answercontainer = $.querySelector('.answer-container')
const firstQues = $.querySelector('.first')
const lastQues = $.querySelector('.last')
const nextQuestion = $.querySelector('.next-Question')
const statusTime = $.querySelector('.status-time')
const endQues = $.querySelector('.end-Ques')
const restartQues = $.querySelector('.restart-Ques')
const resultRight = $.querySelector('.result-right')
const ofQuestion = $.querySelector('.of-question')
const containerQuestion = $.querySelector('.container')
const resultBox = $.querySelector('.result-box')
const animation = $.querySelector('.animation')
const message = $.querySelector('.message-text')


let firstQuesCount = 1
let lastQuesCount = 1
let rightQues = 0
let timer;
let index = 0
let timeCount = 30;

function createTemplate(questions) {
    answercontainer.innerHTML = ''
    questionBox.innerHTML = ''

    let question = questions[index];
    let QuesTemplate = `<p>${question.question}</p>`;
    if (question.image) {
        QuesTemplate += `<img src="${images[question.image]}" alt="Question Image">`
    }

    let answerOption = `<p class="answer">${questions[index].options[0]}</p>
    <p class="answer">${questions[index].options[1]}</p>
    <p class="answer">${questions[index].options[2]}</p>
    <p class="answer">${questions[index].options[3]}</p>`

    questionBox.insertAdjacentHTML('beforeend', QuesTemplate)
    answercontainer.insertAdjacentHTML('beforeend', answerOption)

    firstQues.innerHTML = index + 1
    lastQues.innerHTML = questions.length

    timerContHandler()
    let answer = $.querySelectorAll('.answer')

    for (let i = 0; i < answer.length; i++) {
        answer[i].setAttribute('onclick', 'checkAnswer(this)')
    }
}

function displayExplanation() {
    let explanation = questions[index].explanation;
    answercontainer.insertAdjacentHTML('beforeend', `<p>Explanation: ${explanation}</p>`);
}

function checkAnswer(answer) {

    clearInterval(timer)
    let answerClick = answer.innerHTML
    let answerMain = questions[index].answer
    let allAnswerChild = answercontainer.children.length
    nextQuestion.classList.add('show-next')

    if (answerClick === answerMain) {
        answer.classList.add('rightAnswer')
        rightQues++
        updateScore(rightQues)
    } else {
        answer.classList.add('noAnswer')
        for (let i = 0; i < allAnswerChild; i++) {
            if (answercontainer.children[i].innerHTML === answerMain) {
                answercontainer.children[i].classList.add('rightAnswer')
            }
        }
    }
    for (let i = 0; i < allAnswerChild; i++) {
        answercontainer.children[i].classList.add('disable')
    }

    displayExplanation();

}

function timerContHandler() {
    timer = setInterval(function () {
        timeCount--
        time.innerHTML = timeCount

        if (timeCount < 10) {
            time.innerHTML = '0' + timeCount
        }
        if (timeCount == 0) {
            clearInterval(timer)
            displayExplanation();
            nextQuestion.classList.add('show-next')

            let answerMain = questions[index].answer
            let allAnswerChild = answercontainer.children.length

            for (let i = 0; i < allAnswerChild; i++) {
                if (answercontainer.children[i].innerHTML === answerMain) {
                    answercontainer.children[i].classList.add('rightAnswer')
                }
            }

            for (let i = 0; i < allAnswerChild; i++) {
                answercontainer.children[i].classList.add('disable')
            }

        } 
    }, 1000)
}

function nextQuestionHandler() {
    event.preventDefault();
    index++
    timeCount = 20
    createTemplate(questions)
    setTimeout(timer, 1000)

    if (index == 7) {
        nextQuestion.classList.remove('show-next')
        endQues.classList.add('show-end')
    } else {
        nextQuestion.classList.remove('show-next')
    }
}

function updateScore(right) {
    animation.innerHTML= '<lottie-player src="https://lottie.host/2b87e434-2d97-4803-b7b3-42b1dd4d5629/VP8TyTyMv8.json" background="transparent" speed="1" style="width: 260px; height: 260px" loop autoplay direction="1" mode="normal"></lottie-player>';

    if (right > 7) {
        message.innerHTML = 'Well Done!'
    } else if (right <= 7 && right > 3) {
        message.innerHTML = 'Not bad!'
    } else if (right <= 3 && right > 0) {
        message.innerHTML = 'Grade F and below.<br> Go take A public transport'
    } else {
        message.innerHTML = 'Don\'t use any vehicles. Walk.'
    }

    resultRight.innerHTML = rightQues
    ofQuestion.innerHTML = questions.length

}

function showResultQues() {
    event.preventDefault();
    containerQuestion.classList.add('hide-question')
    resultBox.classList.add('show-result')
}

function restartQuesHandler() {
    location.reload()
}


nextQuestion.addEventListener('click', nextQuestionHandler)
endQues.addEventListener('click', showResultQues)
restartQues.addEventListener('click', restartQuesHandler)
createTemplate(questions)


