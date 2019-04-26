const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

ShopCart.prototype.remove = function (item) {
    let index = this.getItemIndex(item);
    this.items.splice(index, 1);
};

ShopCart.prototype.clear = function () {
    this.items.length = 0;
};

ShopCart.prototype.setCount = function (item, count) {
    let index = this.getItemIndex(item);
    if (count < 1) {
        throw 'Count should be greater than zero';
    }
    this.items[index] = {
        item: item,
        count: this.items[index].count = count
    }
};

ShopCart.prototype.toString = function () {
    let totalCount = this.items.map(item => item.count);
    let result = totalCount.reduce((accum, currVal) => accum + currVal);
    return `In your cart ${result} items`
};

module.exports = ShopCart;
