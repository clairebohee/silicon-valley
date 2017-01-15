var num1 = 0;
var num2 = 1;
var num3 = 0;
var counter = 2;

var fibonacci = function(input){
  if (input === 1){
    return num1;
  }
  else if (input === 2 ){
    return num2;
  }
  else{
    while(counter < input){
    num3 = num1 + num2;
    num1 = num2;
    num2 = num3;
    counter++
    }
  return num3;
  }
}
