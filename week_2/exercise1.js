// const calculate = function() {
//     num_1 = parseInt(prompt('podaj pierwsza liczbę: '));
//     num_2 = parseInt(prompt('podaj drugą liczbę: '));
//     const add = () => num_1 + num_2;
//     const sub = () => num_1 - num_2;
//     const mtp = () => num_1 * num_2;
//     const div = () => num_1 / num_2;
//     return console.log(add(), sub(), mtp(), div());
// }
//
// calculate()

// const oddOrEven = function (number) {
//
// }

// const number = parseInt(prompt('Podaj liczbę całkowitą: '));
//
// const checkNumber = (digit) => {
//     if (digit % 2 !== 0) {
//         return console.log('odd');
//     } else console.log('even')
// }
//
// checkNumber(number);
//
// const number2 = parseInt(prompt('Podaj liczbę całkowitą: '));
// const checkNumber2 = (digit) => (digit % 2 !==0? console.log('odd'):console.log('even'));
// checkNumber2(number2);


// np tworząc grę i chcąc sobie w obiekcie stworzyć właściwości, które nie były mutowalne można ten obiekt zamrozić.
//
const boss =  {
    hp: 10_000,
    str: 8_000,
    itd: 'whatever'
}
console.log(boss.hp)
boss.hp = 7_000;
console.log(boss.hp);


const boss2 =  Object.freeze({
    hp: 100_000,
    str: 80_000,
    itd: 'whatever2'
})

console.log(boss2.hp)
boss2.hp = 7_000; // hp podkreślone, już sie nie zmieni
console.log(boss2.hp);
boss2.str = 5_000; // str podkreślone, już też sie nie zmieni
console.log(boss2.str)



function Person() {
    const firstName = prompt('Podaj swoje imię: ');
    const lastName = prompt('Podaj swoje nazwisko: ');

    this.firstname = firstName;
    this.lastName = lastName;
    this.introduceYourself = function () {
        console.log(`Hello i am ${this.firstname} ${this.lastName} :) `);
    }
    this.introduceYourself();
}


function MojaKlasa() {
    this.studentsCounter = 0;
    this.students = []; // jesli usune cos np delete this.students[3] to i tak this.students.length bedzie taka sama

    this.createStudent = function () {
        this.student = new Person()
    }

    this.addStudent = function () {
        this.createStudent();
        this.students.push(this.student);
        this.studentsCounter++;
    }

    this.showStudents = function () {
        console.log(this.studentsCounter);
    }

    this.addTenStudents = function () {
        while (this.students.length < 10) {
            this.addStudent();
        }
    }
    // this.addTenStudents = function () {
    //     let counter = 0;
    //     while (counter < 10) {
    //         this.addStudent();
    //         counter++;
    //     }
    // }
    this.addTenStudents();
    this.showStudents();
    console.log(this.students);
}

const mojaPierwszaKlasa = new MojaKlasa();

console.log(mojaPierwszaKlasa);

