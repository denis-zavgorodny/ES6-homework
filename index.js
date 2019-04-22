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

Cart.prototype.clear = function () {
   //if (this.items.length != 0) {
       this.items.splice(this.items.length);
    //}
};

Cart.prototype.setCount = function () {
    return null;
};



module.exports = ShopCart;
