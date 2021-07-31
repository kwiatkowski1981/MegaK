const prompt = require('prompt-sync')();

class Calculator {
  constructor() {
    this.num1 = Number(prompt('Enter the first number: '));
    this.num2 = Number(prompt('Enter the second number: '));
    this.result = 0;
    this.option = Number(prompt('Select an option number: 1: add, 2: subtract, 3: multiply, 4: divide '));
    this.validateInputData();
  }

  validateInputData() {
    if (
      Number.isNaN(this.num1) || Number.isNaN(this.num2)
    ) {
      throw new Error('Input is not a number. ');
    } else if (
      this.num1 === Number('') || this.num2 === Number('')
    ) {
      throw new Error('Input can not be "0" or empty. ');
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
    console.log(`Your score is: ${this.result}`);
  }

  printChosenOption() {
    switch (this.option) {
      case 1:
        console.log('You chose the add option: ');
        break;
      case 2:
        console.log('You chose the subtract option: ');
        break;
      case 3:
        console.log('You chose the multiply option. ');
        break;
      case 4:
        console.log('You chose the divide option. ');
        break;
      default:
        console.log('');
    }
  }

  optionsToAdd() {
    this.printChosenOption();
    this.printResult();
  }

  chooseYourOption() {
    switch (this.option) {
      case 1:
        this.result = this.add();
        this.optionsToAdd();
        break;
      case 2:
        this.result = this.sub();
        this.optionsToAdd();
        break;
      case 3:
        this.result = this.mtp();
        this.optionsToAdd();
        break;
      case 4:
        this.result = this.div();
        this.optionsToAdd();
        break;
      default:
        console.log('There is no such option to choose. ');
    }
  }
}

try {
  calculator1 = new Calculator();
  calculator1.chooseYourOption();
} catch (error) {
  console.log(error.message);
}
