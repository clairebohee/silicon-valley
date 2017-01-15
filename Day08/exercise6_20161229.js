var input;
while ((input = prompt('가위/바위/보 중에 하나를 입력하세요')) !== '가위' && input !== '바위' && input !== '보'){
  console.log('가위/바위/보 중아 하나를 입력하라니까요')
}


var computer;
computer = Math.floor(Math.random()*3);
var game;

if (computer === 0) {
  game = '가위';
}
else if (computer === 1){
  game = '바위';
}
else {
  game = '보'
}


if (input === game){
  console.log('당신이 컴퓨터와 비겼습니다')
}
else if ((input === '가위') && (game === '바위')){
  console.log('당신이 컴퓨터에게 졌습니다.')
}
else if ((input === '가위') && (game === '보')){
  console.log('당신이 컴퓨터에게 이겼습니다.')
}
else if ((input === '바위') && (game === '가위')){
  console.log('당신이 컴퓨터에게 이겼습니다.')
}
else if ((input === '바위') && (game === '보')){
  console.log('당신이 컴퓨터에게 졌습니다.')
}
else if ((input === '보') && (game === '가위')){
  console.log('당신이 컴퓨터에게 졌습니다.')
}
else if ((input === '보') && (game === '바위')){
  console.log('당신이 컴퓨터에게 이겼습니다.')
}

console.log('다시 한번 해볼래요?')
