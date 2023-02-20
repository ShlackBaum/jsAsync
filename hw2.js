import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

let counter = 0
async function getNumberChecker(trueNumber) {
    const rl = readline.createInterface({ input, output });
    let enteredNumber = await rl.question('Введите число ');
    rl.close();     
    let checker 
    counter++
    enteredNumber = +enteredNumber
    if (trueNumber < +enteredNumber) {
        checker = "Введенное число больше"
    }
    if (trueNumber > +enteredNumber) {
        checker = "Введенное число меньше"
    }
    if (trueNumber == +enteredNumber) {
        checker = "Введенное число совпадает"
        console.log("Ура!")
        console.log("Вы угадали с", counter, "попытки")
        return
    }
    if (isNaN(enteredNumber)){
        checker = "Вы не ввели число"
    }
    console.log(checker)
    console.log("Это была попытка #", counter)
    return getNumberChecker(trueNumber)
}

getNumberChecker(10)
