/*
GAME FUNCTIONS:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // console.log(guess);

  // Validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // Check if won
  if (guess === winningNum) {
    // GAME OVER - WON

    // Disable the input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct. YOU WIN!`, 'green');

  } else {
    // Wrong Number
    guessesLeft -= 1;
    
    if(guessesLeft === 0) {
      // GAME OVER - LOST

      // Disable input
      guessInput.disabled = true;
      // Change border color
      guessInput.style.borderColor = 'red';
      // Set message
      setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red')
    } else {
      // GAME CONTINUES - ANSWER WRONG, MORE ATTEMPTS AVAILABLE

      // Change border color
      guessInput.style.borderColor = 'red';

      // Clear input for next guess
      guessInput.value = '';

      // Alert user guess was wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`, 'red')
    }
  }
});

// Set Message Function
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
