const readline = require('readline-sync');

console.log('What is the loan duration in months?');
let loanDurationMonths = readline.question();

console.log('What is the loan amount?');
let loanAmount = readline.question();

console.log('what is the APR?');
let annualIntRate = readline.question();

let monthlyIntRate = (annualIntRate / 12) / 100;

let monthlyPayment = loanAmount * (monthlyIntRate /
(1 - Math.pow((1 + monthlyIntRate), (-loanDurationMonths))));

let refinedMonthly = monthlyPayment.toFixed(2);

console.log(`Your monthly payment shall be $${refinedMonthly}.`);