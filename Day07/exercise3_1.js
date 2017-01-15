var name = prompt("이름을 입력하세요");
var number_of_rejections = 0;

if (prompt("커피한잔 할래요?")=== "아니요"){
  ++number_of_rejections
}

document.querySelector('#message').textContent = (name === 'Bob') ?
"Bob씨, 제가" + number_of_rejections + "번 이나 거절했자나요!" :
"안녕하세요, " + name + "님. 어서 오세요!"
