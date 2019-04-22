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
    if(count<=0)
    	throw("Count should be greater than zero");
    
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

Cart.prototype.clear = function(){
	if(this.items.length>0){
		this.items.splice(this.items.length);
	}
};


Cart.prototype.toString = function(){
	let _items;
	this.items.forEach(function(curVal,index){
		 _items += this.items[index].count;
	});
	console.log(this.items);
	
};




module.exports = ShopCart;
