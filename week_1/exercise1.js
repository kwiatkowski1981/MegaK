const firstName = prompt('Podaj swoje imie: ');
const lastName = prompt('Podaj swoje nazwisko: ');
const age = parseInt(prompt('Podaj swój wiek: '));

if (age >= 18) {
  console.log(`My name is %c${firstName} ${lastName} %c and i am %c${age} %cyo.`, 'color: red', 'color:', 'color: green', 'color:');
} else if (age < 18) {
  console.log(`You are to young, your age is only %c${age}`, 'color: green');
}
