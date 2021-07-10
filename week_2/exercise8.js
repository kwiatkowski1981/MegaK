const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

const sum = grades.reduce((previous, current) => previous + current);
const gradesAverage = (sum  / grades.length).toFixed(2);
console.log(gradesAverage);
grades.filter(grade => grade > 4).forEach(grade => console.log(grade));


