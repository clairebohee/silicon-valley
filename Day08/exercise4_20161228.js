var a = 1, sum = 1;
var n;
n = prompt("자연수를 하나 입력하세요");

while ( a <= n) {
	sum = sum * a
	a++
}

document.querySelector('#b').innerHTML = "1부터"  + '<p>' + n + '</p>' +
"까지의 정수를 곱한 값은" + '<span>' +
sum + '</span>' + "입니다.";
