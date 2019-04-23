const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

// ...your code there

Cart.prototype.remove = function (item) {
    const index = this.getItemIndex(item);
    this.items.splice(index,1);
}

Cart.prototype.clear = function () {
    
    delete this.items;
    
    //let len = this.items.length;
    //for (let i = 0; i<len; i++) {
      //  delete this.items[i];
    //}
}

Cart.prototype.setCount = function (_item, _count) {
    if (this._count <= 0) {
        return 'Count should be greater than zero';
    } else {
        return this.item;
    }


}

module.exports = ShopCart;