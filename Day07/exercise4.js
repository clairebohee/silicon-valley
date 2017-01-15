console.log('!!!');
var hero;
var bad_guy;

hero = prompt("is the hero strong or weak?");
bad_guy = prompt ("is the bad guy strong or weak?");

if (hero === "strong"){
  if (bad_guy === "weak"){
    console.log ('적이 약하군, 아주 쉬운 싸움이겠어')
  }
  console.log ("만만한 상대가 아니군, 끝까지 싸워보자!")
}
