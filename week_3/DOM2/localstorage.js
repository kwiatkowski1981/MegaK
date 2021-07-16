const h1 = document.querySelector('h1');

const personInfo = localStorage.getItem('personInfo');
if (personInfo === null) {
    const name = prompt('What is your name? ');
    const surname = prompt('What is your last name? ');
    const person = {
        name,
        surname,
    };
    localStorage.setItem('personInfo', JSON.stringify(person));
} else {
    const person = JSON.parse(personInfo);
    // h1.innerText = `${person.name}, ${person.surname}`;
    const {name, surname} = person;
    h1.innerText = `${name}, ${surname}`;
}