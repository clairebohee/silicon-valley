var a = 1;
var result = '';

while (a<= 100){

	if (a%15 === 0){
  result = result + '<div class="fizzbuzz">' + "FizzBuzz" + '</div>' + '<br>';
    }
	else if (a%3 === 0){
  result = result + '<div class="fizz">' + "Fizz" + '</div>' + '<br>';
    }
	else if (a%5 === 0){
  result = result + '<div class="buzz">' + "Buzz" + '</di>' +'<br>';
    }
	else {
  result = result + '<div>' + a + '</div>' + '<br>';
    }
	a++;
}

document.querySelector('#a').innerHTML = result;
