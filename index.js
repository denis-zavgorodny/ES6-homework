const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}

ShopCart.prototype = new Cart;

ShopCart.prototype.remove=function(item){
	const index=this.getItemIndex(item);
	if(index!=null)	{
		this.items.splice(index,1);
	}
}
	
ShopCart.prototype.clear=function(){
	
	while (this.items.length!=0){
		this.items.splice(0,1);
	}
	
}

ShopCart.prototype.setCount=function(item,count){
	if(count <=0){
		throw new RangeError('Count should be greater than zero');
	}
	const index=this.getItemIndex(item);
	if(index===null){
		this.add(item,count);
	}
	else{
		this.items[index].count=count;
	}
	
}

ShopCart.prototype.toString=function(){
	var count=0;
	for(index in this.items){
		count +=this.items[index].count;
	}
	return `In your cart ${count} items`;
}

module.exports = ShopCart;
