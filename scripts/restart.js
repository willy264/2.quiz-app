const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();
};





// function showResultBox () {
//   const scoreText = document.querySelector('.score_text')
//   if (userScore > 3) {
//     let scoreTag = `<span>Congrats, Your score is ${userScore} out of ${questionS.length}` 
//     scoreText.innerHTML = scoreTag
//   } else if (userScore > 1) {
//     let scoreTag = `<span>Nice, Your score is ${userScore} out of ${questionS.length}` 
//     scoreText.innerHTML = scoreTag
//   } else {
//     let scoreTag = `<span>Sorry, Your score is ${userScore} out of ${questionS.length}` 
//     scoreText.innerHTML = scoreTag
//   }
// }
// showResultBox()

  
// const result_box = document.querySelector('.result_box')

// function restart_quiz() {
//   window.location.assign("./quiz.html");
//   let que_count = 0;
//   let que_numb = 1
//   let timeValue = 15
//   let userScore = 0;
//   showQuestion(que_count);
//   queCounter(que_numb);
//   clearInterval(counter);
//   startTimer(timeValue);
//   next_btn.style.display = 'none'    
//   timeOff.textContent = "Time left"
// }

// function quit_quiz() {
//   window.location.assign("./index.html");
// }


