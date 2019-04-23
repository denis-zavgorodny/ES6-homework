const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

ShopCart.prototype.remove = function (item) {
    const index = this.getItemIndex(item);
    if (index !== null) {
        this.items.splice(index, 1)
    }
};

ShopCart.prototype.clear = function () {
    this.items = [];
};

ShopCart.prototype.setCount = function (item, count) {
    const index = this.getItemIndex(item);
    if (count > 0) {
        this.items[index] = {
            item: item,
            count: count
        };
    } else {
        throw 'Count should be greater than zero'
    }
};

ShopCart.prototype.toString = function () {
    let result = 0;
    this.items.forEach(item => {
        let count = item.count;
        result = result + count;
    });
    return `In your cart ${result} items`
};

module.exports = ShopCart;
