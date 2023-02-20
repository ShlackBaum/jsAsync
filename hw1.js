import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
const truePassword = "iHateAsyncInJs"
const entered_password = await rl.question('Введите пароль');
rl.close();

function getPasswordChecker(password) {
    let checker = (truePassword == password)
    return function getPassword(password) {
       return console.log(checker ? true : false) 
    }
}

const MyFunc = getPasswordChecker(entered_password)
MyFunc()