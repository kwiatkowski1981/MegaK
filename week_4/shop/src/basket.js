class Basket {
  // items = [];   wersja nowa, krótsza bez wrzucania do konstruktora, js sam to zrobi
  constructor() {
    // const dataFromLS = this.loadFromLocalStorage();
    // if (dataFromLS) {
    //     return [];
    // } else {
    //     return dataFromLS
    // }
    //
    // this.items = dataFromLS ? dataFromLS : [];
    // // this.items = dataFromLS || [];
    // // this.items = this.loadFromLocalStorage() || [];

    this.items = this.loadFromLocalStorage() ?? [];

    this.totalValue = 0;
  }

  clear() {
    this.items.length = 0;
    // this.items.splice(0);
    // this.items = [];
    this.saveToLocalStorage();
  }

  add(item) {
    this.items.push(item);
    this.saveToLocalStorage();
    // this.addToTotalValue(item.price);
  }

  addToTotalValue(newPrice) {
    this.totalValue += newPrice;
  }

  remove(index) {
    this.items.splice(index - 1, 1);
    // const item = this.items[index -1];
    // this.removeFromTotalValue(item.price);
    this.saveToLocalStorage();
  }

  // TODO by adding purchased items set item counter and not add a new object
  saveToLocalStorage() {
    localStorage.setItem('basket-items', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem('basket-items'));
  }

  removeFromTotalValue(value) {
    this.getTotalValue() - value;
  }

  getDiscountedPrice(discountValue) {
    return this
      .getTotalValue() - discountValue * 0.1;
  }

  getTotalValue() {
    return this.items
      .reduce((prev, curr) => prev + curr.price, 0);
  }

  setNewPrice(newPrice) {
    this.price = newPrice;
  }

  getBasketSummary() {
    return this.items
      .map((product, i) => ({
        id: i + 1,
        text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}`,

      }));
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
}

// const shopBasket = new Basket();
//
// const oranges = new Product('oranges', 12.95);
// const cucumbers = new Product('cucumbers', 7.55);
// shopBasket.add(oranges);
// shopBasket.add(cucumbers);
// shopBasket.add(cucumbers);
//
// console.log(shopBasket);
// shopBasket.remove(2);
// console.log(shopBasket);
// console.log(shopBasket.getTotalValue());
// console.log(shopBasket.getDiscountedPrice(15));
// shopBasket.showBasket();
// console.log(shopBasket.getTotalValue());
