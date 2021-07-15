const btn = document.querySelector('.btn-toggle-color');
const digits = document.querySelector('.counter-digits');
const body = document.body;
let counter = 0;

btn.addEventListener('click', () => {
    const isDarkMode = body.classList.toggle('dark-mode');
    isDarkMode ? btn.innerText = 'make light' : btn.innerText = 'stay dark';
    isDarkMode ? console.log("%c,,|,,", "color:red") : console.log("%ci'm bad", "color:yellow");
    counter++;
    digits.innerText = counter;
});

