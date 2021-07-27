const prompt = require('prompt-sync')();

class Calculator {
    constructor() {
        this.num1 = Number(prompt('podaj pierwszą liczbę: '));
        this.num2 = Number(prompt('podaj drugą liczbę: '));
        this.result = 0;

        if (
            Number.isNaN(this.num1) || Number.isNaN(this.num2)
        ) {
            throw new Error('Input is not a number.');
        } else if (
            Number(this.num1 === Number('')) ||
            Number(this.num2 === Number(''))
        ) {
            throw new Error('Input can not be empty or be "0".');
        }
    }


    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mtp() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }

    chooseYourOption() {
        const option = Number(prompt('Wybierz numer opcji: 1: dodaj, 2: odejmij, 3: pomnóż, 4: podziel '));

        switch (option) {
            case 1:
                console.log('wybrałeś opcję dodawania.');
                this.result = this.add();
                console.log(`Twój wynik to: ${this.result}`);
                break;
            case 2:
                console.log('wybrałeś opcję odejmowania.');
                this.result = this.sub();
                console.log(`Twój wynik to: ${this.result}`);
                break;
            case 3:
                console.log('wybrałeś opcję mnożenia.');
                this.result = this.mtp();
                console.log(`Twój wynik to: ${this.result}`);
                break;
            case 4:
                console.log('wybrałeś opcję dzielenia.');
                this.result = this.div();
                console.log(`Twój wynik to: ${this.result}`);
                break;
            default:
                console.log('nie ma takiej opcji.');
        }
    }

}

try {
    calculator1 = new Calculator();
    calculator1.chooseYourOption();
} catch (error) {
    console.log(error.message);
}


