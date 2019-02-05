console.log('Please choose any arithmetic operator below');
let menu = '1: addition\n2: subtraction\n3: multiplication\n4: division';
console.log(menu);
let operator = Number(prompt('Enter your choice: '));
let firstNumber = Number(prompt('Enter your first number: '));
let secondNumber = Number(prompt('Enter your second number'));
let result = 0;
let message = '';

switch(operator){
    case 1:
        result = firstNumber + secondNumber;
        message = firstNumber + ' + ' + secondNumber + ' = ';
        break;
    case 2:
        result = firstNumber - secondNumber;
        message = firstNumber + ' - ' + secondNumber + ' = ';
        break;
    case 3:
        result = firstNumber * secondNumber;
        message = firstNumber + ' * ' + secondNumber + ' = ';
        break;
    case 4:
        result = firstNumber / secondNumber;
        message = firstNumber + ' / ' + secondNumber + ' = ';
        break;
}

console.log(message + result);
