const name = 'imie Nazwisko';
const age = 35;
const role = 'Admin';

const info = `${name} ` + 'has role of' + ` ${role} ` + 'and is born in year' + ` ${new Date().getFullYear() - age}`;
const info2 = `${name} has role of ${role} and is born in year ${new Date().getFullYear() - age}`;
console.log(info);
console.log(`%c${info2}`, 'color:red');
