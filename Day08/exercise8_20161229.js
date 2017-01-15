var num = Math.floor((Math.random()*10));
var counter = 1;

var input;
input = prompt('0보다 크고 10보다 작은 정수 n의 값을 맞춰보세요');
console.log(input);

var int;
int = parseInt(input);
console.log(int);

while (isNaN(int) === true){
  input = prompt('0보다 크고 10보다 작은 정수 n의 값을 다시 맞춰보세요');
  int = parseInt(input);
  counter++;
}

while (int !== num){
  if (int < num){
    input = prompt(int + '보다 큰 수입니다.0보다 크고 10보다 작은 정수 n의 값을 다시 맞춰보세요');
    int = parseInt(input);
    counter++;
  }
  else if (int > num){
    input = prompt(int + '보다 작은 수입니다.0보다 크고 10보다 작은 정수 n의 값을 다시 맞춰보세요');
    int = parseInt(input);
    counter++;
  }
}

if (int === num){
  document.querySelector('#story').innerHTML = "축하축하! n의 값은" + num + "입니다" + counter +"번째에 맞췄습니다!";
}
