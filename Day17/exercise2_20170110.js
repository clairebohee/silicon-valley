var answer_collector = function(array){
  var new_array = [];
    for (var i=0; i<array.length; i++){
      new_array[i] = array[i]();
      console.log(new_array[i]);
    }
    return new_array;
}


var fn1 = function(){
  return "first value"
}

answer_collector([
  fn1,
  function(){
    return "second value"
  }
])  // return되는 value:   ['first value', 'second value']

// console.log(answer_collector);
