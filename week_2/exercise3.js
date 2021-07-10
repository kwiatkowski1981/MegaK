const sum = (...args) => {
    let sumOfGivenArguments = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log('All arguments must be numbers!');
            return;
        } else sumOfGivenArguments += args[i];
    }
    console.log(sumOfGivenArguments);
};

sum(1);
sum(3, 5, 7, 8, 1, 2, 6);
sum(1, 2, 3, 4, 5, 6);
sum();

// rozwiazanie nr 2
// funkcja dzieli tablice na sety i je ze soba dodaje, inicjalizator ustawiony na 0
// sumOfGivenNumbers = args.reduce(function (a, b) {
//     return a + b
// }, 0);

