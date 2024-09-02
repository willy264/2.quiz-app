const finalScore = document.getElementById('finalScore');
          mostRecentScore = localStorage.getItem('mostRecentScore') || 0,
          playAgainBut = document.querySelector('#playAgain'),
          homeBtn = document.querySelector('#homeBtn')

playAgainBut.addEventListener('click', () => {
  localStorage.clear('mostRecentScore')
  return window.location.assign("quiz.html");
})
homeBtn.addEventListener('click', () => {
  return window.location.assign("index.html");
})

finalScore.innerText = `${mostRecentScore} out of 52 `
