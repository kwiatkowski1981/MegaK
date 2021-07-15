const {setTimeout} = require('timers/promises');
// nowa metoda importowania modułów w js


const intervalId = setInterval( () => console.log('Cyk'), 100);

(async () => {
    console.log('hi');
    await setTimeout(1000);
    console.log('hi hi hi hi hi hi');
    clearInterval(intervalId);
})();