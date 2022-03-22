'use strict';

const checkButton = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');

const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;

checkButton.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (Number(score.textContent) > 0) {
    if (!guess) {
      message.textContent = "⛔️ There's no number! Type it";
    } else if (guess === secretNumber) {
      message.textContent = 'You won! 🎊';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.highscore').textContent = `${score.textContent}`;
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess > secretNumber) {
      message.textContent = 'Too high!📈';
      score.textContent = `${Number(score.textContent) - 1}`;
    } else if (guess < secretNumber) {
      message.textContent = 'Too low!📉';
      score.textContent = `${Number(score.textContent) - 1}`;
    }
  } else {
    message.textContent = 'Sorry, you lost🙁';
    document.querySelector('body').style.backgroundColor = 'red';
  }
});

againBtn.addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  score.textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
