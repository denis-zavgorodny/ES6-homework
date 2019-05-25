const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

console.log(Cart);

Cart.prototype.remove = function (item) {
    const indx = this.getItemIndex(item);
    this.items.splice(indx, 1);
}
Cart.prototype.clear = function () {
    this.items.length = 0;
}
Cart.prototype.setCount = function (item, count) {
    if (count > 0) {
        const indx = this.getItemIndex(item);
        this.items[indx].count = count;
    } else throw "Count should be greater than zero";
}
Cart.prototype.toString = function () {
    let items = 0;
    this.items.forEach(element => {
        items += element.count;
    });
    return "In your cart " + items + " items";
}

module.exports = ShopCart;