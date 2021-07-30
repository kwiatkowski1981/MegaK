const { body } = document;
const paragraphGood = document.querySelector('.paragraph-good-js');
const paragraphBad = document.querySelector('.paragraph-bad-js');
const btnGood = document.querySelector('.good-js');
const btnBad = document.querySelector('.bad-js');
const counterInfo = localStorage.getItem('counterInfo');

const counter = {
  good: 0,
  bad: 0,
};
counter.good.toString().padStart(2, '0');
counter.bad.toString().padStart(2, '0');

if (counterInfo === null) {
  localStorage.setItem('counterInfo', JSON.stringify(counter));
} else {
  const counterInfoToPrint = JSON.parse(counterInfo);
  const { good, bad } = counterInfoToPrint;
  paragraphGood.innerText = `You felt good: ${good.toString().padStart(2, '0')} times.`;
  paragraphBad.innerText = `You felt bad: ${bad.toString().padStart(2, '0')} times.`;
}

btnGood.addEventListener('click', (e) => {
  const counterGood = JSON.parse(localStorage.getItem('counterInfo'));
  counterGood.good++;
  localStorage.setItem('counterInfo', JSON.stringify(counterGood));
  paragraphGood.innerText = `You felt good: ${counterGood.good.toString().padStart(2, '0')} times.`;
});

btnBad.addEventListener('click', (e) => {
  const counterBad = JSON.parse(localStorage.getItem('counterInfo'));
  counterBad.bad++;
  localStorage.setItem('counterInfo', JSON.stringify(counterBad));
  paragraphBad.innerText = `You felt bad: ${counterBad.bad.toString().padStart(2, '0')} times.`;
  console.log(typeof (counterBad.bad.toString().padStart(2, '0')));
});
