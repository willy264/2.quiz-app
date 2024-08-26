

// THE OTHER ONE

// function startPlaying() {
//   window.location.assign("./quiz.html");
// }

// let questionS = [
//   {
//     numb: 1,
//     question: 'what is html',
//     answer: 'hyper text markup language',
//     options: [
//       'hyper text preprocessor',
//       'hyper text markup language',
//       'hyper',
//       'test'
//     ]
//   },
//   {
//     numb: 2,
//     question: 'what is css',
//     answer: 'Cyper text markup language',
//     options: [
//       'hyper text preprocessor',
//       'Cyper text markup language',
//       'hyper',
//       'test'
//     ]
//   },
//   {
//     numb: 3,
//     question: 'what is js',
//     answer: 'Jyper text markup language',
//     options: [
//       'hyper text preprocessor',
//       'Jyper text markup language',
//       'hyper',
//       'test'
//     ]
//   },
//   {
//     numb: 4,
//     question: 'what is php',
//     answer: 'pyper text markup language',
//     options: [
//       'hyper text preprocessor',
//       'pyper text markup language',
//       'hyper',
//       'test'
//     ]
//   },
//   {
//     numb: 5,
//     question: 'what is sql',
//     answer: 'syper text markup language',
//     options: [
//       'hyper text preprocessor',
//       'syper text markup language',
//       'hyper',
//       'test'
//     ]
//   },
// ]
// const option_list = document.querySelector('.choice-cover')
// let que_count = 0;
// let que_numb = 1
// let counter;
// let timeValue = 15
// let userScore = 0;

// let next_btn = document.querySelector('#next');
// let tickIcon = `<span class="icon tick"></span>`
// const timeCount = document.querySelector('.timer_sec')
// const timeOff = document.querySelector('.time_text')

// showQuestion(0);
// queCounter(1);
// startTimer(15)

// next_btn.onclick = () => {

//   if (que_count < questionS.length - 1) {
 
//     que_count ++;
//     que_numb ++

//     showQuestion(que_count);
//     queCounter(que_numb);
//     clearInterval(counter);
//     startTimer(timeValue);
//     next_btn.style.display = 'none';
//     timeOff.textContent = "Time Left"
//   } else {
//     clearInterval(counter);
//     return window.location.assign("./restart.html");
//   }
// }

// function showQuestion(index) {
//   const que_text = document.querySelector('#question')
//   let que_tag = `<h2 id="question">${questionS[index].numb}. ${questionS[index].question}</h2>`;
//   let option_tag = `<p class="choice-text" data-number="1">${questionS[index].options[0]}</p>`
//                             + `<p class="choice-text" data-number="1">${questionS[index].options[1]}</p>`
//                             + `<p class="choice-text" data-number="1">${questionS[index].options[2]}</p>`
//                             + `<p class="choice-text" data-number="1">${questionS[index].options[3]}</p>`;

//   que_text.innerHTML = que_tag;
//   option_list.innerHTML = option_tag;

//   let option = option_list.querySelectorAll('.choice-text')
//   for (let i = 0; i < option.length; i++) {
//     option[i].setAttribute("onclick", "optionSelected(this)");
//   }
// }

// function optionSelected (answer) {
//   clearInterval(counter)

//   let userAns = answer.textContent;
//   let correctAns = questionS[que_count].answer;
//   let allOptions = option_list.children.length;

//   if (userAns == correctAns) {
//     userScore += 1
//     console.log(userScore)
//     answer.classList.add('correct')
//     answer.insertAdjacentHTML('beforeend', tickIcon)
//   } else {
//     answer.classList.add('incorrect')
//     // answer.insertAdjacentHTML('beforeend', tickIcon)

//     for (let i = 0; i < allOptions; i++) {
//       if (option_list.children[i].textContent == correctAns) {
//         option_list.children[i].setAttribute('class', 'choice-text correct')
//         option_list.children[i].insertAdjacentHTML('beforeend', tickIcon)
//       }
//     }
//   }

//   for (let i = 0; i < allOptions; i++) {
//     option_list.children[i].classList.add('disabled')
//   }
//   next_btn.style.display = 'block'
// }


// function startTimer(time) {
//   counter = setInterval(function(){
//     timeCount.textContent = time
//     time--

//     ss.style.strokeDashoffset = 0 - (440 * time) / 15;

//     if (time < 9) {
//       let addZero = timeCount.textContent;
//       timeCount.textContent = `0${addZero}`
//     }
//     if (time < 0) {
//       clearInterval(counter)
//       timeCount.textContent = '00'
//       timeOff.textContent = "Time Off"

//       let correctAns = questionS[que_count].answer;

// let correctAns = currentQuestion.answer

//       let allOptions = option_list.children.length;

//       for (let i = 0; i < allOptions; i++) {
//         if (option_list.children[i].textContent == correctAns) {
//           option_list.children[i].setAttribute('class', 'choice-text correct')
//           option_list.children[i].insertAdjacentHTML('beforeend', tickIcon)
//         }
//       }
//       for (let i = 0; i < allOptions; i++) {
//         option_list.children[i].classList.add('disabled')
//       }
//       next_btn.style.display = 'block'
//     }
//   }, 1000);
// }



// function queCounter(index) {
//   const bottom_ques_counter = document.querySelector('.total_que')
//   let totalQuesCountTag = `<span>${index} of ${questionS.length}  Questions</span>`
//   bottom_ques_counter.innerHTML = totalQuesCountTag
// }


// END



const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
  {
    question: "Inside which HTML element do we put the JavaScript??",
    choice1: "<script>",
    choice2: "<javascript>",
    choice3: "<js>",
    choice4: "<scripting>",
    answer: 1
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    choice1: "<script href='xxx.js'>",
    choice2: "<script name='xxx.js'>",
    choice3: "<script src='xxx.js'>",
    choice4: "<script file='xxx.js'>",
    answer: 3
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4
  }
];


const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

let counter;
let timeValue = 15
const timeCount = document.querySelector('.timer_sec')
const timeOff = document.querySelector('.time_text')


startGame = () => {
  questionCounter = 0;
  score = 0;
  startTimer(15)
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  startTimer(15)
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("restart.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};



choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  
  });
});



function startTimer(time) {
  counter = setInterval(function(){
    timeCount.textContent = time
    time--

    ss.style.strokeDashoffset = 0 - (440 * time) / 15;

    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = `0${addZero}`
    }
    if (time < 0) {
      clearInterval(counter)
      timeCount.textContent = '00'
      timeOff.textContent = "Time Off";
      getNewQuestion();
    }
  }, 1000);
}






incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
