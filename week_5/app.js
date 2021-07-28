// 'use strict';
//
// const myArr = [1,2,3,4,5,6,7,8,9,10];
// for ( x of myArr) {
//     console.log(x);
// }


/**
 * UWAGA! Otwórz narzędzia deweloperskie przeglądarki i dopiero uruchom ten kod!
 *
 * Następnie krok po kroku prześledź co dzieje się w kodzie.
 */

debugger;

const guestList = [];

function addPerson(name, surname, age) {
    const fullName = `${name} ${surname}`;
    if (age >= 18) {
        guestList.push(fullName);
    } else {
        // Zauważ, że Repl może powodowac niepotrzebne wchodzenie do metody console.log. Użyj "Step out of function", żeby wyjść z niego.
        console.log(`${fullName} is under age, cannot add to guests list.`);
    }
}

function generateHelloText(name) {
    return `Hello, ${name} it is a pleasure to see you!`;
}

function greet(personName) {
    console.log(generateHelloText(personName));
}

addPerson('Testowa', 'Osoba', 100);
addPerson('Kolejny', 'Testowy', 10);
addPerson('Mieszko', 'Pierwszy', 35);
addPerson('Młoda', 'Osoba', 15);

for (const person of guestList) {
    greet(person);
}