const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}

ShopCart.prototype = new Cart;


// ...your code there

ShopCart.prototype.remove = function (item) {
    const index = this.getItemIndex(item); // find element index  

    if (index > -1) {
        this.items.splice(index, 1);
    }
    return false;
}

ShopCart.prototype.clear = function () {
    this.items.length = 0;
}

ShopCart.prototype.setCount = function (item, count) {
    const index = this.getItemIndex(item);

    if (count > 0) {
        this.items[index] = {
            item: item,
            count: count
        };
    } else {
        throw 'Count should be greater than zero';
    }

};


Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b.count;
    }, 0);
}



ShopCart.prototype.toString = function cartToString() {

    return `In your cart ${this.items.sum()} items`

}


//end of my code

module.exports = ShopCart;