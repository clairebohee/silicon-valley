var response, image_path;

document.querySelector('#message').textContent = prompt("다음 두개 문장중 하나를 입력하세요: 독수리는 자정에 날라갑니다 / 적이다 공격하라")
var secret_saying = document.querySelector('#message').textContent

if (secret_saying === "독수리는 자정에 날라갑니다"){
  response = "통과하세요"
  image_path = "image/open_door.jpeg"
}
else{
  reponse = "적이다 공격하라"
  image_path = "image/attack.jpeg"
}

document.querySelector('#result').textContent = response
document.querySelector('img').src = image_path
