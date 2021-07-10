// https://replit.com/@Bartiii2000


/*________________ Zadanie 1 */
/* Napisz kod który odwraca tworzy nowego stringa odwracając kolejność stringa na którym wykonywane jest zadanie */
/* Nie używamy własnych ani wbudowanych funkcji (na to za wcześnie), używamy tylko pętli.*/

const startText = "Jestem tutaj";
let reverseText = "";

for (let i = 0; i < startText.length; i++) {

    reverseText += startText[startText.length - 1 - i]
}

console.log(reverseText);
/*lub*/
// for (let i = startText.length - 1; i >= 0  ; i--) {
//   reverseText += startText[i]
// }
// console.log(reverseText);



/*________________ Zadanie 2 */
/* Napisz kod który zmienia wszystkie a w tekście na x, a 'b' (małe i duże) na z. Mozesz użyć tylko pętli i instrukcji warunkowej */

const startText2 = "Hejka, tutaj Beata 'betka' Kowalska!";
let reverseText2 = "";

for (let i = 0; i < startText2.length; i++) {
    if(startText2[i] === "a") {
        reverseText2 += "x";
    } else if (startText2[i] === "b" ||      startText2[i] === "B") {
        reverseText2 += "z";
    } else {
        reverseText2 += startText2[i];
    }
}

console.log(reverseText2);



// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************

/*________________ Zadanie 1 */
/* Napisz kod który odwraca tworzy nowego stringa odwracając kolejność stringa na którym wykonywane jest zadanie */
/* Nie używamy własnych ani wbudowanych funkcji (na to za wcześnie), używamy tylko pętli.*/

const startText = "Jestem tutaj";
let reverseText = "";

//Pętla

console.log(reverseText);



/*________________ Zadanie 2 */
/* Napisz kod który zmienia wszystkie a w tekście na x, a b (małe i duże) na z. Mozesz użyć tylko pętli i instrukcji warunkowej */

const startText2 = "Hejka, tutaj Beata 'betka' Kowalska!";
let reverseText2 = "";

//Rozwiązanie tutaj

console.log(reverseText2);


// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************
// *******************************************************************************************************************

