document.addEventListener('DOMContentLoaded', function() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
  
    const guessButton = document.getElementById('guessButton');
    const guessInput = document.getElementById('guessInput');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
  
    guessButton.addEventListener('click', function() {
      const guess = parseInt(guessInput.value);
      if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number between 1 and 100.";
        return;
      }
  
      attempts++;
  
      if (guess === secretNumber) {
        message.textContent = "Congratulations! You've guessed the number!";
        guessInput.disabled = true;
        guessButton.disabled = true;
      } else if (guess < secretNumber) {
        message.textContent = "The number is high.";
      } else {
        message.textContent = "The number is low.";
      }
  
      attemptsDisplay.textContent = `Attempts: ${attempts}`;
  
      if (attempts === 5 && guess !== secretNumber) {
        message.textContent = `Game over! The correct number was ${secretNumber}.`;
        guessInput.disabled = true;
        guessButton.disabled = true;
      }
    });
  });