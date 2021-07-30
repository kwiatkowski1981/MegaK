const obj = {
  name: 'Jan',
  lastname: 'Kowalski',
  age: 27,
};

for (const objKey in obj) {
  console.log(`to będzie ciekawe: ${objKey}: ${obj[objKey]}`);
}

const keys = Object.keys(obj);
console.log(keys);
// Dostaje sie do key i wartosci key czyli do jego value ( cos jak na dole entries )
for (const key of keys) {
  console.log(key, obj[key]);
}

const values = Object.values(obj);
console.log(values);

const entries = Object.entries(obj);
console.log(entries);

for (const entry of entries) {
  const [key, value] = entry;
  console.log(`${key} - ${value}`);
}
// krótszy zapis. Destrukturyzacja w środku pętli
for (const [key, value] of entries) {
  console.log(`${key} : ${value}`);
}

const flattenEntries = entries.flat();
console.log(flattenEntries);
