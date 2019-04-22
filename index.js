const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;



// ...your code there

Cart.prototype.remove = function (item) {
     const index = this.getItemIndex(item);
    if (index !== null) {
       var res = this.items.splice(index,1);
    }
};

Cart.prototype.setCount = function (item, count) {
    const index = this.getItemIndex(item);
    if (index === null) {
        this.items.push({
            item: item,
            count: count
        });
    } else {
        this.items[index] = {
            item: item,
            count:count
        };
    }
};





module.exports = ShopCart;
