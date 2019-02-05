let userInput = [];
let i = 0;
let itemNumber = Number(prompt('Hello! How many item you need?'));
 while(i < itemNumber){
     let sn = i + 1;
     let shoppingItem = prompt('Enter the item '+ sn);
     userInput.push(shoppingItem);
     i++;
 }
 console.log('Your shopping list includes: ');
 for (let i=0; i < userInput.length; i++){
    let sn = i + 1;
    console.log(sn + ': '+ userInput[i]);
 }
