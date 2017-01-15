var input = prompt("이 세개의 색 중 (green/blue/yellow) 어떤 색의 테마의 웹페이지를 보고 싶나요?");

console.log(input);
console.log(input !== "green" , input !=="blue" );
while ((input !== "green") && (input !=="blue") && (input !== "yellow") ){
  prompt("이 세개의 색 중 (green/blue) 어떤 색의 테마의 웹페이지를 보고 싶나요?");
  }

if (input === "green"){
  $('#one').html('hello');
  $('body').css('background-color', 'lightgreen');
  $('#one').css('color', 'green');
  $('#one').css('border-color', 'darkgreen');
  $('#one').css('border-style', 'solid');
}
else if (input === "blue"){
  $('body').css('background-color', 'lightblue');
  $('#one').css('color', 'blue');
  $('#one').css('border-color', 'darkblue');
  $('#one').css('border-style', 'solid');
}
else if (input === "yellow"){
  $('body').css('background-color', 'lightyellow');
  $('#one').css('color', 'yellow');
  $('#one').css('border-color', 'darkyellow');
  $('#one').css('border-style', 'solid');
}
