const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "CSS stands for:",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars Sold or Stollen",
    correct: "b",
  },
  {
    question: "HTML stands for:",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hypervisor Machine Language",
    d: "Helicopters Trains Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JS launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const questions = document.getElementById("question");
const a_text = document.getElementById(a_text);
const b_text = document.getElementById(b_text);
const c_text = document.getElementById(c_text);
const d_text = document.getElementById(d_text);
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questions.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answers.forEach((answer) => (answer.checked = false));
}

function getSelected() {
  let answerEl;
  answers.forEach((answer) => {
    if (answer.checked) {
      answerEl = answer.id;
    }
  });
  return answerEl;
}
submitBtn.addEventListener("click", () => {
  const answerEl = getSelected();
});
