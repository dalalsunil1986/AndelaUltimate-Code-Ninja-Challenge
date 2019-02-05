const lowerLimitTemp = 0;
const upperLimitTemp = 100;
let startTemp = Number(prompt('Enter the start temperature not less than ' + lowerLimitTemp));
while (startTemp < lowerLimitTemp){
    console.log('Your start temperature should not be less than ' + lowerLimitTemp);
    startTemp = Number(prompt('Enter the start temperature not LESS than ' + lowerLimitTemp));
}
let endTemp = Number(prompt('Enter the end temperature not greater than ' + upperLimitTemp));
while (endTemp > upperLimitTemp){
    console.log('Your end temperature should not be greater than ' + upperLimitTemp);
    startTemp = Number(prompt('Enter the end temperature not GREATER than ' + upperLimitTemp));
}
let stepDiff = endTemp - startTemp;
let stepSize = Number(prompt('Enter the step size: '));
while (stepSize > stepDiff){
    console.log('Your step size should not exceed ' + stepDiff);
    stepSize = Number(prompt('Enter the step size LESS than '+ stepDiff));
}

function temperatureConvetor(){
    for (let c=startTemp; c <= endTemp; c += stepSize){
        let farenheit = ((9/5) * c) + 32;
        console.log(c + ' -> ' + farenheit);
    }
}

temperatureConvetor();