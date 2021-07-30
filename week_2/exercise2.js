const array = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [...array];

array3.push(4);

console.log(array);
console.log(array3);
console.log(array === array2);

const obj1 = {
  name: 'dfg',
  lastName: 'ery',
};

const obj2 = {
  ...obj1,
  age: 100,
};

const obj3 = {
  ...obj1,
  age: 100,
  name: 'buba', // zmiana właściwości przez nadpisanie jej, jak by w kodzie było niżej zadeklarowane nowe imie
};

const obj4 = {
  name: 'sroka', // kolejnosc ma znaczenie, właściwość nie została zmieniona!
  ...obj1,
  age: 1000,
};

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
