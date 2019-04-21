const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

ShopCart.prototype.remove = function(item){
    const index = this.getItemIndex(item);

    this.items.splice(index, 1);
};

ShopCart.prototype.clear = function(){
    return this.items = [];
};

ShopCart.prototype.setCount = function(item, count){
    const index = this.getItemIndex(item);

    if(count <= 0 ) {
        throw Error('Count should be greater than zero')
    } else {
        this.items[index] = {
            item: item,
            count: this.items[index].count = count
        };
    }
};

ShopCart.prototype.toString = function (){
    const arr = [0];
    const sum = (accumulator, currentValue) => accumulator + currentValue;

    for(let i = 0; i < this.items.length; i++){
        arr.push(this.items[i].count);
    }

    return `In your cart ${ arr.reduce(sum) } items`
};

module.exports = ShopCart;
