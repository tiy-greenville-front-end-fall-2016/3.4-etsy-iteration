(function(){
  "use strict";

  var itemTotal = items.reduce(function(total, item, index, array){
    return total + item.price;
  }, 0);

  console.log('The average price is $' + (itemTotal/items.length).toFixed(2) );
}());
