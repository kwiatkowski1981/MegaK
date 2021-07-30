const fetch = require('node-fetch');
const prompt = require('prompt-sync')();
// const isbn = 'i1lrYuczMUMC';

const isbn = prompt('Podaj mi numer ISBN książki, którą chcesz sprawdzić: ');
const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
const myQuery = fetch(bookUrl)
  .then((response) => response.json())
  .then((data) => {
    const [items] = data.items;
    const { volumeInfo: { title, authors } } = items;
    return console.log(`${authors}: ${title}`);
  })
  .catch((err) => console.log('coś poszło nie tak', err));
console.log(myQuery);

// zachec uzytkownika do podjecia akcji
// obsluz bledy jakie moga sie pojawic
// ponownie zachec uzytkownika do podjecia akcji
// czekanie tez moze byc obsluzone w postaci INFO i moze jakis wizualny loader
// potwierdzenie wykonania pracy
