var n = 10;
var counter = 1;
var sub;
var sum = '<ul id = "numbers">';

while (counter <= n) {
      if (counter - 1 === 0){
        sum = '<li>' + '"' + "welcome " + counter ;
      }
      else if (counter - 1 > 0){
        sum = sum + '<li>' + '"'+ "welcome " + counter;
        sub = 1;
        sum = sum + ", meet " + sub;
        sub++;
        while ( sub < (counter-1) ){
          sum = sum + ", " + sub;
          sub++;
        }
        if (counter > 2){
          sum = sum + " and " + (counter - 1);
        }
      }
    sum = sum + '"' + '</li>'
    counter++;
  }
sum = sum + "</ul>";
console.log(sum);

document.querySelector('#numbers').innerHTML = sum;
