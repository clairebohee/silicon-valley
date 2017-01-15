var current1 = prompt("현재 금액을 입력해 주세요");
console.log(current1);
var current2 = current1;
var goal = prompt("목표 금액을 입력해 주세요");
console.log(goal);
var interest = prompt("연이율을 입력해 주세요(예를 들어 5% 라면 0.05로 입력).");
console.log(interest);

var counter = 0;

while (current2 < goal){
  current2 = parseInt(current2) + parseInt(current2*interest);
  counter++;
  console.log(current2);
  console.log(counter);
}

document.querySelector('div#result').textContent = "현재의 금액" + current1 + "원이 이자율"
+ interest*100 + "%로 목표금액" + goal +"원이 되려면 필요한 시간은" + counter + "년입니다";
