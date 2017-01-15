var name
var age
var gender
var is_member
var thirsty
var drink_of_choice

name = prompt("이름을 입력해 주세요")
age = prompt("몇살이신가요?")
is_member = prompt("이사이트의 멤버이신가요?")

//웹사이트 멤버가 아니거나 21살 이하이면,
//그들을 사모님, 또는 사장님이라고 부르시고, 정중히 클럽에 가입할 수 없다고 가입 요청을 거절해주세요.
if(is_member === "아니요" || age < 21 ){
  conlole.log("사모님/사장님, 클럽에 가입하실 수 없습니다.")
}
else{
  console.log("미스터/미스, 우리 웹사이트에 오신 것을 환영합니다!")
}

thirsty = prompt("목 마르신가요?")

if(thirsty === "네"){
  console.log("무슨 음료를 원하시나요?")
}

drink_of_choice = prompt ("가장 좋아하는 음료가 무엇인가요?")

if(drink_of_choice !== "우유"){
  console.log("네," + name + "님 지금 즉시" + drink_of_choice + " 드리겠습니다")
}
else{
  window.location=("https://www.google.com")
}
