"use strict";
class Costumer {
    constructor(n) { this.name = n; }
    ;
}
class Item {
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
}
class Order {
    constructor(c, i, p, d) {
        this.costumer = c;
        this.items = i;
        this.payment = p;
        this.discount = d;
    }
    subtotal() {
        const sum = this.items.reduce((acc, curr) => acc + curr.price, 0);
        return sum;
    }
    total() {
        let total = this.subtotal();
        if (this.discount === null)
            return total;
        total -= (total * this.discount);
        return total;
    }
}
;
const costumer1 = new Costumer('boladao');
const item1 = new Item('batata Frita', 10);
const item2 = new Item('Pastel', 7);
const item3 = new Item('Refri 2L', 8);
const order1 = new Order(costumer1, [item2, item3], 'cartão', 0.1);
console.log(order1);
console.log(order1.subtotal());
console.log(order1.total());
