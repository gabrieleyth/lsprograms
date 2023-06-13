const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
// extracting choices to constant to improve code readability
// Also, if we later extend our game to accept more choices,
// we can add it to the VALID_CHOICES array.

function prompt(message) {
  console.log(`=> ${message}`);
}

// ask the user to choose one of rock, paper or scissors

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question;
  
  // keep prompting while choice does not include valid options
  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }
  
  // randomizing the computer choice by 'flooring' (no decimals) the math
  // random method between 0 and the length of the VALID CHOICES array
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  
  prompt(`You chose ${choice}, computer chose ${computerChoice}.`);
  
  // determining who the winner is via if else
  if ((choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You win!');
  } else if ((choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'scissors') ||
      (choice === 'scissors' && computerChoice === 'rock')) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
  
  // while loop for if you want to play another game
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question.toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  
  if (answer[0] !== 'y') break;
}