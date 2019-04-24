const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

ShopCart.prototype.remove = function(item){
    const index = this.getItemIndex(item);
    this.items = this.items.filter(function(val, i) {
        return i != index;
    });
}

ShopCart.prototype.clear = function(){
    this.items = [];
}

ShopCart.prototype.setCount = function(item, count){
    const index = this.getItemIndex(item);
    if(count > 0)
        this.items[index].count = count;
    else
        throw 'Count should be greater than zero';
}

ShopCart.prototype.toString = function(){
    var result = 0;
    this.items.forEach(function(item){
        result += item.count;
    });
    return `In your cart ${result} items`;
}

module.exports = ShopCart;
