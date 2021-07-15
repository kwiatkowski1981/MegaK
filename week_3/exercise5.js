const fetch = require('node-fetch');
const prompt = require('prompt-sync')();


const isbn = '978-83-900210-1-0';
// const isbn = prompt('Podaj mi numer ISBN książki, którą chcesz sprawdzić: ');
const bookUrl = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

(async () => {
    try {
        const data = await (await fetch(bookUrl)).json();
        const [items] = data.items;
        const {volumeInfo: {title, authors}} = items;
        return console.log(authors + ': ' + title);
    } catch (err) {
       console.log('coś poszło nie tak', err);
    }
})();

