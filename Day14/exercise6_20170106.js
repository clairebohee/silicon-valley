var numbers = [2, 4, 5, 37, 0]
var doubled_numbers = {} // should be (2: 4, 4: 8, 5: 10, 37: 74, 0: 0)

for (var key in numbers){
  console.log(numbers[key]);
  doubled_numbers[numbers[key]] = numbers[key]*2;

}

console.log(doubled_numbers);
