const prompt = require('prompt-sync')();

class Calculator {
  constructor() {
    this.num1 = Number(prompt('podaj pierwszą liczbę: '));
    this.num2 = Number(prompt('podaj drugą liczbę: '));
    this.result = 0;
    this.option = Number(prompt('Wybierz numer opcji: 1: dodaj, 2: odejmij, 3: pomnóż, 4: podziel '));
    this.validateInputData();
  }

  validateInputData() {
    if (
      Number.isNaN(this.num1)
            || Number.isNaN(this.num2)
    ) {
      throw new Error('Input is not a number.');
    } else if (
      this.num1 === Number('')
            || this.num2 === Number('')
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

  printResult() {
    console.log(`Twój wynik to: ${this.result}`);
  }

  printChosenOption() {
    const { option } = this;
    switch (option) {
      case 1:
        'dodawania';
        break;
      case 2:
        'odejmowania';
        break;
      case 3:
        'mnożenia';
        break;
      case 4:
        'dzielenia';
        break;
      default:
        '';
    }

    console.log(`Wybrałeaś/eś opcję ${option}`);
  }

  chooseYourOption() {
    switch (this.option) {
      case 1:
        this.result = this.add();
        // console.log('wybrałeś opcję dodawania.');
        this.printChosenOption();
        this.printResult();
        break;
      case 2:
        this.result = this.sub();
        // console.log('wybrałeś opcję odejmowania.');
        this.printChosenOption();
        this.printResult();
        break;
      case 3:
        this.result = this.mtp();
        this.printChosenOption();
        this.printResult();
        // console.log('wybrałeś opcję mnożenia.');
        break;
      case 4:
        this.result = this.div();
        this.printChosenOption();
        this.printResult();
        // console.log('wybrałeś opcję dzielenia.');
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
