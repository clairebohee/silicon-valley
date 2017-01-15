var factorial_of_n = function(number){
  var counter = 1;
  var result1 = 1;
  while (counter < number){
     result1 = result1 * (counter+1);
     counter++;
  }
  return result1;
}
console.log(factorial_of_n(3));

var hopping = function(count_by, count_up_to){
  var number = 0;
  var result = 0;

  while (result < count_up_to){
    result = number * count_by;
    console.log(result);
    number++;
  }
}
hopping(3,15);
