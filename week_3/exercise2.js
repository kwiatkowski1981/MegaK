const fetch = require('node-fetch');
const prompt = require('prompt-sync')();

// ********************************************************************************************************
// ********************************************************************************************************
//                                  sposoby zapisu funkcji anonimowych
// ********************************************************************************************************
// ********************************************************************************************************

// async function test() {
//     await console.log('hello world');
// }
//
// const test2 = async data => {
//     await console.log('hello');
// };
//
// test();
// // console.log(test2);
// test2().then(r => console.log('hello 3'));

// async function run() {
//     const response = await fetch('https://swapi.dev/api/people/1/');
//     const data = await response.json();
//
//     console.log(data);
// }
// run();
//
//
// // zmiana na funkcje strzalkowa przez contekst menu
// (async () => {
//     const response = await fetch('https://swapi.dev/api/people/1/');
//     const data = await response.json();
//
//     console.log(data);
// })();

(async () => {
    const response = await(await fetch('https://swapi.dev/api/people/1/')).json();
    console.log(response);
})();