const btnAddClick = document.querySelector('.btn-toggle-color');
const btnRemoveClick = document.querySelector('.btn-remove-click');
const btnResetClick = document.querySelector('.btn-reset-click');
const digits = document.querySelector('.counter-digits');
const digitsMouseDown = document.querySelector('.counter-digits-mouse-down');
const digitsMouseUp = document.querySelector('.counter-digits-mouse-up');
const body = document.body;
// let counter = 0;

// btnAddClick.addEventListener('click', (e) => {
//     const isDarkMode = body.classList.toggle('dark-mode');
//     isDarkMode ? btnAddClick.innerText = 'make light' : btnAddClick.innerText = 'stay dark';
//     isDarkMode ? console.log("%c,,|,,", "color:red") : console.log("%ci'm bad", "color:yellow");
//     counter++;
//     digits.innerText = counter;
// });


let currentValue = 0;
let currentValueMouseDown = 0;
let currentValueMouseUp = 0;

const key = 'new click';
if (!localStorage.getItem(key)) {
    localStorage.setItem(key, '0');
} else {
    digits.innerText = localStorage.getItem(key);
}


const keyMouseDown = 'new clickMouseDown';
if (!localStorage.getItem(keyMouseDown)) {
    localStorage.setItem(keyMouseDown, '0');
} else {
    digitsMouseDown.innerText = localStorage.getItem(keyMouseDown);
}


const keyMouseUp = 'new clickMouseUp';
if (!localStorage.getItem(keyMouseUp)) {
    localStorage.setItem(keyMouseUp, '0');
} else {
    digitsMouseUp.innerText = localStorage.getItem(keyMouseUp);
}


btnAddClick.addEventListener('click', (e) => {
        localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);
        digits.innerHTML =
            localStorage.getItem(key) < 10 ?
                '0' + localStorage.getItem(key) :
                localStorage.getItem(key);

        const isDarkMode = body.classList.toggle('dark-mode');
        isDarkMode ? btnAddClick.innerText = 'make light' : btnAddClick.innerText = 'stay dark';
    }
);

btnRemoveClick.addEventListener('click', (e) => {
        currentValue = parseInt(localStorage.getItem(key));
        if (currentValue > 0) {
            localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);
            digits.innerHTML =
                localStorage.getItem(key) < 10 ?
                    '0' + localStorage.getItem(key) :
                    localStorage.getItem(key);

            const isDarkMode = body.classList.toggle('dark-mode');
            isDarkMode ? btnAddClick.innerText = 'make light' : btnAddClick.innerText = 'stay dark';

        }
    }
);


btnAddClick.addEventListener('mousedown', (e) => {
        localStorage.setItem(keyMouseDown, parseInt(localStorage.getItem(keyMouseDown)) + 1);
        digitsMouseDown.innerHTML =
            localStorage.getItem(keyMouseDown) < 10 ?
                '0' + localStorage.getItem(keyMouseDown) :
                localStorage.getItem(keyMouseDown);
    }
);

btnRemoveClick.addEventListener('mousedown', (e) => {
        currentValueMouseDown = parseInt(localStorage.getItem(keyMouseDown));
        if (currentValueMouseDown > 0) {
            localStorage.setItem(keyMouseDown, parseInt(localStorage.getItem(keyMouseDown)) - 1);
            digitsMouseDown.innerHTML =
                localStorage.getItem(keyMouseDown) < 10 ?
                    '0' + localStorage.getItem(keyMouseDown) :
                    localStorage.getItem(keyMouseDown);
        }
    }
);


btnAddClick.addEventListener('mouseup', (e) => {
        localStorage.setItem(keyMouseUp, parseInt(localStorage.getItem(keyMouseUp)) + 1);
        digitsMouseUp.innerHTML =
            localStorage.getItem(keyMouseUp) < 10 ?
                '0' + localStorage.getItem(keyMouseUp) :
                localStorage.getItem(keyMouseUp);
    }
);

btnRemoveClick.addEventListener('mouseup', (e) => {
        currentValueMouseUp = parseInt(localStorage.getItem(keyMouseUp));
        if (currentValueMouseUp > 0) {
            localStorage.setItem(keyMouseUp, parseInt(localStorage.getItem(keyMouseUp)) - 1);
            digitsMouseUp.innerHTML = localStorage.getItem(keyMouseUp) < 10 ?
                '0' + localStorage.getItem(keyMouseUp) :
                localStorage.getItem(keyMouseUp);
        }
    }
);


btnResetClick.addEventListener('click', (e) => {
        localStorage.clear();
        localStorage.setItem(key, '00');
        localStorage.setItem(keyMouseDown, '00');
        localStorage.setItem(keyMouseUp, '00');
        digits.innerHTML = localStorage.getItem(key);
        digitsMouseDown.innerHTML = localStorage.getItem(keyMouseDown);
        digitsMouseUp.innerHTML = localStorage.getItem(keyMouseUp);
    }
);

