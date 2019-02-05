let randomNumber = Math.floor(Math.random() * 11);
console.log('Hey! Guess aany number between 0 and 10 inclusively');
for (let i=1; i < 9; i++){
    let message = 'Game Over! the number was ' + randomNumber;
        let guess = Number(prompt('Enter your guess' + i));
        if (guess > randomNumber){
            console.log('You guessed high');
        }
        else if (guess < randomNumber){
            console.log('You guessed low');
        }
        else {
            console.log('Wow! you got it right!');
            break;
        }
        if (i === 8) {
            console.log(message);
        }
    }

