var multiplies_by = function(number1){
  return function(number2){
    return number1*number2;};
}


var times5 = multiplies_by(5)
times5(4) // 20

var times10 = multiplies_by(10)
times10(32) // 320
