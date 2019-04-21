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



module.exports = ShopCart;
