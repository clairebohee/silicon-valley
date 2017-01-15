var target = [ 1, 'two', 3, 'for', 5, 'six', 'hello']

var result = false;

var guess = function(array){
  for(var i=0; i< array.length; i++){
    if(target[i] === 'hello'){
      result = true;
    }
  }
  return result;
}
guess(target);

var target = [ 1, 'two', 3, 'for', 5, 'six', 'hello']
var count = 0;

var count_numbers = function(array){
  for(var i=0; i< array.length; i++){
    if(typeof target[i] === "number"){
      count++;
    }
  }
  return count;
}
count_numbers(target);


var target = [ 1, 'two', 3, 'for', 5, 'six', 'hello']
var new_array = [];
var j=0;

var uneven_numbers = function(array){
  for(var i=0; i< array.length; i++){
    if(i%2 === 1){
      new_array[j] = array[i];
      console.log(new_array[j]);
      j++;
    }
  }
  return new_array;
}
uneven_numbers(target);


var target = [1, 3, 6, 4, 7, 9]
var sum = 0;

var sum_array = function(array){
  for(var i=0; i<array.length; i++){
    sum = sum + array[i]
  }
  return sum;
}

sum_array(target);


var target = [4,2,3]
var sum = 1;

var array_math = function(array, operator){
  for(var i=0; i<array.length; i++){
    sum = eval( sum + operator + array[i]);
    console.log(sum);
  }
}

array_math(target, "*" );

var first = [1,2,3,4,5];
var second = ["a", "b", "c"]
var limit;
var entire = [];
var counter = 0;

var zipper = function(array1, array2){
  if (array1.length - array2.length >= 0) {
    limit = array1.length;
  }
  else{
    limit = array2.length;
  }

  for(var i=0; i<limit; i++){
    if (array1[i] && array2[i]){
      entire[counter] = array1[i];
      counter++;
      entire[counter] = array2[i];
      counter++;
    }
    else if (!array1[i] && array2[i]){
      entire[counter] = array2[i];
      counter++;
    }
    else if (array1[i] && !array2[i]){
      entire[counter] = array1[i];
      counter++;
    }
  }
  return entire;
}

zipper(first, second);


var one = [1,2,5,9]
var two = [3,7,19]
var three = [];
var j = 0;


var merge_sorted = function (array1, array2){
  for (i=0; i< one.length; i++){
    three[j] = one[i];
    j++;
  }
  for (i=0; i< two.length; i++){
    three[j] = two[i];
    j++;
  }
  console.log(three);
  three.sort(function(a, b){return a-b});
  return three;
}

merge_sorted(one, two);




var array = [1,1];

var fibonacci = function(number){
  for(i=2; i<number; i++){
    array[i] = array[i-1] + array[i-2];
  }
  return array;
}

fibonacci(100);
