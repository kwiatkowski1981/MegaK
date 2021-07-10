const firstNumber = parseInt(prompt('Podaj pierwszą liczbę: '));
const secondNumber = parseInt(prompt('Podaj drugą liczbę: '));
const operator = prompt('co chcesz zrobić: "+" "-" "/" "*" ? wpisz odpowiedni znak: ');
// const calculate = firstNumber + operator + secondNumber

console.log(operator)

if (operator === '+') {
    console.log(`%c${firstNumber} %c${operator} %c${secondNumber}`, "color: red", "color:green", "color:red")
    console.log(firstNumber + secondNumber)
}
else if (operator === '-') {
    console.log(firstNumber - secondNumber)
}
else if (operator === '/') {
    console.log(firstNumber / secondNumber)
}
else if (operator === '*') {
    console.log(firstNumber * secondNumber)
}


// if (firstNumber, secondNumber, operator !== '') {
//     console.log(`%c${firstNumber} %c${operator} %c${secondNumber}`, "color: red", "color:green", "color:red")
//     console.log()
// }