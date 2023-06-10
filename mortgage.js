const readline = require('readline-sync');

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidWord(word) {
  return word !== 'y' && word !== 'n';
}


function displayingMortgage() {
  console.log('What is the loan duration in months?');
  let loanDurationMonths = readline.question();

  while (invalidNumber(loanDurationMonths)) {
    console.log('Invalid number, try again.');
    loanDurationMonths = readline.question();
  }

  console.log('What is the loan amount?');
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    console.log('Invalid number, try again.');
    loanAmount = readline.question();
  }

  console.log('what is the APR?');
  let annualIntRate = readline.question();

  while (invalidNumber(annualIntRate)) {
    console.log('Invalid number, try again.');
    annualIntRate = readline.question();
  }

  let monthlyIntRate = (annualIntRate / 12) / 100;

  let mathPow = Math.pow((1 + monthlyIntRate), (-loanDurationMonths));

  let monthlyPayment = loanAmount * (monthlyIntRate / (1 - mathPow));

  let refinedMonthly = monthlyPayment.toFixed(2);

  console.log(`Your monthly payment shall be $${refinedMonthly}.`);
}

displayingMortgage();

function anotherCalculation() {
  console.log('Feeling for another calculation? y/n ');
  let answer = readline.question();

  while (invalidWord(answer)) {
    console.log('Invalid input, try again.');
    answer = readline.question();
  }

  if (answer === 'y') {
    displayingMortgage();
  } else {
    console.log('See you later alligator!');
  }
}

anotherCalculation();


