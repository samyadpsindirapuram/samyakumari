

const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

function setAvailableQuestion (){
 const totalQuestion  = quiz.length;
  for (let i=0; i < totalQuestion; i++) {
  	availableQuestions.push(quiz[i])
  }
}

function getNewQuestion (){
 	questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

 	const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length )]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    con

    questionCounter++
}

window.onload = function (){

	setAvailableQuestion();
	getNewQuestion();
}