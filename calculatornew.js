const messages = require('./calculator_messages.json');
const readline = require('readline-sync');


function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(messages.hi);

function calculator() {
  prompt(messages.first);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt(messages.hmm);
    number1 = readline.question();
  }
  
  prompt(messages.second);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt(messages.hmm);
    number2 = readline.question();
  }
  
  prompt(messages.operation);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(messages.amust);
    operation = readline.question();
  }
  
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`The result is: ${output}`);
}
 
calculator();

function roundb() {  
  prompt(messages.like);
  let another = readline.question();
  another === '1' ? calculator() : console.log(messages.thx);
  
  while (!['1', '2'].includes(another)) {
  prompt(messages.bmust);
  another = readline.question();
  }
}
roundb();