const question = document.getElementById("question"),
           choices = Array.from(document.getElementsByClassName("choice-text")),
           progressText = document.getElementById("progressText"),
           scoreText = document.getElementById("score");
           progressBarFull = document.getElementById("progressBarFull"),
           quitButton = document.querySelector('.quitButton');

let currentQuestion = {},
       acceptingAnswers = false,
       score = 0,
       availableQuesions = [];

let questions = [
    // First set of 20 questions
    {
      question: "Which company developed the React.js library?",
      choice1: "Google",
      choice2: "Facebook",
      choice3: "Microsoft",
      choice4: "Apple",
      answer: 2
  },
  {
      question: "What is the main programming language used for developing Android apps?",
      choice1: "Swift",
      choice2: "Kotlin",
      choice3: "Java",
      choice4: "C#",
      answer: 3
  },
  {
      question: "Which of the following is a NoSQL database?",
      choice1: "MySQL",
      choice2: "PostgreSQL",
      choice3: "MongoDB",
      choice4: "Oracle",
      answer: 3
  },
  {
      question: "Which technology is used for containerization?",
      choice1: "Docker",
      choice2: "Kubernetes",
      choice3: "Vagrant",
      choice4: "VirtualBox",
      answer: 1
  },
  {
      question: "What does 'CSS' stand for in web development?",
      choice1: "Computer Style Sheets",
      choice2: "Cascading Style Sheets",
      choice3: "Creative Style Sheets",
      choice4: "Colorful Style Sheets",
      answer: 2
  },
  {
      question: "Which language is primarily used for data analysis and machine learning?",
      choice1: "Python",
      choice2: "JavaScript",
      choice3: "PHP",
      choice4: "Ruby",
      answer: 1
  },
  {
      question: "What does 'API' stand for?",
      choice1: "Application Programming Interface",
      choice2: "Application Protocol Interface",
      choice3: "Automated Programming Interface",
      choice4: "Application Process Interface",
      answer: 1
  },
  {
      question: "Which version control system is most commonly used in software development?",
      choice1: "SVN",
      choice2: "Mercurial",
      choice3: "Git",
      choice4: "CVS",
      answer: 3
  },
  {
      question: "What does 'HTML' stand for?",
      choice1: "HyperText Markup Language",
      choice2: "HyperLink Markup Language",
      choice3: "HyperTool Markup Language",
      choice4: "HyperTech Markup Language",
      answer: 1
  },
  {
      question: "Which JavaScript framework is used for building user interfaces?",
      choice1: "Angular",
      choice2: "Vue.js",
      choice3: "React",
      choice4: "All of the above",
      answer: 4
  },
  {
      question: "Which cloud platform is provided by Amazon?",
      choice1: "Azure",
      choice2: "Google Cloud",
      choice3: "AWS",
      choice4: "IBM Cloud",
      answer: 3
  },
  {
      question: "Which language is used for writing iOS apps?",
      choice1: "Swift",
      choice2: "Kotlin",
      choice3: "Java",
      choice4: "C#",
      answer: 1
  },
  {
      question: "What does 'SQL' stand for?",
      choice1: "Structured Query Language",
      choice2: "Sequential Query Language",
      choice3: "System Query Language",
      choice4: "Synchronized Query Language",
      answer: 1
  },
  {
      question: "Which company created the TypeScript programming language?",
      choice1: "Google",
      choice2: "Facebook",
      choice3: "Microsoft",
      choice4: "Apple",
      answer: 3
  },
  {
      question: "What is the main use of the Git command 'commit'?",
      choice1: "To create a new branch",
      choice2: "To apply changes to the code",
      choice3: "To save changes to the local repository",
      choice4: "To clone a repository",
      answer: 3
  },
  {
      question: "Which of the following is a front-end web development framework?",
      choice1: "Django",
      choice2: "Spring",
      choice3: "Laravel",
      choice4: "Bootstrap",
      answer: 4
  },
  {
      question: "Which protocol is used to secure communication over the internet?",
      choice1: "HTTP",
      choice2: "FTP",
      choice3: "HTTPS",
      choice4: "SMTP",
      answer: 3
  },
  {
      question: "Which of the following is an example of a relational database?",
      choice1: "MongoDB",
      choice2: "Cassandra",
      choice3: "MySQL",
      choice4: "DynamoDB",
      answer: 3
  },
  {
      question: "What is the primary function of the CSS 'flexbox' layout?",
      choice1: "To create grid layouts",
      choice2: "To center items horizontally and vertically",
      choice3: "To create a responsive layout",
      choice4: "To style text",
      answer: 2
  },
  {
      question: "What does 'IDE' stand for in software development?",
      choice1: "Integrated Development Environment",
      choice2: "Interactive Development Environment",
      choice3: "Intelligent Development Environment",
      choice4: "Internal Development Environment",
      answer: 1
  },
  // Second set of 20 questions
  {
      question: "Which programming language is known for its use in artificial intelligence and machine learning?",
      choice1: "Python",
      choice2: "Java",
      choice3: "C++",
      choice4: "Ruby",
      answer: 1
  },
  {
      question: "Which markup language is used to structure content on the web?",
      choice1: "CSS",
      choice2: "HTML",
      choice3: "JavaScript",
      choice4: "XML",
      answer: 2
  },
  {
      question: "Which version of HTML introduced semantic elements like <header> and <footer>?",
      choice1: "HTML4",
      choice2: "XHTML",
      choice3: "HTML5",
      choice4: "HTML6",
      answer: 3
  },
  {
      question: "Which CSS property is used to change the text color of an element?",
      choice1: "color",
      choice2: "font-color",
      choice3: "text-color",
      choice4: "background-color",
      answer: 1
  },
  {
      question: "Which of the following is a Python web framework?",
      choice1: "Django",
      choice2: "Spring",
      choice3: "Rails",
      choice4: "Laravel",
      answer: 1
  },
  {
      question: "Which protocol is used for sending email?",
      choice1: "FTP",
      choice2: "HTTP",
      choice3: "SMTP",
      choice4: "SSH",
      answer: 3
  },
  {
      question: "Which JavaScript method is used to select an HTML element by its ID?",
      choice1: "getElementByClassName",
      choice2: "getElementById",
      choice3: "querySelector",
      choice4: "getElementsByTagName",
      answer: 2
  },
  {
      question: "Which of the following is a popular JavaScript runtime environment?",
      choice1: "Node.js",
      choice2: "Angular",
      choice3: "React",
      choice4: "Vue.js",
      answer: 1
  },
  {
      question: "Which language is primarily used for statistical analysis and data visualization?",
      choice1: "Java",
      choice2: "Python",
      choice3: "R",
      choice4: "C++",
      answer: 3
  },
  {
      question: "Which CSS framework provides a grid system and responsive design utilities?",
      choice1: "Foundation",
      choice2: "Bootstrap",
      choice3: "Bulma",
      choice4: "Tailwind CSS",
      answer: 2
  },
  {
      question: "Which company created the Angular framework?",
      choice1: "Google",
      choice2: "Facebook",
      choice3: "Microsoft",
      choice4: "Twitter",
      answer: 1
  },
  {
      question: "Which technology is used for virtualization and creating virtual machines?",
      choice1: "Docker",
      choice2: "Kubernetes",
      choice3: "VMware",
      choice4: "Vagrant",
      answer: 3
  },
  {
      question: "Which JavaScript method is used to add an element to the end of an array?",
      choice1: "push",
      choice2: "pop",
      choice3: "shift",
      choice4: "unshift",
      answer: 1
  },
  {
      question: "Which company developed the Swift programming language?",
      choice1: "Google",
      choice2: "Apple",
      choice3: "Microsoft",
      choice4: "Facebook",
      answer: 2
  },
  {
      question: "Which of the following is a distributed version control system?",
      choice1: "Git",
      choice2: "Subversion (SVN)",
      choice3: "Mercurial",
      choice4: "All of the above",
      answer: 4
  },
  {
      question: "Which HTTP method is used to retrieve data from a server?",
      choice1: "GET",
      choice2: "POST",
      choice3: "PUT",
      choice4: "DELETE",
      answer: 1
  },
  {
      question: "Which of the following is a JavaScript library for building user interfaces?",
      choice1: "Angular",
      choice2: "React",
      choice3: "Vue.js",
      choice4: "Ember.js",
      answer: 2
  },
  {
      question: "Which programming language is used for developing Apple's iOS apps?",
      choice1: "Objective-C",
      choice2: "Swift",
      choice3: "Java",
      choice4: "C#",
      answer: 2
  },
  {
      question: "Which command is used to initialize a new Git repository?",
      choice1: "git init",
      choice2: "git start",
      choice3: "git new",
      choice4: "git create",
      answer: 1
  },
  {
      question: "Which of the following is a backend web development framework?",
      choice1: "React",
      choice2: "Laravel",
      choice3: "Vue.js",
      choice4: "Angular",
      answer: 2
  },
  // Additional 12 questions
  {
      question: "Which database management system is known for its scalability and is often used in large distributed systems?",
      choice1: "MySQL",
      choice2: "MongoDB",
      choice3: "PostgreSQL",
      choice4: "SQLite",
      answer: 2
  },
  {
      question: "Which programming language is primarily used for system-level programming and operating systems?",
      choice1: "Python",
      choice2: "Java",
      choice3: "C",
      choice4: "Ruby",
      answer: 3
  },
  {
      question: "Which tool is commonly used for automating tasks in web development, such as minifying CSS and JavaScript files?",
      choice1: "Webpack",
      choice2: "Gulp",
      choice3: "Grunt",
      choice4: "Parcel",
      answer: 2
  },
  {
      question: "Which command is used to check the status of files in a Git repository?",
      choice1: "git status",
      choice2: "git check",
      choice3: "git log",
      choice4: "git diff",
      answer: 1
  },
  {
      question: "Which of the following is a static site generator?",
      choice1: "WordPress",
      choice2: "Jekyll",
      choice3: "Drupal",
      choice4: "Magento",
      answer: 2
  },
  {
      question: "Which language is most commonly associated with the .NET framework?",
      choice1: "Java",
      choice2: "Python",
      choice3: "C#",
      choice4: "JavaScript",
      answer: 3
  },
  {
      question: "Which version of ECMAScript introduced the 'let' and 'const' keywords?",
      choice1: "ES5",
      choice2: "ES6",
      choice3: "ES7",
      choice4: "ES8",
      answer: 2
  },
  {
      question: "Which of the following is a cloud computing platform by Microsoft?",
      choice1: "AWS",
      choice2: "Google Cloud",
      choice3: "Azure",
      choice4: "IBM Cloud",
      answer: 3
  },
  {
      question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
      choice1: "slice()",
      choice2: "substring()",
      choice3: "trim()",
      choice4: "replace()",
      answer: 3
  },
  {
      question: "Which of the following is a CSS preprocessor?",
      choice1: "SASS",
      choice2: "Babel",
      choice3: "Webpack",
      choice4: "TypeScript",
      answer: 1
  },
  {
      question: "Which of the following is a popular JavaScript testing framework?",
      choice1: "Mocha",
      choice2: "Jasmine",
      choice3: "Jest",
      choice4: "All of the above",
      answer: 4
  },
  {
      question: "Which company developed the Kubernetes container orchestration platform?",
      choice1: "Facebook",
      choice2: "Google",
      choice3: "Microsoft",
      choice4: "Amazon",
      answer: 2
  }
]
// let questions = [
//   {
//     question: "What is the capital of France?",
//     choice1: "Pays de la Loire",
//     choice2: "Paris",
//     choice3: "Brittany",
//     choice4: "Nouvelle-Aquitaine",
//     answer: 2
//   },
//   {
//     question: "What is the largest country in the world?",
//     choice1: "Russia",
//     choice2: "Canada",
//     choice3: "China",
//     choice4: "United States",
//     answer: 1
//   },
//   {
//     question: "What is the most popular programming language in 2023?",
//     choice1: "JavaScript",
//     choice2: "Python",
//     choice3: "Java",
//     choice4: "C++",
//     answer: 2
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     choice1: "Leonardo da Vinci",
//     choice2: "Pablo Picasso",
//     choice3: "Vincent van Gogh",
//     choice4: "Michelangelo",
//     answer: 1
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     choice1: "Au",
//     choice2: "Ag",
//     choice3: "Fe",
//     choice4: "Cu",
//     answer: 1
//   },
//   {
//     question: "What is the capital of Australia?",
//     choice1: "Sydney",
//     choice2: "Melbourne",
//     choice3: "Canberra",
//     choice4: "Brisbane",
//     answer: 3
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     choice1: "Mars",
//     choice2: "Venus",
//     choice3: "Jupiter",
//     choice4: "Saturn",
//     answer: 1
//   },
//   {
//     question: "What is the largest ocean in the world?",
//     choice1: "Atlantic Ocean",
//     choice2: "Pacific Ocean",
//     choice3: "Indian Ocean",
//     choice4: "Arctic Ocean",
//     answer: 2
//   },
//   {
//     question: "What is the square root of 144?",
//     choice1: "11",
//     choice2: "12",
//     choice3: "13",
//     choice4: "14",
//     answer: 2
//   },
//   {
//     question: "What is the chemical symbol for water?",
//     choice1: "H2O",
//     choice2: "CO2",
//     choice3: "O2",
//     choice4: "N2",
//     answer: 1
//   },
//   {
//     question: "What is the tallest mountain in the world?",
//     choice1: "Mount Everest",
//     choice2: "K2",
//     choice3: "Mount Kilimanjaro",
//     choice4: "Mount McKinley",
//     answer: 1
//   },
//   {
//     question: "What is the currency of Japan?",
//     choice1: "Yuan",
//     choice2: "Yen",
//     choice3: "Won",
//     choice4: "Rupee",
//     answer: 2
//   },
//   {
//     question: "Who is the author of the Harry Potter series?",
//     choice1: "J.R.R. Tolkien",
//     choice2: "J.K. Rowling",
//     choice3: "Stephen King",
//     choice4: "George Orwell",
//     answer: 2
//   },
//   {
//     question: "What is the capital of the United States?",
//     choice1: "New York City",
//     choice2: "Washington D.C.",
//     choice3: "Los Angeles",
//     choice4: "Chicago",
//     answer: 2
//   },
//   {
//     question: "What is the largest country in South America?",
//     choice1: "Brazil",
//     choice2: "Argentina",
//     choice3: "Colombia",
//     choice4: "Peru",
//     answer: 1
//   },
//   {
//     question: "What is the name of the famous clock tower in London?",
//     choice1: "Big Ben",
//     choice2: "Tower Bridge",
//     choice3: "Buckingham Palace",
//     choice4: "The Shard",
//     answer: 1
//   },
//   {
//     question: "Which planet is known for its rings?",
//     choice1: "Mars",
//     choice2: "Venus",
//     choice3: "Saturn",
//     choice4: "Jupiter",
//     answer: 3
//   },
//   {
//     question: "What is the largest mammal on Earth?",
//     choice1: "Blue Whale",
//     choice2: "African Elephant",
//     choice3: "Giraffe",
//     choice4: "Hippopotamus",
//     answer: 1
//   },
//   {
//     question: "What is the chemical symbol for gold?",
//     choice1: "Au",
//     choice2: "Ag",
//     choice3: "Fe",
//     choice4: "Cu",
//     answer: 1
//   },
//   {
//     question: "What is the capital of Australia?",
//     choice1: "Sydney",
//     choice2: "Melbourne",
//     choice3: "Canberra",
//     choice4: "Brisbane",
//     answer: 3
//   },
//   {
//     question: "Inside which HTML element do we put the JavaScript??",
//     choice1: "<script>",
//     choice2: "<javascript>",
//     choice3: "<js>",
//     choice4: "<scripting>",
//     answer: 1
//   },
//   {
//     question:
//       "What is the correct syntax for referring to an external script called 'xxx.js'?",
//     choice1: "<script href='xxx.js'>",
//     choice2: "<script name='xxx.js'>",
//     choice3: "<script src='xxx.js'>",
//     choice4: "<script file='xxx.js'>",
//     answer: 3
//   },
//   {
//     question: " How do you write 'Hello World' in an alert box?",
//     choice1: "msgBox('Hello World');",
//     choice2: "alertBox('Hello World');",
//     choice3: "msg('Hello World');",
//     choice4: "alert('Hello World');",
//     answer: 4
//   },


//   {
//     question: "What is the largest city in South Korea?",
//     choice1: "Seoul",
//     choice2: "Busan",
//     choice3: "Incheon",
//     choice4: "Daegu",
//     answer: 1
//   },
//   {
//     question: "Who is the author of the famous novel 'The Catcher in the Rye'?",
//     choice1: "Ernest Hemingway",
//     choice2: "F. Scott Fitzgerald",
//     choice3: "J.D. Salinger",
//     choice4: "Mark Twain",
//     answer: 3
//   },
//   {
//     question: "What is the chemical symbol for tin?",
//     choice1: "Sn",
//     choice2: "Pb",
//     choice3: "Hg",
//     choice4: "Ag",
//     answer: 1
//   },
//   {
//     question: "What is the highest mountain peak in Europe?",
//     choice1: "Mount Elbrus",
//     choice2: "Mount Blanc",
//     choice3: "Mount Matterhorn",
//     choice4: "Mount Etna",
//     answer: 1
//   },
//   {
//     question: "Who was the first President of the United States to resign?",
//     choice1: "Franklin D. Roosevelt",
//     choice2: "John F. Kennedy",
//     choice3: "Richard Nixon",
//     choice4: "Theodore Roosevelt",
//     answer: 3
//   },
//   {
//     question: "What is the largest city in Canada?",
//     choice1: "Toronto",
//     choice2: "Montreal",
//     choice3: "Vancouver",
//     choice4: "Calgary",
//     answer: 1
//   },
//   {
//     question: "Who wrote the famous play 'Romeo and Juliet'?",
//     choice1: "Jane Austen",
//     choice2: "Leonardo da Vinci",
//     choice3: "Charles Dickens",
//     choice4: "William Shakespeare",
//     answer: 4
//   },
//   {
//     question: "What is the chemical symbol for mercury?",
//     choice1: "Au",
//     choice2: "Pb",
//     choice3: "Ag",
//     choice4: "Hg",
//     answer: 4
//   },
//   {
//     question: "What is the largest desert in Africa?",
//     choice1: "Namib Desert",
//     choice2: "Sahara Desert",
//     choice3: "Kalahari Desert",
//     choice4: "Horn of Africa",
//     answer: 2
//   },
//   {
//     question: "Who was the ancient Greek goddess of love?",
//     choice1: "Hera",
//     choice2: "Athena",
//     choice3: "Artemis",
//     choice4: "Aphrodite",
//     answer: 4
//   },
//   {
//     question: "What is the highest mountain peak in Australia?",
//     choice1: "Mount Cradle",
//     choice2: "Mount Wellington",
//     choice3: "Mount Field",
//     choice4: "Mount Kosciuszko",
//     answer: 4
//   },
//   {
//     question: "Who wrote the famous novel 'The Lord of the Rings'?",
//     choice1: "Charles Dickens",
//     choice2: "J.K. Rowling",
//     choice3: "Jane Austen",
//     choice4: "J.R.R. Tolkien",
//     answer: 4
//   },
//   {
//     question: "What is the chemical symbol for silver?",
//     choice1: "Au",
//     choice2: "Ag",
//     choice3: "Hg",
//     choice4: "Pb",
//     answer: 2
//   },
//   {
//     question: "What is the largest city in Brazil?",
//     choice1: "Brasilia",
//     choice2: "Rio de Janeiro",
//     choice3: "Sao Paulo",
//     choice4: "Lima",
//     answer: 3
//   },
//   {
//     question: "Who was the first woman to win a Nobel Prize?",
//     choice1: "Rosa Parks",
//     choice2: "Frida Kahlo",
//     choice3: "Marie Curie",
//     choice4: "Amelia Earhart",
//     answer: 0
//   },
//   {
//     question: "What is the highest mountain peak in Antarctica?",
//     choice1: "Mount Erebus",
//     choice2: "Vinson Massif",
//     choice3: "Mount Kilimanjaro",
//     choice4: "Mount Aconcagua",
//     answer: 2
//   },
//   {
//     question: "Who wrote the famous play 'Hamlet'?",
//     choice1: "William Shakespeare",
//     choice2: "Leonardo da Vinci",
//     choice3: "Charles Dickens",
//     choice4: "Jane Austen",
//     answer: 1
//   },


//   {
//     question: "Who was the ancient Egyptian goddess of love?",
//     choice1: "Isis",
//     choice2: "Hathor",
//     choice3: "Bastet",
//     choice4: "Sekhmet",
//     answer: 2,
//   },
//   {
//     question: "What is the largest desert in Asia?",
//     choice1: "Gobi Desert",
//     choice2: "Arabian Desert",
//     choice3: "Kyzylkum Desert",
//     choice4: "Taklamakan Desert",
//     answer: 1,
//   },
//   {
//     question: "Who wrote the famous novel 'Pride and Prejudice'?",
//     choice1: "Jane Austen",
//     choice2: "Charles Dickens",
//     choice3: "J.K. Rowling",
//     choice4: "F. Scott Fitzgerald",
//     answer: 1,
//   },
//   {
//     question: "What is the chemical symbol for silver?",
//     choice1: "Ag",
//     choice2: "Au",
//     choice3: "Hg",
//     choice4: "Pb",
//     answer: 1,
//   },
//   {
//     question: "Who was the ancient Greek god of the underworld?",
//     choice1: "Zeus",
//     choice2: "Poseidon",
//     choice3: "Hades",
//     choice4: "Hera",
//     answer: 3
//   },
//   {
//     question: "What is the largest city in Australia?",
//     choice1: "Sydney",
//     choice2: "Melbourne",
//     choice3: "Brisbane",
//     choice4: "Perth",
//     answer: 1,
//   },
//   {
//     question: "Who was the first President of Nigeria?",
//     choice1: "Nnamdi Azikiwe",
//     choice2: "Obafemi Awolowo",
//     choice3: "Abubakar Tafawa Balewa",
//     choice4: "Yakubu Gowon",
//     answer: 3
//   },
//   {
//     question: "What is the highest mountain peak in Africa?",
//     choice1: "Mount Kilimanjaro",
//     choice2: "Mount Elbrus",
//     choice3: "Mount Everest",
//     choice4: "Mount Atlas",
//     answer: 1,
//   },
//   {
//     question: "Who wrote the famous play 'Hamlet'?",
//     choice1: "William Shakespeare",
//     choice2: "Leonardo da Vinci",
//     choice3: "Charles Dickens",
//     choice4: "Jane Austen",
//     answer: 1,
//   },
//   {
//     question: "What is the largest river in Europe?",
//     choice1: "Volga River",
//     choice2: "Danube River",
//     choice3: "Rhine River",
//     choice4: "Elbe River",
//     answer: 1,
//   },
//   {
//     question: "Who was the ancient Greek goddess of wisdom?",
//     choice1: "Athena",
//     choice2: "Aphrodite",
//     choice3: "Artemis",
//     choice4: "Hera",
//     answer: 1,
//   },
//   {
//     question: "What is the smallest country in South America?",
//     choice1: "Suriname",
//     choice2: "Uruguay",
//     choice3: "Guyana",
//     choice4: "French Guiana",
//     answer: 2,
//   },
// ];


quitButton.addEventListener('click', () => {
  return window.location.assign("restart.html");
})


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
  
  if (ss.style.stroke === 'red') {
    ss.style.stroke = 'yellow'
  }

  startTimer(15);

  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("restart.html");
  };
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length); // returns numbers that are within 0 and availableQuestions.length(51)
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

    console.log(currentQuestion.answer)

    let allOptions = choices.length
    let correctAns = currentQuestion.answer

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
      localStorage.setItem("mostRecentScore", score);
      selectedChoice.parentElement.classList.add(classToApply);
    } else {
      selectedChoice.parentElement.classList.add(classToApply);

      for (let i = 0; i < correctAns.length; i++) {
        // currentQuestion.answer[i].parentElement.classList.add('correct')
        if (currentQuestion.answer === selectedAnswer) {
          // correctAns.parentElement.classList.add('correct');
          // correctAns[i].setAttribute('class', 'correct')
        }
        // console.log('currentQuestion.answer[i]')

      }
    }  
    // else if (classToApply === "incorrect")  {
    //   for (let i = 0; i < choices.length; i++) {
    //     // console.log(e.target.parentElement.classList.add(classToApply))
    //     console.log(currentQuestion.answer)

    //     const timdd = currentQuestion.answer
    //     if (currentQuestion.answer !== selectedAnswer){
    //       // classToApply = 'correct'
    //       timdd.setAttribute('class', 'correct')
    //       console.log('Really')
    //       // console.log(choice)
    //     }
    //   }

    // }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 3000);
  
  });
});


startTimer = (time) =>  {  
  counter = setInterval(function(){
    timeCount.textContent = time
    time--

    ss.style.strokeDashoffset = 0 - (440 * time) / 15;
    timeCount.innerHTML = time + '<br><p>Seconds</p>'


    if (time <= 3) {
      ss.style.stroke = 'red';
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
