const inputNumber = document.querySelector('.numbers');
const btnSubmit = document.querySelector('.btn-submit-js');
const btnReset = document.querySelector('.btn-reset-js');
const printResult = document.querySelector('.result-paragraph-js');
const numbersInfo = localStorage.getItem('numbersInfo');
const parsedNumbersInfo = JSON.parse(localStorage.getItem('numbersInfo'));
const numbers = [];

if (!numbersInfo) {
    localStorage.setItem('numbersInfo', JSON.stringify(numbers));
} else {
    const numbersToPrint = JSON.parse(localStorage.getItem('numbersInfo'));
    printResult.innerText = numbersToPrint.reduce((a, b) => a + b, 0);
}

btnSubmit.addEventListener('click', (e) => {
    try {
        e.preventDefault();
        const newNumbers = JSON.parse(localStorage.getItem('numbersInfo'));
        //TODO input as an Array => myBrandNewBigArray = [...arrayFromLocalStorage, ...arrayFromInput];
        if (!isNaN(parseInt(inputNumber.value))) {
            newNumbers.push(parseInt(inputNumber.value));
            localStorage.setItem('numbersInfo', JSON.stringify(newNumbers));
        } else {
            console.log('tylko liczby');
        }
        printResult.innerText = newNumbers.reduce((a, b) => a + b, 0);
        inputNumber.value = '';
    } catch (e) {
        console.log('U fucked Up Duh');
    }
})

btnReset.addEventListener('click', (e) => {
    localStorage.clear();
    localStorage.setItem('numbersInfo', JSON.stringify(numbers));
    printResult.innerText = 0;
});

