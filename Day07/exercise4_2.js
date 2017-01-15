var output_el = document.querySelector('#output');
var age;
var name;
age = prompt ("how old are you?");
name = prompt ("What's your name?");

if (age < 21){
  output_el.textContent = "sorry, son"
} else if ( age < 35 && age > 20 ) {
  output_el.textContent = "id please"
} else if (name === "Bob") {
  output_el.textContent = "you're banned, bob!"
} else {
  output_el.textContent = "come on in!"
}
