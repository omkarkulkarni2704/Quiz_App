const quizData = [
    {
        question: "Q1. Which language runs in a web browser?",
        a: "A) Java",
        b: "B) C",
        c: "C) Python",
        d: "D) JavaScript",
        correct: "d",
    },
    {
        question: "Q2. What does CSS stand for?",
        a: "A) Central Style Sheets",
        b: "B) Cascading Style Sheets",
        c: "C) Cascading Simple Sheets",
        d: "D) Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Q3. What does HTML stand for?",
        a: "A) Hypertext Markup Language",
        b: "B) Hypertext Markdown Language",
        c: "C) Hyperloop Machine Language",
        d: "D) Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Q4. What year was JavaScript launched?",
        a: "A) 1996",
        b: "B) 1995",
        c: "C) 1994",
        d: "D) none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
