const person = {
    name: 'Testowa',
    surname: 'Osoba',
    lifeEvents: ['1991', '2001', '2077'],
    isAlive: true,
};

console.log(JSON.stringify(person));

const  personAsJson = '{"name":"Testowa","surname":"Osoba","lifeEvents":["1991","2001","2077"],"isAlive":true}';
console.log(personAsJson);
console.log(JSON.parse(personAsJson));