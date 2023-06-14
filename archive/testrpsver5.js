const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let myScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  // storing conditionals including spock and lizard under variables to improve readability
  let youWin = (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'lizard') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'paper' && computerChoice === 'spock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'lizard' ) ||
      (choice === 'spock' && computerChoice === 'rock') ||
      (choice === 'spock' && computerChoice === 'scissors') ||
      (choice === 'lizard' && computerChoice === 'paper') ||
      (choice === 'lizard' && computerChoice === 'spock');

  let computerWins = (computerChoice === 'rock' && choice === 'scissors') ||
      (computerChoice === 'rock' && choice === 'lizard') ||
      (computerChoice === 'paper' && choice === 'rock') ||
      (computerChoice === 'paper' && choice === 'spock') ||
      (computerChoice === 'scissors' && choice === 'paper') ||
      (computerChoice === 'scissors' && choice === 'lizard' ) ||
      (computerChoice === 'spock' && choice === 'rock') ||
      (computerChoice === 'spock' && choice === 'scissors') ||
      (computerChoice === 'lizard' && choice === 'paper') ||
      (computerChoice === 'lizard' && choice === 'spock');

  if (youWin === true) {
    prompt('You win!');
  } else if (computerWins === true) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

/*function trackingScoreBothPlayers(choice, computerChoice) {
  if (displayWinner(choice, computerChoice) === 'You win!') {
    myScore += 1;
  } else if (displayWinner(choice, computerChoice) === 'Computer wins!') {
    computerScore += 1;
  }
}

function breakingForGrandWinner() {
  if (myScore === 3) {
    prompt("You are the Grand Winner!");
    myScore = 0;
  } else if (computerScore === 3) {
    prompt("Computer is the Grand Winner!");
    computerScore = 0;
  }
}*/

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  for (let i = 0; i < VALID_CHOICES.length; i++) {
    if (VALID_CHOICES[i][0] === choice[0]) {
      choice = VALID_CHOICES[i];
      break;
    } else if (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }
  }


  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);
  /*trackingScoreBothPlayers(choice, computerChoice);
  breakingForGrandWinner();*/

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    return false;
  }
}