// const poland = new Country('PLN', 'Polish', 4);

class Country {
  constructor(currency, language, currencyConvertRatioToUsd) {
    this._currency = currency;
    this._language = language;
    this._currencyConvertRatioToUsd = currencyConvertRatioToUsd;
    this._isShengen = true;
  }

  convertMoney(valueInLocalCurrency) {
    return valueInLocalCurrency * this._currencyConvertRatioToUsd;
  }
}

const poland = new Country('PLN', 'Polish', 1 / 4);
console.log(poland);
console.log(poland._currency);
console.log(poland._language);
console.log(poland._currencyConvertRatioToUsd);
console.log(poland._isShengen);
const souvenirInPln = 50;
const souvenirInUsd = poland.convertMoney(souvenirInPln);
console.log(souvenirInUsd);
