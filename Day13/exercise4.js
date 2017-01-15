var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are"
var scrambled_array = scrambled_poem.split(' ');
var unscrambled_array = [];

console.log(scrambled_array);

var i = 0;
var long = scrambled_array.length;
while(i < (long)){
  unscrambled_array[i] = scrambled_array.pop();
  unscrambled_array[i+1] = scrambled_array.shift();
  i = i + 2;
}
console.log(unscrambled_array);
var sentence = unscrambled_array.join(' ')
