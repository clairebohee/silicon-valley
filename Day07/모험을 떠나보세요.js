var name;
var country;
var food;

name = prompt("이름을 알려주세요")
country = prompt("어느 나라에 여행가고 싶나요?");
food = prompt("어떤 음식을 먹고 싶나요?");

if(country === "일본"){
document.querySelector("#answer").textContent =
name + "씨," + country + "부모님과 함께 잘 다녀 오세요!" + food + "도 꼭 드시고요!"
}
else{
document.querySelector("#answer").textContent =
name + "씨," + country + "잘 다녀 오세요!" + food + "도 꼭 드시고요!"
}
