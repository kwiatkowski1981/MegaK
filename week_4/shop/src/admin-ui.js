const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUl = document.querySelector('.products-list');


const addProductToProductList = event => {
    event.preventDefault();
    const name = nameInput.value;
    const price = Number(priceInput.value);

    const newLi = document.createElement('li');
    const newStrong = document.createElement('strong');
    newStrong.innerText = name;
    const newPriceText = document.createTextNode(` - ${price.toFixed(2)} `);
    const newBtn = document.createElement('button');

    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'BUY';
    newBtn.addEventListener('click', addProductToBasket);

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);

    productsUl.appendChild(newLi);

    console.log(name, price);
    // console.log(event.target.elements['product-name'].value);
    // console.log(event.target.elements['product-price'].value);
    createBasketUi();
    nameInput.value = '';
    priceInput.value = '';
};

addProductForm.addEventListener('submit', addProductToProductList)