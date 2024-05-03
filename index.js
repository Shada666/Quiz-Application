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

//  const quizData = [
//     {
//     question: "1-Which of the following is NOT a key driver for the growth and development of the mobile wireless industry according to the passage?",
//     options: ["Increased investment in infrastructure", "Technological advances in software", "The decline in demand for mobile wireless devices", "The demand from businesses for mobile and real-time communications"],
//     answer: "The decline in demand for mobile wireless devices"
// },
//     {
//     question: "2-The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology.",
//     options: ["True", "False"],
//     answer: "False"
//     },
//     {
//     question: "3-What is the primary characteristic of fourth-generation languages (4GL)",
//     options: ["A) They use binary numbers as codes for instructions","B) They are less procedural and formal compared to previous language generations.","C) They employ translator programs called assemblers.","D) They require programmers to specify the results they are looking for"],
//     answer: "B) They are less procedural and formal compared to previous language generations."
//     },
//     {
//     question: "4-The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology", 
//     options: ["True", "False"],
//     answer: "False"
//     },
//     {
//         question: "5-Internet competition has increased the viability of Value Added Networks (VANs) for EDI operations.",
//         options: ["True", "False"],
//         answer: "False"  
//     }

// ];

// const questionElement = document.getElementById("question");
// const optionsElement = document.getElementById("options");
// const submitButton = document.getElementById("submit");

// let currentQuestion = 0;
// let score = 0;

// function showQuestion() {
// const question = quizData[currentQuestion];
// questionElement.innerText = question.question;

// optionsElement.innerHTML =  " ";
// question.options.forEach(option => {
//     const button = document.createElement("button");
//     button.innerText = option;
//     optionsElement.appendChild(button);
//     button.addEventListener("click", selectAnswer);
// });
// }

// function selectAnswer(e) {
// const selectedButton = e.target;
// const answer = quizData[currentQuestion].answer;

// if (selectedButton.innerText === answer) {
//     score++;
// }

// currentQuestion++;

// if (currentQuestion < quizData.length) {
//     showQuestion();
// } else {
//     showResult();
// }
// }

// function showResult() {
// quiz.innerHTML = `
//     <h1>Quiz Completed!</h1>
//     <p>Your score: ${score}/${quizData.length}</p>
// `;
// }

// showQuestion();
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
    q: "Which of the following is NOT a key driver for the growth and development of the mobile wireless industry according to the passage?",
    options: ["Increased investment in infrastructure", "Technological advances in software", "The decline in demand for mobile wireless devices", "The demand from businesses for mobile and real-time communications"],
    answer: 3
},
    {
    q: "The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology.",
    options: ["True", "False"],
    answer: 2
    },
    {
    q: "What is the primary characteristic of fourth-generation languages (4GL)",
    options: ["A) They use binary numbers as codes for instructions","B) They are less procedural and formal compared to previous language generations.","C) They employ translator programs called assemblers.","D) They require programmers to specify the results they are looking for"],
    answer: 2
    },
    {
    q: "The passage predicts that internet protocol (IP) will eventually replace traditional mobile phone technology", 
    options: ["True", "False"],
    answer: 2
    },
    {
    q: "Internet competition has increased the viability of Value Added Networks (VANs) for EDI operations.",
    options: ["True", "False"],
    answer: 2 
}         
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
        
}


window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}