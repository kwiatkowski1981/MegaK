const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];
// const cityNamesLengthIsEven = cities.filter(city => !(city.length % 2));
// console.log(cityNamesLengthIsEven);
// cities.forEach(city => console.log(city.toUpperCase()));
cities.filter(city => !(city.length % 2)).forEach(city => console.log(city.toUpperCase()));

console.log('');




const cityNamesLengthIsEven = city => !(city.length % 2);
const printCities = city => console.log(city.toUpperCase())

cities
    .filter(cityNamesLengthIsEven)
    .forEach(printCities);