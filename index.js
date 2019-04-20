const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;

// ...your code there
ShopCart.prototype.remove = function(item) {
	const index = this.getItemIndex(item);
	this.items.splice(index, 1);
}

ShopCart.prototype.clear = function() {
	this.items = [];
}

ShopCart.prototype.setCount = function(item, count) {
	const index = this.getItemIndex(item);
	if (count <= 0) {
		throw "Count should be greater than zero";
	}
	this.items[index].count = count;
}

ShopCart.prototype.toString = function() {
	let total = 0;
	this.items.forEach(function(item) {
		total += item.count;
	});
	return `In your cart ${total} items`;
}

module.exports = ShopCart;
