const mySet = new Set();
mySet.add('m');
mySet.add('n');
mySet.add('s');
mySet.add(3);
mySet.add('Jakub Kwiatkowski');

// console.log(mySet.entries());
// console.log(mySet.keys());
// console.log(mySet.values());
// console.log(' ');

const map = new Map();
const itemToCheck = 'merc';
map.set('cucumber', 7.5);
map.set('tomato', 8);
map.set('merc', 15_000);

// console.log(map);
// console.log('Checked item is worth', map.get(itemToCheck));

const obj = {
  cucumber: 7.5,
  tomato: 8,
  merc: 15_000,
};

// const myNewMap = new Map();
const myNewMap = (Object.entries(obj));
// console.log(` myNewMap = ${myNewMap}`);

const myArr = [1, 1, 3, 2, 4, 2, 5, 7, 1, 9, 8, 7, 6, 4, 5, 3, 2, 1, 6, 5, 4, 3, 9, 0];
const myUniqueArrValues = [...new Set(myArr)];
// console.log(myUniqueArrValues.sort());
console.log(`Moje unikatowe wartości tablicy to: ${myUniqueArrValues.sort()}`);

const a = 1;
// console.log(a);

const x = 6;
const z = 1;
// console.log(x, z);

const f = 9;
// console.log(f);
