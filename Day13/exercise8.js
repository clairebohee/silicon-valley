var array_combiner = function(array1, array2) {
  var result = [];
  result = array1.concat(array2);
  return result;
}

var combined_array = array_combiner([1, 2, 3], [4, 5, 6])
console.log(combined_array)
