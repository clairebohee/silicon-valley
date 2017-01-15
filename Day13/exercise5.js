var array_value = ['a','b','c','d','e'];
var long = array_value.length

var reverser = function(array){
  var reversed_array = [];

  for (var i = 0; i < long; i++){
    reversed_array[i] = array[long-i-1]
  }
  return reversed_array;
}

reverser(array_value);
