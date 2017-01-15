//function을 input으로 받아 실행시키고 return된 value를 `div#answer`에 넣어주는 answer_logger라는 function을 만들어주세요.

var callback = function(){
  console.log("hi");
}

var answer_logger = function(fn ){
  $('div#answer').text(fn());
}



function grandFather(house) {
	 console.log(house + car + bicycle);
   return function father(car) {
	 console.log(house + car + bicycle);
			return function sun(bicycle){
				console.log(house + car + bicycle);
} // end of sun
} // end of father
};// end of grandFather



var say_hi = function () {
  console.log('hi')
}

// console.log(say_hi);
// console.log(say_hi());

var greeter = say_hi

console.log(greeter);

say_hi()
greeter()

say_hi = function () {
  console.log('meh')
}

say_hi() // ??
greeter() // ??

var runner = function (fn) {
  console.log('받은 function을 invoke하겠습니다')
  fn();
}

runner( function(){ console.log('okay') } )
runner(say_hi)
runner(greeter)

runner( say_hi() ) // ??



var returns_a_func = function () {
  return function(){ console.log('BOOP!') }
}

returns_a_func();





var word = 'original'
var phrase = " is the word"

var word_changer = function (new_word) {
  var word = new_word
  console.log(word + phrase)
}

console.log(word + phrase) // ??
// console.log(new_word + phrase) // ??
word_changer('changed')
console.log(word + phrase) // ??
// console.log(new_word + phrase) // ??

// what's different here?
var leaky_word_changer = function (new_word) {
  word = new_word
  console.log(word + phrase)
}

leaky_word_changer('changed')
console.log(word + phrase) // ??
console.log(new_word + phrase) // ??




var returns_a_func = funcion() {
  var word = 'I can see inside'
  return function(){console.log('BOOP!' + word)}
}

var word = 'I can see outside'

var new_booper = returns_a_func()
new_booper()
