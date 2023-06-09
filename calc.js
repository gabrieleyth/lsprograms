const messages = require('./calcmessages.json');
const readline = require('readline-sync');

function prompt(message, lang = 'en') {
  console.log(`=> ${messages[lang][message]}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('hi');

prompt("Enter language code (e.g., 'en' for English):");
let languageCode = readline.question();

function calculator() {
  prompt('first', languageCode);
  let number1 = readline.question();
  
  while (invalidNumber(number1)) {
    prompt('hmm', languageCode);
    number1 = readline.question();
  }
  
  prompt('second', languageCode);
  let number2 = readline.question();
  
  while (invalidNumber(number2)) {
    prompt('hmm', languageCode);
    number2 = readline.question();
  }
  
  prompt('operation', languageCode);
  let operation = readline.question();
  
  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('amust', languageCode);
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
  
  prompt(`The result is: ${output}`, languageCode);
}
 
calculator();

function roundb() {  
  prompt('like', languageCode);
  let another = readline.question();
  another === '1' ? calculator() : prompt('thx', languageCode);
  
  while (!['1', '2'].includes(another)) {
    prompt('bmust', languageCode);
    another = readline.question();
  }
}
roundb();
