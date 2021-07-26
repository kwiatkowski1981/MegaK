const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.buy-all');

const basket = new Basket();

const removeItem = event => {
    const id = Number(event.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}

const createBasketUi = () => {
    basketUl.innerText = '';
    const summaryInfos = basket.getBasketSummary();
    for (const {id, text} of summaryInfos) {
        const newLi = document.createElement('li');
        newLi.innerText = text;
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        basketUl.appendChild(newLi);
    }
    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Buy now: ${basketTotalValue.toFixed(2)} $`;
    buyAllBtn.disabled = basketTotalValue === 0;
    // basketTotalValue > 0 ? buyAllBtn.disabled = false : buyAllBtn.disabled = true;
};

const addProductToBasket = event => {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    const newProduct = new Product(name, price);
    basket.add(newProduct);
    createBasketUi();
}

const buyAllProducts = () => {
        alert(`You have purchased products with a total value of: ${basket.getTotalValue().toFixed(2)}$`);
        basket.clear();
        createBasketUi();
};

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToBasket);
}

buyAllBtn.addEventListener('click', buyAllProducts);

createBasketUi();
