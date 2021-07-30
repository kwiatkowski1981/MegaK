const ar = ['Anna', 'Andrzej', 'Bartłomiej', 'Jakub'];

for (const name of ar) {
  if (name[0] === 'A') {
    console.log(name);
  }
}

const names = ar.reduce((prev, curr) => {
  if (curr[0] === 'A') {
    return `${prev} ${curr}`;
  }
  return prev;
}, '');

const namesLength = ar.reduce((prev, curr) => prev + curr.length, 0);

console.log(names);
console.log(typeof (names));
console.log(namesLength);

const namesStartsWithA = ar
  .filter((names) => names[0] === 'A')
  .join(' ');
console.log(namesStartsWithA);

for (const name of ar) {
  console.log(name.length);
}

const getAllLetters = function () {
  let sum = 0;
  for (const string of ar) {
    sum += string.length;
  }
  return sum;
};
console.log(getAllLetters());

const getLetters = () => {
  let sum = 0;
  for (const string of ar) {
    sum += string.length;
  }
  return sum;
};

console.log(getLetters());

// (() => {
//     let sum = 0;
//     for (const string of ar) {
//         sum += string.length;
//     }
//     return sum;
// })();
