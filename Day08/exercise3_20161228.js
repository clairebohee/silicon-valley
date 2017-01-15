var n;
n = 10;

var counter;
counter = 1;

var result = 0;

while(counter <= n){
  if (counter % 2 === 0){
  result = result + '<p class = "even">' + counter + "," + '</p>' + '<hr>'
  }
  else{
  result = result + '<p class = "odd">' + counter + '<p>'
  }
  counter++
}

document.querySelector('#a').innerHTML = result
document.querySelector('#target').textContent = 'hi'
