'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displaymsg = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displaymsg('No number');
  }

  //   match found
  else if (guess === secret) {
    // document.querySelector('.message').textContent = 'Correct number';
    displaymsg('Correct number');

    document.querySelector('.number').textContent = secret;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // guess is not equal to secret value
  else if (guess !== secret) {
    if (score > 1) {
      displaymsg(guess > secret ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You lost the game';
      displaymsg('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   guess is too low
  //   else if (guess < secret) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secret = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  //   document.querySelector('.message').textContent = 'Start guessing...';
  displaymsg('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
