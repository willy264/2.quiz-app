

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
    question: "What is the capital of France?",
    choice1: "Pays de la Loire",
    choice2: "Paris",
    choice3: "Brittany",
    choice4: "Nouvelle-Aquitaine",
    answer: 2
  },
  {
    question: "What is the largest country in the world?",
    choice1: "Russia",
    choice2: "Canada",
    choice3: "China",
    choice4: "United States",
    answer: 1
  },
  {
    question: "What is the most popular programming language in 2023?",
    choice1: "JavaScript",
    choice2: "Python",
    choice3: "Java",
    choice4: "C++",
    answer: 2
  },
  {
    question: "Who painted the Mona Lisa?",
    choice1: "Leonardo da Vinci",
    choice2: "Pablo Picasso",
    choice3: "Vincent van Gogh",
    choice4: "Michelangelo",
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    choice1: "Au",
    choice2: "Ag",
    choice3: "Fe",
    choice4: "Cu",
    answer: 1
  },
  {
    question: "What is the capital of Australia?",
    choice1: "Sydney",
    choice2: "Melbourne",
    choice3: "Canberra",
    choice4: "Brisbane",
    answer: 3
  },
  {
    question: "Which planet is known as the Red Planet?",
    choice1: "Mars",
    choice2: "Venus",
    choice3: "Jupiter",
    choice4: "Saturn",
    answer: 1
  },
  {
    question: "What is the largest ocean in the world?",
    choice1: "Atlantic Ocean",
    choice2: "Pacific Ocean",
    choice3: "Indian Ocean",
    choice4: "Arctic Ocean",
    answer: 2
  },
  {
    question: "What is the square root of 144?",
    choice1: "11",
    choice2: "12",
    choice3: "13",
    choice4: "14",
    answer: 2
  },
  {
    question: "What is the chemical symbol for water?",
    choice1: "H2O",
    choice2: "CO2",
    choice3: "O2",
    choice4: "N2",
    answer: 1
  },
  {
    question: "What is the tallest mountain in the world?",
    choice1: "Mount Everest",
    choice2: "K2",
    choice3: "Mount Kilimanjaro",
    choice4: "Mount McKinley",
    answer: 1
  },
  {
    question: "What is the currency of Japan?",
    choice1: "Yuan",
    choice2: "Yen",
    choice3: "Won",
    choice4: "Rupee",
    answer: 2
  },
  {
    question: "Who is the author of the Harry Potter series?",
    choice1: "J.R.R. Tolkien",
    choice2: "J.K. Rowling",
    choice3: "Stephen King",
    choice4: "George Orwell",
    answer: 2
  },
  {
    question: "What is the capital of the United States?",
    choice1: "New York City",
    choice2: "Washington D.C.",
    choice3: "Los Angeles",
    choice4: "Chicago",
    answer: 2
  },
  {
    question: "What is the largest country in South America?",
    choice1: "Brazil",
    choice2: "Argentina",
    choice3: "Colombia",
    choice4: "Peru",
    answer: 1
  },
  {
    question: "What is the name of the famous clock tower in London?",
    choice1: "Big Ben",
    choice2: "Tower Bridge",
    choice3: "Buckingham Palace",
    choice4: "The Shard",
    answer: 1
  },
  {
    question: "Which planet is known for its rings?",
    choice1: "Mars",
    choice2: "Venus",
    choice3: "Saturn",
    choice4: "Jupiter",
    answer: 3
  },
  {
    question: "What is the largest mammal on Earth?",
    choice1: "Blue Whale",
    choice2: "African Elephant",
    choice3: "Giraffe",
    choice4: "Hippopotamus",
    answer: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    choice1: "Au",
    choice2: "Ag",
    choice3: "Fe",
    choice4: "Cu",
    answer: 1
  },
  {
    question: "What is the capital of Australia?",
    choice1: "Sydney",
    choice2: "Melbourne",
    choice3: "Canberra",
    choice4: "Brisbane",
    answer: 3
  },
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
  },


  {
    question: "What is the largest city in South Korea?",
    choice1: "Seoul",
    choice2: "Busan",
    choice3: "Incheon",
    choice4: "Daegu",
    answer: 1
  },
  {
    question: "Who is the author of the famous novel 'The Catcher in the Rye'?",
    choice1: "Ernest Hemingway",
    choice2: "F. Scott Fitzgerald",
    choice3: "J.D. Salinger",
    choice4: "Mark Twain",
    answer: 3
  },
  {
    question: "What is the chemical symbol for tin?",
    choice1: "Sn",
    choice2: "Pb",
    choice3: "Hg",
    choice4: "Ag",
    answer: 1
  },
  {
    question: "What is the highest mountain peak in Europe?",
    choice1: "Mount Elbrus",
    choice2: "Mount Blanc",
    choice3: "Mount Matterhorn",
    choice4: "Mount Etna",
    answer: 1
  },
  {
    question: "Who was the first President of the United States to resign?",
    choice1: "Franklin D. Roosevelt",
    choice2: "John F. Kennedy",
    choice3: "Richard Nixon",
    choice4: "Theodore Roosevelt",
    answer: 3
  },
  {
    question: "What is the largest city in Canada?",
    choice1: "Toronto",
    choice2: "Montreal",
    choice3: "Vancouver",
    choice4: "Calgary",
    answer: 1
  },
  {
    question: "Who wrote the famous play 'Romeo and Juliet'?",
    choice1: "Jane Austen",
    choice2: "Leonardo da Vinci",
    choice3: "Charles Dickens",
    choice4: "William Shakespeare",
    answer: 4
  },
  {
    question: "What is the chemical symbol for mercury?",
    choice1: "Au",
    choice2: "Pb",
    choice3: "Ag",
    choice4: "Hg",
    answer: 4
  },
  {
    question: "What is the largest desert in Africa?",
    choice1: "Namib Desert",
    choice2: "Sahara Desert",
    choice3: "Kalahari Desert",
    choice4: "Horn of Africa",
    answer: 2
  },
  {
    question: "Who was the ancient Greek goddess of love?",
    choice1: "Hera",
    choice2: "Athena",
    choice3: "Artemis",
    choice4: "Aphrodite",
    answer: 4
  },
  {
    question: "What is the highest mountain peak in Australia?",
    choice1: "Mount Cradle",
    choice2: "Mount Wellington",
    choice3: "Mount Field",
    choice4: "Mount Kosciuszko",
    answer: 4
  },
  {
    question: "Who wrote the famous novel 'The Lord of the Rings'?",
    choice1: "Charles Dickens",
    choice2: "J.K. Rowling",
    choice3: "Jane Austen",
    choice4: "J.R.R. Tolkien",
    answer: 4
  },
  {
    question: "What is the chemical symbol for silver?",
    choice1: "Au",
    choice2: "Ag",
    choice3: "Hg",
    choice4: "Pb",
    answer: 2
  },
  {
    question: "What is the largest city in Brazil?",
    choice1: "Brasilia",
    choice2: "Rio de Janeiro",
    choice3: "Sao Paulo",
    choice4: "Lima",
    answer: 3
  },
  {
    question: "Who was the first woman to win a Nobel Prize?",
    choice1: "Rosa Parks",
    choice2: "Frida Kahlo",
    choice3: "Marie Curie",
    choice4: "Amelia Earhart",
    answer: 0
  },
  {
    question: "What is the highest mountain peak in Antarctica?",
    choice1: "Mount Erebus",
    choice2: "Vinson Massif",
    choice3: "Mount Kilimanjaro",
    choice4: "Mount Aconcagua",
    answer: 2
  },
  {
    question: "Who wrote the famous play 'Hamlet'?",
    choice1: "William Shakespeare",
    choice2: "Leonardo da Vinci",
    choice3: "Charles Dickens",
    choice4: "Jane Austen",
    answer: 1
  },


  {
    question: "Who was the ancient Egyptian goddess of love?",
    choice1: "Isis",
    choice2: "Hathor",
    choice3: "Bastet",
    choice4: "Sekhmet",
    answer: 2,
  },
  {
    question: "What is the largest desert in Asia?",
    choice1: "Gobi Desert",
    choice2: "Arabian Desert",
    choice3: "Kyzylkum Desert",
    choice4: "Taklamakan Desert",
    answer: 1,
  },
  {
    question: "Who wrote the famous novel 'Pride and Prejudice'?",
    choice1: "Jane Austen",
    choice2: "Charles Dickens",
    choice3: "J.K. Rowling",
    choice4: "F. Scott Fitzgerald",
    answer: 1,
  },
  {
    question: "What is the chemical symbol for silver?",
    choice1: "Ag",
    choice2: "Au",
    choice3: "Hg",
    choice4: "Pb",
    answer: 1,
  },
  {
    question: "Who was the ancient Greek god of the underworld?",
    choice1: "Zeus",
    choice2: "Poseidon",
    choice3: "Hades",
    choice4: "Hera",
    answer: 3
  },
  {
    question: "What is the largest city in Australia?",
    choice1: "Sydney",
    choice2: "Melbourne",
    choice3: "Brisbane",
    choice4: "Perth",
    answer: 1,
  },
  {
    question: "Who was the first President of Nigeria?",
    choice1: "Nnamdi Azikiwe",
    choice2: "Obafemi Awolowo",
    choice3: "Abubakar Tafawa Balewa",
    choice4: "Yakubu Gowon",
    answer: 3
  },
  {
    question: "What is the highest mountain peak in Africa?",
    choice1: "Mount Kilimanjaro",
    choice2: "Mount Elbrus",
    choice3: "Mount Everest",
    choice4: "Mount Atlas",
    answer: 1,
  },
  {
    question: "Who wrote the famous play 'Hamlet'?",
    choice1: "William Shakespeare",
    choice2: "Leonardo da Vinci",
    choice3: "Charles Dickens",
    choice4: "Jane Austen",
    answer: 1,
  },
  {
    question: "What is the largest river in Europe?",
    choice1: "Volga River",
    choice2: "Danube River",
    choice3: "Rhine River",
    choice4: "Elbe River",
    answer: 1,
  },
  {
    question: "Who was the ancient Greek goddess of wisdom?",
    choice1: "Athena",
    choice2: "Aphrodite",
    choice3: "Artemis",
    choice4: "Hera",
    answer: 1,
  },
  {
    question: "What is the smallest country in South America?",
    choice1: "Suriname",
    choice2: "Uruguay",
    choice3: "Guyana",
    choice4: "French Guiana",
    answer: 2,
  },
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 52;

let counter;
let timeValue = 15;
const timeCount = document.querySelector('.timer_sec');
const timeOff = document.querySelector('.time_text');

startGame = () => {
  questionCounter = 0;
  score = 0;
  startTimer(15);
  availableQuesions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  clearInterval(counter);
  startTimer(15);
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("restart.html");
  };
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
    clearInterval(counter)

    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    // let classToApply;
    // classToApply = things()
    // function things() {
    //   if (selectedAnswer === currentQuestion.answer) {
    //     classToApply = 'correct'
    //   } else {
    //     classToApply = 'incorrect'
    //   }      
    // }

    // console.log (selectedChoice.innerHTML)

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    } 
    // else if (classToApply === "incorrect") {
      // currentQuestion.answer.classList.add('correct')
      // classToApply = 'correct'
      // availableQuesions.innerHTML.classList.add('correct')
      // console.log(currentQuestion.answer)
    // }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  
  });
});


startTimer = (time) =>  {
  counter = setInterval(function(){
    timeCount.textContent = time
    time--

    ss.style.strokeDashoffset = 0 - (440 * time) / 15;
    timeCount.innerHTML = time + '<br><span>Seconds</span>'

    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = `0${addZero}`
    }
    if (time < 1) {
      clearInterval(counter)
      setTimeout(() => {
        getNewQuestion();
      }, 1000);
    }
  }, 1000);
}


incrementScore = num => {
  score += num;
  scoreText.innerText = score;
};

startGame();
