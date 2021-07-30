const { setTimeout } = require('timers/promises');

async function brewTea() {
  console.log('Brewing Tea...');
  await setTimeout(2000);
  console.log('Tea is ready!!!');
}

async function orderKeyboard() {
  console.log('Ordering and waiting for package with keyboard...');
  await setTimeout(2000);
  console.log('Keyboard has arrived!!!');
}

(async () => {
  // await brewTea();
  // await orderKeyboard();
  // jak chce żeby wszystkie promisy zrobily sie jednoczesnie to robie tak:
  // przekazuje tablice wszystkich promisow:
  await Promise.all([brewTea(), orderKeyboard()]);
  await setTimeout(500);
  console.log('Finished.');
})();
