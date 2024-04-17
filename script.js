'use strict';

// console.log(document.querySelector(`.message`).textContent);
// // DOM MANIPULATION
// // document object model
// // document.queySelector-->select dom
// // .textContent -->change text
// // .value--> change the value from inputs

// document.querySelector(`.message`).textContent = `Correct Number!`;

// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 10;
// document.querySelector(`.guess`).value = 23;
// console.log(document.querySelector(`.guess`).value);

// GUESS MY NUMBER GAME

// add the secret random number from 0 to 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// add variable to store the score to dicrease after each try
let score = 20;

// add variable to store highscore
let highScore = 0;

// add function to display messages in text content
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// add event listener for check button
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // add senarios
  // when there is no input
  if (!guess) {
    displayMessage('No number!');
    // when player WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!!!');
    // Display secret number if player wins
    document.querySelector('.number').textContent = secretNumber;
    // change bg color if winning
    document.querySelector('body').style.backgroundColor = '#60b347';
    // change size of score if winning
    document.querySelector('.number').style.width = '30rem';
    // display highscore to label highscore if is same as score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? ' 😖😖 Too high!' : '😟😟 Too Low!'
      );
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🥺🥺 You lost the game!';
      document.querySelector('.score').textContent = '0';
    }
  }
});
//  add eventListener to RESET at again button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = '😎 Start guessing again...';
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
