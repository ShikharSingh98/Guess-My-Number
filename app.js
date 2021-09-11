const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const number = document.querySelector('.number');
const guessNumber = document.querySelector('.guess-number');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const topScore = document.querySelector('.high-score');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let playerScore = 20;
let highScore = 0;

function displayMessage(messageText) {
  message.textContent = messageText;
}

checkButton.addEventListener('click', function () {
  const guess = Number(guessNumber.value);

  if (!guess) {
    displayMessage('⛔ No Number!');
  } else {
    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      number.textContent = secretNumber;
      document.body.style.backgroundColor = '#1c8f3d';
      if (playerScore > highScore) {
        highScore = playerScore;
        topScore.textContent = highScore;
      }
    } else {
      displayMessage(guess > secretNumber ? '🔼 Too High!' : '🔻 Too Low!');
      playerScore = playerScore - 1;
      if (playerScore > 0) {
        score.textContent = playerScore;
      } else {
        displayMessage('😯 Sorry you lost the game!');
        score.textContent = 0;
      }
    }
  }
});

againButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing . . .');
  playerScore = 20;
  score.textContent = playerScore;
  guessNumber.value = '';
  number.textContent = '?';
  document.body.style.backgroundColor = '#5461b1';
});
