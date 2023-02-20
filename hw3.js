import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
let counter = 0
const rl = readline.createInterface({ input, output });

const guesser = function (trueNumber) {
  const enteredStr = rl.question('Введите число ');

  return enteredStr.then(inputStr => {
    const inputNum = parseInt(inputStr);
    counter++;

    if (isNaN(inputNum)) {
      console.log('Вы ввели не число\n');
      return guesser(trueNumber);
    }

    console.log(`Счётчик ${counter}`);

    if (trueNumber < inputNum) {
      console.log(`Введенное число ${inputNum} больше загаданного\n`);
      return guesser(trueNumber);
    }

    if (trueNumber > inputNum) {
      console.log(`Введенное число ${inputNum} меньше загаданного\n`);
      return guesser(trueNumber);
    }

    if (trueNumber === inputNum) {
      rl.close();
      console.log(`Введенное число ${inputNum} совпадает c загаданным`);
      return `Введенное число ${inputNum} совпадает c загаданным`;
    }

  })
  .catch(err => {
    console.error(err);
  })
}


guesser(10).then();
