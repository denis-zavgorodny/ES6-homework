const Cart = require('./Cart');

function ShopCart() {
    this.items = [];
}
ShopCart.prototype = new Cart;



// ...your code there
ShopCart.prototype.remove = function(el) {
    const cart = new ShopCart();
    if(typeof el === 'object' && !Array.isArray(el)){
      cart.items.forEach(function(curVal,index){
      		if(curVal.title===el.title && curVal.id===el.id){
      			var res = cart.items.splice(index,1);
      			return cart.items;
      		}else{return cart.items;}
      });
    	
    }else{console.log("Sorry but we can't find this item");}

}


module.exports = ShopCart;
