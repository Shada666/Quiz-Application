// // Define an array of objects to store quiz questions, options, and correct answers
// const quizQuestions = [
//   {
//     question: "What is the capital of France?",
//     options: ["A. London", "B. Paris", "C. Rome", "D. Berlin"],
//     answer: "B"
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["A. Mars", "B. Jupiter", "C. Saturn", "D. Venus"],
//     answer: "A"
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     options: ["A. H2O", "B. CO2", "C. NaCl", "D. CH4"],
//     answer: "A"
//   }
// ];

// let score = 0;

// // Function to display a single question
// function displayQuestion(questionObj) {
//   console.log(questionObj.question);
//   questionObj.options.forEach(option => console.log(option));
//   const userAnswer = prompt("Enter your answer (e.g., A, B, C, or D):").toUpperCase();
//   validateAnswer(userAnswer, questionObj.answer);
// }

// // Function to validate user's answer and provide feedback
// function validateAnswer(userAnswer, correctAnswer) {
//   if (userAnswer === correctAnswer) {
//     console.log("Correct answer!");
//     score++;
//   } else {
//     console.log("Incorrect answer.");
//     console.log("Correct answer is:", correctAnswer);
//   }
// }

// // Function to start the quiz
// function startQuiz() {
//   score = 0;
//   for (let i = 0; i < quizQuestions.length; i++) {
//     console.clear();
//     console.log("Question", i + 1);
//     displayQuestion(quizQuestions[i]);
//     console.log("-----------------------------");
//   }
//   console.log("Quiz completed! Your final score is:", score, "out of", quizQuestions.length);
// }

// // Start the quiz
// startQuiz();

 const quizData = [
    {
    question: "1-Which of the following is NOT a key driver for the growth and development of the mobile wireless industry according to the passage?",
    options: ["Increased investment in infrastructure", "Technological advances in software", "The decline in demand for mobile wireless devices", "The demand from businesses for mobile and real-time communications"],
    answer: "The decline in demand for mobile wireless devices"
},
    {
    question: "2-The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology.",
    options: ["True", "False"],
    answer: "False"
    },
    {
    question: "3-What is the primary characteristic of fourth-generation languages (4GL)",
    options: ["A) They use binary numbers as codes for instructions","B) They are less procedural and formal compared to previous language generations.","C) They employ translator programs called assemblers.","D) They require programmers to specify the results they are looking for"],
    answer: "B) They are less procedural and formal compared to previous language generations."
    },
    {
    question: "4-The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology", 
    options: ["True", "False"],
    answer: "False"
    },
    {
        question: "5-Internet competition has increased the viability of Value Added Networks (VANs) for EDI operations.",
        options: ["True", "False"],
        answer: "False"  
    }

];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
const question = quizData[currentQuestion];
questionElement.innerText = question.question;

optionsElement.innerHTML =  " ";
question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
});
}

function selectAnswer(e) {
const selectedButton = e.target;
const answer = quizData[currentQuestion].answer;

if (selectedButton.innerText === answer) {
    score++;
}

currentQuestion++;

if (currentQuestion < quizData.length) {
    showQuestion();
} else {
    showResult();
}
}

function showResult() {
quiz.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
`;
}

showQuestion();